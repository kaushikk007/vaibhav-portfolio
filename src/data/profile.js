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

const credly = (uuid) =>
  `https://images.credly.com/images/${uuid}/image.png`;

export const certifications = [
  { name: 'Solutions Architect', level: 'Professional', tier: 'pro',         badge: credly('2d84e428-9078-49b6-a804-13c15383d0de') },
  { name: 'DevOps Engineer',     level: 'Professional', tier: 'pro',         badge: credly('bd31ef42-d460-493e-8503-39592aaf0458') },
  { name: 'Security',            level: 'Specialty',    tier: 'specialty',   badge: credly('53acdae5-d69f-4dda-b650-d02ed7a50dd7') },
  { name: 'Advanced Networking', level: 'Specialty',    tier: 'specialty',   badge: credly('4d08274f-64c1-495e-986b-3143f51b1371') },
  { name: 'Machine Learning',    level: 'Specialty',    tier: 'specialty',   badge: credly('778bde6c-ad1c-4312-ac33-2fa40d50a147') },
  { name: 'Machine Learning',    level: 'Associate',    tier: 'associate',   badge: credly('1a634b4e-3d6b-4a74-b118-c0dcb429e8d2') },
  { name: 'Solutions Architect', level: 'Associate',    tier: 'associate',   badge: credly('0e284c3f-5164-4b21-8660-0d84737941bc') },
  { name: 'Data Engineer',       level: 'Associate',    tier: 'associate',   badge: credly('e5c85d7f-4e50-431e-b5af-fa9d9b0596e7') },
  { name: 'Developer',           level: 'Associate',    tier: 'associate',   badge: credly('b9feab85-1a43-4f6c-99a5-631b88d5461b') },
  { name: 'SysOps Administrator',level: 'Associate',    tier: 'associate',   badge: credly('f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1') },
  { name: 'Cloud Practitioner',  level: 'Foundational', tier: 'foundational',badge: credly('00634f82-b07f-4bbd-a6bb-53de397fc3a6') },
  { name: 'AI Practitioner',     level: 'Foundational', tier: 'foundational',badge: credly('4d4693bb-530e-4bca-9327-de07f3aa2348') },
  { name: 'Cloud Digital Leader',level: 'Certification',tier: 'gcp',         badge: credly('44994cda-b5b0-44cb-9a6d-d29b57163073') },
  { name: 'Generative AI Leader',level: 'Certification',tier: 'gcp',         badge: 'https://images.credly.com/images/ec23e41a-0f32-4a98-9c00-28925621b281/blob' },
  { name: 'Azure AI Fundamentals',level: 'AZ-900',     tier: 'microsoft',    badge: 'https://images.credly.com/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png' },
  { name: 'Azure Data Fundamentals',level: 'DP-900',   tier: 'microsoft',    badge: 'https://images.credly.com/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png' },
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
    company: 'Wipro',
    role: 'DevSecOps Engineer',
    location: 'London, UK',
    period: 'Feb 2026 – Present',
    highlights: [
      "Engaged as an AWS Cloud Security Engineer for one of the UK's largest insurance enterprises, as part of Wipro's AWS delivery team",
      'Implementing core AWS Landing Zone / Control Tower guardrails and security controls to ensure workloads migrate safely into a governed, enterprise-grade cloud foundation',
      "Delivering IAM, data protection, secure connectivity, and logging/monitoring security building blocks aligned to the client's required security outcomes",
      'Applying deep AWS Security expertise and multi-account governance experience to embed security-by-design across the migration programme',
    ],
  },
  {
    company: 'Wipro AWS Partner Lab',
    role: 'Cloud Architect / AWS Cloud Engineer II',
    location: 'India',
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
    location: 'India',
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
    location: 'India',
    period: 'Jul 2021 – Mar 2022',
    highlights: [
      'Developed C++ solutions and worked on SIP protocol call flows',
      'Hands-on troubleshooting and routing resolution for SIP call flow issues in production',
    ],
  },
];
