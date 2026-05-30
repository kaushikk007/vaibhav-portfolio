terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = "eu-west-2"
}

resource "random_id" "suffix" {
  byte_length = 4
}

# ── State bucket ─────────────────────────────────────────────────────────────

resource "aws_s3_bucket" "tfstate" {
  bucket = "vaibhav-portfolio-tfstate-${random_id.suffix.hex}"

  tags = {
    Project   = "vaibhav-portfolio"
    ManagedBy = "terraform"
  }
}

resource "aws_s3_bucket_versioning" "tfstate" {
  bucket = aws_s3_bucket.tfstate.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "tfstate" {
  bucket = aws_s3_bucket.tfstate.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "tfstate" {
  bucket                  = aws_s3_bucket.tfstate.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# ── DynamoDB lock table ───────────────────────────────────────────────────────

resource "aws_dynamodb_table" "tflock" {
  name         = "vaibhav-portfolio-tflock"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }

  tags = {
    Project   = "vaibhav-portfolio"
    ManagedBy = "terraform"
  }
}
