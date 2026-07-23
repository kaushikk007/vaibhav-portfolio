variable "project" {
  default = "vaibhav-portfolio"
}

variable "region" {
  default = "eu-west-2"
}

variable "container_port" {
  default = 80
}

variable "task_cpu" {
  default = 256
}

variable "task_memory" {
  default = 512
}

variable "desired_count" {
  default = 1
}
