output "state_bucket_name" {
  description = "Paste this into infra/phase-2/backend.tf"
  value       = aws_s3_bucket.tfstate.bucket
}

output "dynamodb_table_name" {
  value = aws_dynamodb_table.tflock.name
}
