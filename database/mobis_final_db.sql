-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 24, 2025 at 04:17 PM
-- Server version: 8.0.30
-- PHP Version: 8.2.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mobis`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` bigint UNSIGNED NOT NULL,
  `invoice_no` int NOT NULL,
  `invoice_date` date NOT NULL,
  `type` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tenant_id` int DEFAULT NULL,
  `maintenance_id` int DEFAULT NULL,
  `amount` decimal(8,2) NOT NULL,
  `payment` tinyint(1) NOT NULL DEFAULT '0',
  `payment_date` date DEFAULT NULL,
  `paid_amount` decimal(8,2) NOT NULL DEFAULT '0.00',
  `due_amount` decimal(8,2) NOT NULL DEFAULT '0.00',
  `payment_type` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_info` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remarks` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('active','deactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_by` int NOT NULL DEFAULT '1',
  `updated_by` int NOT NULL DEFAULT '1',
  `created_ip` int NOT NULL DEFAULT '1',
  `updated_ip` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `account_details`
--

CREATE TABLE `account_details` (
  `id` bigint UNSIGNED NOT NULL,
  `account_id` int NOT NULL,
  `account_head_type` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `account_head_id` int NOT NULL,
  `amount` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('active','deactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_by` int NOT NULL DEFAULT '1',
  `updated_by` int NOT NULL DEFAULT '1',
  `created_ip` int NOT NULL DEFAULT '1',
  `updated_ip` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `apt_funds`
--

CREATE TABLE `apt_funds` (
  `id` bigint UNSIGNED NOT NULL,
  `month` date NOT NULL,
  `opening_balance` decimal(8,2) NOT NULL,
  `total_income` decimal(8,2) NOT NULL DEFAULT '0.00',
  `total_expense` decimal(8,2) NOT NULL DEFAULT '0.00',
  `closing_balance` decimal(8,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('active','deactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_by` int NOT NULL DEFAULT '1',
  `updated_by` int NOT NULL DEFAULT '1',
  `created_ip` int NOT NULL DEFAULT '1',
  `updated_ip` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `module_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sorting` int NOT NULL DEFAULT '0',
  `status` enum('active','deactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` bigint UNSIGNED NOT NULL,
  `iso` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `iso3` char(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `numcode` smallint DEFAULT NULL,
  `phonecode` int NOT NULL,
  `sorting` int NOT NULL DEFAULT '0',
  `status` enum('active','deactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `entities`
--

CREATE TABLE `entities` (
  `id` bigint UNSIGNED NOT NULL,
  `floor_id` int NOT NULL,
  `title` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parking` tinyint(1) NOT NULL DEFAULT '0',
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('active','deactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_by` int NOT NULL DEFAULT '1',
  `updated_by` int NOT NULL DEFAULT '1',
  `created_ip` int NOT NULL DEFAULT '1',
  `updated_ip` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `floors`
--

CREATE TABLE `floors` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('active','deactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_by` int NOT NULL DEFAULT '1',
  `updated_by` int NOT NULL DEFAULT '1',
  `created_ip` int NOT NULL DEFAULT '1',
  `updated_ip` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `maintenances`
--

CREATE TABLE `maintenances` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `floor_id` int NOT NULL,
  `entity_id` int NOT NULL,
  `maintenance_date` date NOT NULL,
  `reason` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `cost` decimal(8,2) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `account` tinyint(1) NOT NULL DEFAULT '0',
  `status` enum('active','deactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_by` int NOT NULL DEFAULT '1',
  `updated_by` int NOT NULL DEFAULT '1',
  `created_ip` int NOT NULL DEFAULT '1',
  `updated_ip` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2020_05_26_071839_create_roles_table', 1),
(6, '2020_06_01_101148_create_site_settings_table', 1),
(7, '2021_02_22_050702_create_permissions_table', 1),
(8, '2021_02_22_050735_create_role_permissions_table', 1),
(9, '2021_02_22_062756_create_menus_table', 1),
(10, '2022_06_23_053641_create_admins_table', 1),
(11, '2022_07_16_095130_create_activity_log_table', 1),
(12, '2023_02_08_033828_create_profiles_table', 1),
(13, '2023_05_11_110836_create_user_login_infos_table', 1),
(14, '2023_06_05_105945_create_categories_table', 1),
(15, '2023_06_14_045514_create_countries_table', 1),
(16, '2024_09_09_052831_create_media_validators_table', 1),
(17, '2024_09_18_113232_create_help_infos_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` bigint UNSIGNED NOT NULL,
  `role_id` tinyint NOT NULL,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` enum('male','female','other') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `city` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip_code` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `road_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `block` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0=Active, 1=Deactive',
  `status` enum('active','deactive','trash') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_ip` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_ip` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rent_setups`
--

CREATE TABLE `rent_setups` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `setup_date` date NOT NULL,
  `garbage` decimal(12,2) NOT NULL DEFAULT '0.00',
  `security` decimal(12,2) NOT NULL DEFAULT '0.00',
  `cleaning` decimal(12,2) NOT NULL DEFAULT '0.00',
  `generator` decimal(12,2) NOT NULL DEFAULT '0.00',
  `others` decimal(10,0) NOT NULL DEFAULT '0',
  `service_charge` decimal(12,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('active','deactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_by` int NOT NULL DEFAULT '1',
  `updated_by` int NOT NULL DEFAULT '1',
  `created_ip` int NOT NULL DEFAULT '1',
  `updated_ip` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rent_setup_details`
--

CREATE TABLE `rent_setup_details` (
  `id` bigint UNSIGNED NOT NULL,
  `rent_setup_id` int NOT NULL,
  `entity_id` int NOT NULL,
  `rent` decimal(8,2) NOT NULL,
  `parking` decimal(12,2) NOT NULL DEFAULT '0.00',
  `parking_area` int DEFAULT NULL,
  `service_charge` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('active','deactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_by` int NOT NULL DEFAULT '1',
  `updated_by` int NOT NULL DEFAULT '1',
  `created_ip` int NOT NULL DEFAULT '1',
  `updated_ip` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `site_settings`
--

CREATE TABLE `site_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `state` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `police_station` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `holding_no` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `road` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `area` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `post_code` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `map` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `authorized_parson_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `authorized_designation` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `authorized_signature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `schedule_invoice_on` int NOT NULL DEFAULT '0',
  `schedule_invoice_day` tinyint NOT NULL DEFAULT '0',
  `sms_on` tinyint(1) NOT NULL DEFAULT '0',
  `invoice_sms_on` tinyint(1) NOT NULL DEFAULT '0',
  `remainder_sms_on` tinyint(1) NOT NULL DEFAULT '0',
  `reminder_sms_day` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `site_settings`
--

INSERT INTO `site_settings` (`id`, `title`, `contact_email`, `mobile`, `logo`, `state`, `police_station`, `holding_no`, `road`, `area`, `post_code`, `address`, `map`, `authorized_parson_name`, `authorized_designation`, `authorized_signature`, `currency`, `schedule_invoice_on`, `schedule_invoice_day`, `sms_on`, `invoice_sms_on`, `remainder_sms_on`, `reminder_sms_day`, `created_at`, `updated_at`) VALUES
(1, 'Talukdar Vaban', 'apt@gmail.com', '+880 1789 000000', '{\"original\":\"upload\\/logo\\/original\\/2f45a4c4-6437-4db5-9e86-ca1a130d1a10.webp\",\"600x200\":\"upload\\/logo\\/600x200\\/62eb3512-825e-443d-ab5d-87e93f6c742a.webp\",\"300x100\":\"upload\\/logo\\/300x100\\/bfa0dac4-543c-4f75-a10f-9b59d7ae4fa3.webp\",\"150x50\":\"upload\\/logo\\/150x50\\/75b67d35-bdc8-469c-bda0-13038183d1b4.webp\"}', 'Dhaka', NULL, NULL, NULL, NULL, NULL, 'House #00, Road #0, Dhanmondi, Dhaka-1207', NULL, 'Md Gias Uddin Talukdar', 'Secratery', '{\"original\":\"upload\\/authorized_signature\\/original\\/a50309d8-35c8-4577-b2f3-9b399fea9df9.webp\",\"300x80\":\"upload\\/authorized_signature\\/300x80\\/638c51ba-efaa-4386-b312-b85ff7571638.webp\"}', 'BDT', 1, 1, 0, 0, 0, 15, '2025-04-30 18:32:27', '2025-11-23 19:32:32');

-- --------------------------------------------------------

--
-- Table structure for table `tenants`
--

CREATE TABLE `tenants` (
  `id` bigint UNSIGNED NOT NULL,
  `tenant_type` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `regno` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reg_date` date DEFAULT NULL,
  `floor_id` bigint NOT NULL,
  `entity_id` bigint NOT NULL,
  `name` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `spouse_name` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `father_name` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mother_name` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt_mobile` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nid` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `passport_no` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `blood_group` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `religion` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `education_qualification` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mail_address` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `permanent_address` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner_name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ec_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ec_relation` int DEFAULT NULL,
  `ec_address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `ec_mobile` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organization` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `org_location` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `org_mobile` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `police_verification` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remarks` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nid_file` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `other_attachment` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `leave_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('active','deactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_by` int NOT NULL DEFAULT '1',
  `updated_by` int NOT NULL DEFAULT '1',
  `created_ip` int NOT NULL DEFAULT '1',
  `updated_ip` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_login_histories`
--

CREATE TABLE `user_login_histories` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `user_guard` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `login_at` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `login_ip` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `login_browser_client` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sorting` int NOT NULL DEFAULT '0',
  `status` enum('active','deactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_login_histories`
--

INSERT INTO `user_login_histories` (`id`, `user_id`, `user_guard`, `login_at`, `login_ip`, `login_browser_client`, `sorting`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'admin', '2025-05-01 06:39:10', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-01 00:39:10', '2025-05-01 00:39:10'),
(2, 1, 'admin', '2025-05-01 13:25:35', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-01 07:25:35', '2025-05-01 07:25:35'),
(3, 1, 'admin', '2025-05-01 13:57:56', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-01 07:57:56', '2025-05-01 07:57:56'),
(4, 1, 'admin', '2025-05-01 23:27:54', '::1', 'Google Chrome', 0, 'active', '2025-05-01 17:27:54', '2025-05-01 17:27:54'),
(5, 1, 'admin', '2025-05-02 05:43:52', '::1', 'Google Chrome', 0, 'active', '2025-05-01 23:43:52', '2025-05-01 23:43:52'),
(6, 1, 'admin', '2025-05-02 06:45:26', '::1', 'Google Chrome', 0, 'active', '2025-05-02 00:45:26', '2025-05-02 00:45:26'),
(7, 1, 'admin', '2025-05-02 13:24:35', '::1', 'Google Chrome', 0, 'active', '2025-05-02 07:24:35', '2025-05-02 07:24:35'),
(8, 1, 'admin', '2025-05-02 13:31:55', '::1', 'Google Chrome', 0, 'active', '2025-05-02 07:31:55', '2025-05-02 07:31:55'),
(9, 1, 'admin', '2025-05-03 02:14:37', '::1', 'Google Chrome', 0, 'active', '2025-05-02 20:14:37', '2025-05-02 20:14:37'),
(10, 1, 'admin', '2025-05-03 02:20:31', '::1', 'Google Chrome', 0, 'active', '2025-05-02 20:20:31', '2025-05-02 20:20:31'),
(11, 1, 'admin', '2025-05-03 05:40:10', '::1', 'Google Chrome', 0, 'active', '2025-05-02 23:40:10', '2025-05-02 23:40:10'),
(12, 1, 'admin', '2025-05-07 02:13:29', '::1', 'Google Chrome', 0, 'active', '2025-05-06 20:13:29', '2025-05-06 20:13:29'),
(13, 1, 'admin', '2025-05-09 03:19:43', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-08 21:19:43', '2025-05-08 21:19:43'),
(14, 1, 'admin', '2025-05-09 09:28:26', '::1', 'Google Chrome', 0, 'active', '2025-05-09 03:28:26', '2025-05-09 03:28:26'),
(15, 1, 'admin', '2025-05-09 13:42:30', '::1', 'Google Chrome', 0, 'active', '2025-05-09 07:42:30', '2025-05-09 07:42:30'),
(16, 1, 'admin', '2025-05-10 00:04:24', '::1', 'Google Chrome', 0, 'active', '2025-05-09 18:04:24', '2025-05-09 18:04:24'),
(17, 1, 'admin', '2025-05-10 04:12:12', '::1', 'Google Chrome', 0, 'active', '2025-05-09 22:12:12', '2025-05-09 22:12:12'),
(18, 1, 'admin', '2025-05-10 06:57:01', '::1', 'Google Chrome', 0, 'active', '2025-05-10 00:57:01', '2025-05-10 00:57:01'),
(19, 1, 'admin', '2025-05-10 06:59:29', '::1', 'Google Chrome', 0, 'active', '2025-05-10 00:59:29', '2025-05-10 00:59:29'),
(20, 1, 'admin', '2025-05-10 13:27:09', '::1', 'Google Chrome', 0, 'active', '2025-05-10 07:27:09', '2025-05-10 07:27:09'),
(21, 1, 'admin', '2025-05-11 01:44:26', '::1', 'Google Chrome', 0, 'active', '2025-05-10 19:44:26', '2025-05-10 19:44:26'),
(22, 1, 'admin', '2025-05-11 02:02:59', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-10 20:02:59', '2025-05-10 20:02:59'),
(23, 1, 'admin', '2025-05-12 01:28:55', '::1', 'Google Chrome', 0, 'active', '2025-05-11 19:28:55', '2025-05-11 19:28:55'),
(24, 1, 'admin', '2025-05-12 01:31:16', '::1', 'Google Chrome', 0, 'active', '2025-05-11 19:31:16', '2025-05-11 19:31:16'),
(25, 1, 'admin', '2025-05-13 02:12:04', '::1', 'Google Chrome', 0, 'active', '2025-05-12 20:12:04', '2025-05-12 20:12:04'),
(26, 1, 'admin', '2025-05-14 16:19:49', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-14 10:19:49', '2025-05-14 10:19:49'),
(27, 1, 'admin', '2025-05-15 03:45:50', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-14 21:45:50', '2025-05-14 21:45:50'),
(28, 1, 'admin', '2025-05-15 13:32:17', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-15 07:32:17', '2025-05-15 07:32:17'),
(29, 1, 'admin', '2025-05-15 16:28:17', '::1', 'Google Chrome', 0, 'active', '2025-05-15 10:28:17', '2025-05-15 10:28:17'),
(30, 1, 'admin', '2025-05-15 23:36:08', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-15 17:36:08', '2025-05-15 17:36:08'),
(31, 1, 'admin', '2025-05-16 05:15:28', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-15 23:15:28', '2025-05-15 23:15:28'),
(32, 1, 'admin', '2025-05-16 11:45:12', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-16 05:45:12', '2025-05-16 05:45:12'),
(33, 1, 'admin', '2025-05-17 02:05:28', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-16 20:05:28', '2025-05-16 20:05:28'),
(34, 1, 'admin', '2025-05-17 05:57:26', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-16 23:57:26', '2025-05-16 23:57:26'),
(35, 1, 'admin', '2025-05-18 02:27:19', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-17 20:27:19', '2025-05-17 20:27:19'),
(36, 1, 'admin', '2025-05-18 05:53:21', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-17 23:53:21', '2025-05-17 23:53:21'),
(37, 1, 'admin', '2025-05-18 08:30:43', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-18 02:30:43', '2025-05-18 02:30:43'),
(38, 1, 'admin', '2025-05-21 13:39:26', '::1', 'Google Chrome', 0, 'active', '2025-05-21 07:39:26', '2025-05-21 07:39:26'),
(39, 1, 'admin', '2025-05-21 14:27:08', '::1', 'Google Chrome', 0, 'active', '2025-05-21 08:27:08', '2025-05-21 08:27:08'),
(40, 1, 'admin', '2025-05-21 23:10:42', '::1', 'Google Chrome', 0, 'active', '2025-05-21 17:10:42', '2025-05-21 17:10:42'),
(41, 1, 'admin', '2025-05-21 23:35:23', '::1', 'Google Chrome', 0, 'active', '2025-05-21 17:35:23', '2025-05-21 17:35:23'),
(42, 1, 'admin', '2025-05-22 02:31:02', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-21 20:31:02', '2025-05-21 20:31:02'),
(43, 1, 'admin', '2025-05-22 23:22:19', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-05-22 17:22:19', '2025-05-22 17:22:19'),
(44, 1, 'admin', '2025-05-23 00:08:15', '::1', 'Google Chrome', 0, 'active', '2025-05-22 18:08:15', '2025-05-22 18:08:15'),
(45, 1, 'admin', '2025-05-23 13:42:44', '::1', 'Google Chrome', 0, 'active', '2025-05-23 07:42:44', '2025-05-23 07:42:44'),
(46, 1, 'admin', '2025-06-11 03:54:53', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-10 21:54:53', '2025-06-10 21:54:53'),
(47, 1, 'admin', '2025-06-11 04:30:36', '::1', 'Google Chrome', 0, 'active', '2025-06-10 22:30:36', '2025-06-10 22:30:36'),
(48, 1, 'admin', '2025-06-12 03:26:44', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-11 21:26:44', '2025-06-11 21:26:44'),
(49, 1, 'admin', '2025-06-19 02:33:32', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-18 20:33:32', '2025-06-18 20:33:32'),
(50, 1, 'admin', '2025-06-19 16:51:30', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-19 10:51:30', '2025-06-19 10:51:30'),
(51, 1, 'admin', '2025-06-20 08:19:22', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-20 02:19:22', '2025-06-20 02:19:22'),
(52, 1, 'admin', '2025-06-20 09:14:44', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-20 03:14:44', '2025-06-20 03:14:44'),
(53, 1, 'admin', '2025-06-20 13:33:28', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-20 07:33:28', '2025-06-20 07:33:28'),
(54, 1, 'admin', '2025-06-20 13:42:45', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-20 07:42:45', '2025-06-20 07:42:45'),
(55, 1, 'admin', '2025-06-21 17:24:02', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-21 11:24:02', '2025-06-21 11:24:02'),
(56, 1, 'admin', '2025-06-22 00:33:59', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-21 18:33:59', '2025-06-21 18:33:59'),
(57, 1, 'admin', '2025-06-22 02:53:16', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-21 20:53:16', '2025-06-21 20:53:16'),
(58, 1, 'admin', '2025-06-22 05:12:27', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-21 23:12:27', '2025-06-21 23:12:27'),
(59, 1, 'admin', '2025-06-22 08:26:24', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-22 02:26:24', '2025-06-22 02:26:24'),
(60, 1, 'admin', '2025-06-23 02:25:14', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-22 20:25:14', '2025-06-22 20:25:14'),
(61, 1, 'admin', '2025-06-24 01:41:18', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-06-23 19:41:19', '2025-06-23 19:41:19'),
(62, 1, 'admin', '2025-07-02 06:01:35', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-07-02 00:01:35', '2025-07-02 00:01:35'),
(63, 1, 'admin', '2025-07-02 06:18:00', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-07-02 00:18:00', '2025-07-02 00:18:00'),
(64, 1, 'admin', '2025-07-05 02:15:22', '::1', 'Google Chrome', 0, 'active', '2025-07-04 20:15:22', '2025-07-04 20:15:22'),
(65, 1, 'admin', '2025-07-05 04:10:22', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-07-04 22:10:22', '2025-07-04 22:10:22'),
(66, 1, 'admin', '2025-07-06 03:41:29', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-07-05 21:41:29', '2025-07-05 21:41:29'),
(67, 1, 'admin', '2025-07-06 13:46:25', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-07-06 07:46:25', '2025-07-06 07:46:25'),
(68, 1, 'admin', '2025-07-11 03:04:20', '::1', 'Google Chrome', 0, 'active', '2025-07-10 21:04:20', '2025-07-10 21:04:20'),
(69, 1, 'admin', '2025-07-13 14:13:18', '127.0.0.1', 'Mozilla Firefox', 0, 'active', '2025-07-13 08:13:18', '2025-07-13 08:13:18'),
(70, 1, 'admin', '2025-07-14 13:39:43', '::1', 'Google Chrome', 0, 'active', '2025-07-14 07:39:43', '2025-07-14 07:39:43'),
(71, 1, 'admin', '2025-07-14 23:27:10', '::1', 'Google Chrome', 0, 'active', '2025-07-14 17:27:10', '2025-07-14 17:27:10'),
(72, 1, 'admin', '2025-07-15 02:20:52', '::1', 'Google Chrome', 0, 'active', '2025-07-14 20:20:52', '2025-07-14 20:20:52'),
(73, 1, 'admin', '2025-07-16 02:12:21', '::1', 'Google Chrome', 0, 'active', '2025-07-15 20:12:21', '2025-07-15 20:12:21'),
(74, 3, 'admin', '2025-08-02 15:27:30', '::1', 'Google Chrome', 0, 'active', '2025-08-02 09:27:30', '2025-08-02 09:27:30'),
(75, 3, 'admin', '2025-08-02 15:34:11', '::1', 'Google Chrome', 0, 'active', '2025-08-02 09:34:11', '2025-08-02 09:34:11'),
(76, 3, 'admin', '2025-08-02 15:49:28', '::1', 'Google Chrome', 0, 'active', '2025-08-02 09:49:28', '2025-08-02 09:49:28'),
(77, 2, 'admin', '2025-11-23 06:41:28', '::1', 'Google Chrome', 0, 'active', '2025-11-23 00:41:28', '2025-11-23 00:41:28'),
(78, 2, 'admin', '2025-11-23 07:42:03', '::1', 'Google Chrome', 0, 'active', '2025-11-23 01:42:03', '2025-11-23 01:42:03'),
(79, 2, 'admin', '2025-11-23 10:45:15', '::1', 'Google Chrome', 0, 'active', '2025-11-23 04:45:15', '2025-11-23 04:45:15'),
(80, 22, 'admin', '2025-11-23 11:12:01', '::1', 'Google Chrome', 0, 'active', '2025-11-23 05:12:02', '2025-11-23 05:12:02'),
(81, 22, 'admin', '2025-11-23 12:08:43', '::1', 'Google Chrome', 0, 'active', '2025-11-23 06:08:43', '2025-11-23 06:08:43'),
(82, 23, 'admin', '2025-11-23 12:12:37', '::1', 'Google Chrome', 0, 'active', '2025-11-23 06:12:37', '2025-11-23 06:12:37'),
(83, 22, 'admin', '2025-11-23 12:47:48', '::1', 'Google Chrome', 0, 'active', '2025-11-23 06:47:48', '2025-11-23 06:47:48'),
(84, 23, 'admin', '2025-11-23 12:48:20', '::1', 'Google Chrome', 0, 'active', '2025-11-23 06:48:21', '2025-11-23 06:48:21'),
(85, 22, 'admin', '2025-11-23 12:52:17', '::1', 'Google Chrome', 0, 'active', '2025-11-23 06:52:17', '2025-11-23 06:52:17'),
(86, 22, 'admin', '2025-11-23 12:56:46', '::1', 'Google Chrome', 0, 'active', '2025-11-23 06:56:46', '2025-11-23 06:56:46'),
(87, 22, 'admin', '2025-11-23 15:30:49', '::1', 'Google Chrome', 0, 'active', '2025-11-23 09:30:49', '2025-11-23 09:30:49'),
(88, 22, 'admin', '2025-11-24 01:28:35', '::1', 'Google Chrome', 0, 'active', '2025-11-23 19:28:35', '2025-11-23 19:28:35');

-- --------------------------------------------------------

--
-- Table structure for table `utility_bills`
--

CREATE TABLE `utility_bills` (
  `id` bigint UNSIGNED NOT NULL,
  `floor_id` int NOT NULL,
  `entity_id` int NOT NULL,
  `type` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `billno` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bill_date` date DEFAULT NULL,
  `meter_no` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_reading` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `end_reading` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unit` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` decimal(8,2) NOT NULL,
  `last_payment_date` date DEFAULT NULL,
  `add_to_invoice` tinyint NOT NULL,
  `is_added` tinyint NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('active','deactive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_by` int NOT NULL DEFAULT '1',
  `updated_by` int NOT NULL DEFAULT '1',
  `created_ip` int NOT NULL DEFAULT '1',
  `updated_ip` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `account_details`
--
ALTER TABLE `account_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `apt_funds`
--
ALTER TABLE `apt_funds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `entities`
--
ALTER TABLE `entities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `floors`
--
ALTER TABLE `floors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `maintenances`
--
ALTER TABLE `maintenances`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profiles_role_id_index` (`role_id`);

--
-- Indexes for table `rent_setups`
--
ALTER TABLE `rent_setups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rent_setup_details`
--
ALTER TABLE `rent_setup_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_settings`
--
ALTER TABLE `site_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tenants`
--
ALTER TABLE `tenants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_login_histories`
--
ALTER TABLE `user_login_histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `utility_bills`
--
ALTER TABLE `utility_bills`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `account_details`
--
ALTER TABLE `account_details`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `apt_funds`
--
ALTER TABLE `apt_funds`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `entities`
--
ALTER TABLE `entities`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `floors`
--
ALTER TABLE `floors`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `maintenances`
--
ALTER TABLE `maintenances`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `password_resets`
--
ALTER TABLE `password_resets`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rent_setups`
--
ALTER TABLE `rent_setups`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rent_setup_details`
--
ALTER TABLE `rent_setup_details`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `site_settings`
--
ALTER TABLE `site_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tenants`
--
ALTER TABLE `tenants`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_login_histories`
--
ALTER TABLE `user_login_histories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT for table `utility_bills`
--
ALTER TABLE `utility_bills`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
