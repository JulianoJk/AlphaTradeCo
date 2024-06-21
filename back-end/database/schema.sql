-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS alpha_trades;

-- Use the created database
USE alpha_trades;

-- Create the languages table
CREATE TABLE IF NOT EXISTS `languages` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(5) NOT NULL UNIQUE,
    `name` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create the menu items table
CREATE TABLE IF NOT EXISTS `menu_items` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create the menu item translations table
CREATE TABLE IF NOT EXISTS `menu_item_translations` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `menu_item_id` INT(11) NOT NULL,
    `language_id` INT(11) NOT NULL,
    `translation` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`language_id`) REFERENCES `languages`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert initial data for languages
INSERT INTO `languages` (`code`, `name`) VALUES 
('en', 'English'),
('it', 'Italian'),
('de', 'German'),
('el', 'Greek');

-- Insert initial data for menu items
INSERT INTO `menu_items` (`key`) VALUES 
('home'),
('products'),
('contact'),
('about_us'),
('sustainability'),
('faq');

-- Insert initial data for menu item translations (example for English)
INSERT INTO `menu_item_translations` (`menu_item_id`, `language_id`, `translation`) VALUES 
((SELECT `id` FROM `menu_items` WHERE `key` = 'home'), (SELECT `id` FROM `languages` WHERE `code` = 'en'), 'Home'),
((SELECT `id` FROM `menu_items` WHERE `key` = 'products'), (SELECT `id` FROM `languages` WHERE `code` = 'en'), 'Products'),
((SELECT `id` FROM `menu_items` WHERE `key` = 'contact'), (SELECT `id` FROM `languages` WHERE `code` = 'en'), 'Contact'),
((SELECT `id` FROM `menu_items` WHERE `key` = 'about_us'), (SELECT `id` FROM `languages` WHERE `code` = 'en'), 'About Us'),
((SELECT `id` FROM `menu_items` WHERE `key` = 'sustainability'), (SELECT `id` FROM `languages` WHERE `code` = 'en'), 'Sustainability'),
((SELECT `id` FROM `menu_items` WHERE `key` = 'faq'), (SELECT `id` FROM `languages` WHERE `code` = 'en'), 'FAQ');

-- Insert initial data for menu item translations (example for Italian)
INSERT INTO `menu_item_translations` (`menu_item_id`, `language_id`, `translation`) VALUES 
((SELECT `id` FROM `menu_items` WHERE `key` = 'home'), (SELECT `id` FROM `languages` WHERE `code` = 'it'), 'Home'),
((SELECT `id` FROM `menu_items` WHERE `key` = 'products'), (SELECT `id` FROM `languages` WHERE `code` = 'it'), 'Prodotti'),
((SELECT `id` FROM `menu_items` WHERE `key` = 'contact'), (SELECT `id` FROM `languages` WHERE `code` = 'it'), 'Contatto'),
((SELECT `id` FROM `menu_items` WHERE `key` = 'about_us'), (SELECT `id` FROM `languages` WHERE `code` = 'it'), 'Chi Siamo'),
((SELECT `id` FROM `menu_items` WHERE `key` = 'sustainability'), (SELECT `id` FROM `languages` WHERE `code` = 'it'), 'Sostenibilità'),
((SELECT `id` FROM `menu_items` WHERE `key` = 'faq'), (SELECT `id` FROM `languages` WHERE `code` = 'it'), 'FAQ');
