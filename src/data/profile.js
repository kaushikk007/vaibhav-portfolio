export const profile = {
  name: 'Vaibhav Kaushik',
  title: 'Cloud Architect',
  subtitle: 'AWS Solutions Specialist',
  tagline: 'I architect cloud systems for a living and break them for fun.',
  location: 'London, UK',
  company: 'Wipro AWS Partner Lab',
  role: 'Cloud Architect / AWS Cloud Engineer II',
  summary:
    '5+ years designing enterprise-grade AWS infrastructure. 13 AWS certifications. AWS Community Builder. Specialising in multi-account governance, infrastructure automation, and Well-Architected cloud delivery.',
  certCount: 13,
  followerCount: '10k+',
  uptimeStat: '99.9%',
  costStat: '20%',
  deploySpeedStat: '40%',
};

export const links = {
  linkedin: 'https://linkedin.com/in/vaibhav-kaushik-4824161a0',
  youtube: 'https://www.youtube.com/@VKDevOps/videos',
  twitter: 'https://x.com/kaushiksays_',
  devto: 'https://dev.to/vaibhavoncloud',
  medium: 'https://medium.com/@vaibhavkaushik836',
  credly: 'https://credly.com/users/vaibhav-kaushik.551d449c',
};

export const certifications = [
  { name: 'Solutions Architect', level: 'Professional', tier: 'pro' },
  { name: 'DevOps Engineer', level: 'Professional', tier: 'pro' },
  { name: 'Security', level: 'Specialty', tier: 'specialty' },
  { name: 'Advanced Networking', level: 'Specialty', tier: 'specialty' },
  { name: 'Machine Learning', level: 'Specialty', tier: 'specialty' },
  { name: 'Machine Learning', level: 'Associate', tier: 'associate' },
  { name: 'Solutions Architect', level: 'Associate', tier: 'associate' },
  { name: 'Data Engineer', level: 'Associate', tier: 'associate' },
  { name: 'Developer', level: 'Associate', tier: 'associate' },
  { name: 'SysOps Administrator', level: 'Associate', tier: 'associate' },
  { name: 'Cloud Practitioner', level: 'Foundational', tier: 'foundational' },
  { name: 'AI Practitioner', level: 'Foundational', tier: 'foundational' },
  { name: 'Azure AI Fundamentals', level: 'AZ-900', tier: 'other' },
];

export const stack = [
  { category: 'Core', items: ['AWS (Expert)', 'Terraform', 'Kubernetes', 'Docker'] },
  { category: 'CI/CD', items: ['GitHub Actions', 'CodePipeline', 'CodeBuild', 'GitLab CI'] },
  { category: 'Governance', items: ['Control Tower', 'Organizations', 'SCPs', 'IAM / SSO'] },
  { category: 'Observability', items: ['CloudWatch', 'Prometheus', 'SNS Alerting'] },
  { category: 'AI/ML', items: ['Bedrock', 'AgentCore', 'SageMaker', 'Strands'] },
  { category: 'Compute', items: ['EC2', 'ECS Fargate', 'Lambda', 'EKS'] },
];

export const experience = [
  {
    company: 'Wipro AWS Partner Lab',
    role: 'Cloud Architect / AWS Cloud Engineer II',
    period: 'Apr 2023 – Present',
    highlights: [
      "Sole owner of Wipro's internal AWS estate — 50+ accounts via Control Tower, Organizations, and SCPs",
      'Co-developed and published AWS Control Tower Network Security on the AWS Partner Solutions Finder',
      'Reduced deployment time by 40% via Terraform and AWS DevOps tool automation',
      'Optimised cloud costs by 20% through autoscaling, right-sizing, and Spot Instance strategies',
      'Delivered 100+ executive briefings to C-suite and enterprise audiences globally',
    ],
  },
  {
    company: 'Wipro',
    role: 'AWS Cloud Engineer',
    period: 'Mar 2022 – Mar 2023',
    highlights: [
      'Managed Linux production servers on EC2 with security groups and IAM least-privilege enforcement',
      'Designed and integrated AWS infrastructure for client workloads with on-premises systems',
      'Monitored infrastructure health via CloudWatch and SNS with proactive alerting',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Analyst I',
    period: 'Jul 2021 – Mar 2022',
    highlights: [
      'Developed C++ solutions and worked on SIP protocol call flows',
      'Hands-on troubleshooting and routing resolution for SIP call flow issues in production',
    ],
  },
];
