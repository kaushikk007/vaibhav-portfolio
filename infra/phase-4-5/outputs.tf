output "ecr_repository_url" {
  description = "Use this URL when pushing Docker images"
  value       = aws_ecr_repository.site.repository_url
}

output "alb_dns_name" {
  description = "ALB URL — site is accessible here before CloudFront is wired up"
  value       = "http://${aws_lb.site.dns_name}"
}

output "ecs_cluster_name" {
  value = aws_ecs_cluster.site.name
}

output "ecs_service_name" {
  value = aws_ecs_service.site.name
}
