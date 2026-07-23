# ── Custom domain: vaibhavkaushik.com + www.vaibhavkaushik.com ──────────────
# Domain registered manually via Route 53 Registered Domains (real purchase,
# not managed by Terraform). Route 53 auto-creates the hosted zone once
# registration completes; we just reference it here.

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1" # ACM certs for CloudFront must live in us-east-1
}

data "aws_route53_zone" "root" {
  name         = "vaibhavkaushik.com"
  private_zone = false
}

resource "aws_acm_certificate" "site" {
  provider                  = aws.us_east_1
  domain_name               = "vaibhavkaushik.com"
  subject_alternative_names = ["www.vaibhavkaushik.com"]
  validation_method          = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Project   = var.project
    ManagedBy = "terraform"
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.site.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id = data.aws_route53_zone.root.zone_id
  name    = each.value.name
  type    = each.value.type
  records = [each.value.record]
  ttl     = 60
}

resource "aws_acm_certificate_validation" "site" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.site.arn
  validation_record_fqdns = [for r in aws_route53_record.cert_validation : r.fqdn]
}

# ── Route 53 alias records → CloudFront ──────────────────────────────────────

resource "aws_route53_record" "apex_a" {
  zone_id = data.aws_route53_zone.root.zone_id
  name    = "vaibhavkaushik.com"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "apex_aaaa" {
  zone_id = data.aws_route53_zone.root.zone_id
  name    = "vaibhavkaushik.com"
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_a" {
  zone_id = data.aws_route53_zone.root.zone_id
  name    = "www.vaibhavkaushik.com"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_aaaa" {
  zone_id = data.aws_route53_zone.root.zone_id
  name    = "www.vaibhavkaushik.com"
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
