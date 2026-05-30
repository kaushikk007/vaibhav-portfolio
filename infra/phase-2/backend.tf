# Run bootstrap first, then replace FILL_IN_AFTER_BOOTSTRAP with the
# state_bucket_name output, then run: terraform init

terraform {
  backend "s3" {
    bucket         = "vaibhav-portfolio-tfstate-ae2d94b9"
    key            = "phase-2/terraform.tfstate"
    region         = "eu-west-2"
    dynamodb_table = "vaibhav-portfolio-tflock"
    encrypt        = true
  }
}
