CREATE TABLE IF NOT EXISTS `users` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(256) NOT NULL UNIQUE,
  `nickname` VARCHAR(64) NOT NULL,
  `password` VARCHAR(64) NOT NULL,
  `chatbot_token` INT NOT NULL DEFAULT 1000,
  `verification_code` VARCHAR(64),
  `expired_at` DATETIME,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `terminal_templates` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(64) NOT NULL UNIQUE,
  `image_name` VARCHAR(64) NOT NULL,
  `size` VARCHAR(10) NOT NULL,
  `description` VARCHAR(1024) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `terminals` (
  `id` CHAR(64) NOT NULL,
  `name` VARCHAR(64) NOT NULL UNIQUE,
  `size` VARCHAR(10) NOT NULL,
  `remark` VARCHAR(1024) NOT NULL,
  `owner_id` BIGINT UNSIGNED NOT NULL,
  `template_id` BIGINT UNSIGNED NOT NULL,
  `total_duration` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`owner_id`) REFERENCES `users`(`id`),
  FOREIGN KEY (`template_id`) REFERENCES `terminal_templates`(`id`)
);

