terraform {
  backend "s3" {
    bucket         = "vaibhav-portfolio-tfstate-ae2d94b9"
    key            = "phase-4-5/terraform.tfstate"
    region         = "eu-west-2"
    dynamodb_table = "vaibhav-portfolio-tflock"
    encrypt        = true
  }
}
