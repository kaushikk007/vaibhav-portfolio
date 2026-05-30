output "cloudfront_url" {
  description = "Live site URL"
  value       = "https://${aws_cloudfront_distribution.site.domain_name}"
}

output "s3_bucket_name" {
  description = "Use this bucket name when syncing dist/ after a build"
  value       = aws_s3_bucket.site.bucket
}

output "cloudfront_distribution_id" {
  description = "Use this ID to invalidate the cache after a deploy"
  value       = aws_cloudfront_distribution.site.id
}
