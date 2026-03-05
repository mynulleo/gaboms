-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 14, 2025 at 06:10 AM
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
-- Database: `aptms_demo`
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
  `resident_id` int DEFAULT NULL,
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

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `iso`, `name`, `iso3`, `numcode`, `phonecode`, `sorting`, `status`, `created_at`, `updated_at`) VALUES
(1, 'AF', 'Afghanistan', 'AFG', 4, 93, 0, 'active', NULL, NULL),
(2, 'AL', 'Albania', 'ALB', 8, 355, 0, 'active', NULL, NULL),
(3, 'DZ', 'Algeria', 'DZA', 12, 213, 0, 'active', NULL, NULL),
(4, 'AS', 'American Samoa', 'ASM', 16, 1684, 0, 'active', NULL, NULL),
(5, 'AD', 'Andorra', 'AND', 20, 376, 0, 'active', NULL, NULL),
(6, 'AO', 'Angola', 'AGO', 24, 244, 0, 'active', NULL, NULL),
(7, 'AI', 'Anguilla', 'AIA', 660, 1264, 0, 'active', NULL, NULL),
(8, 'AQ', 'Antarctica', NULL, NULL, 0, 0, 'active', NULL, NULL),
(9, 'AG', 'Antigua and Barbuda', 'ATG', 28, 1268, 0, 'active', NULL, NULL),
(10, 'AR', 'Argentina', 'ARG', 32, 54, 0, 'active', NULL, NULL),
(11, 'AM', 'Armenia', 'ARM', 51, 374, 0, 'active', NULL, NULL),
(12, 'AW', 'Aruba', 'ABW', 533, 297, 0, 'active', NULL, NULL),
(13, 'AU', 'Australia', 'AUS', 36, 61, 0, 'active', NULL, NULL),
(14, 'AT', 'Austria', 'AUT', 40, 43, 0, 'active', NULL, NULL),
(15, 'AZ', 'Azerbaijan', 'AZE', 31, 994, 0, 'active', NULL, NULL),
(16, 'BS', 'Bahamas', 'BHS', 44, 1242, 0, 'active', NULL, NULL),
(17, 'BH', 'Bahrain', 'BHR', 48, 973, 0, 'active', NULL, NULL),
(18, 'BD', 'Bangladesh', 'BGD', 50, 880, 0, 'active', NULL, NULL),
(19, 'BB', 'Barbados', 'BRB', 52, 1246, 0, 'active', NULL, NULL),
(20, 'BY', 'Belarus', 'BLR', 112, 375, 0, 'active', NULL, NULL),
(21, 'BE', 'Belgium', 'BEL', 56, 32, 0, 'active', NULL, NULL),
(22, 'BZ', 'Belize', 'BLZ', 84, 501, 0, 'active', NULL, NULL),
(23, 'BJ', 'Benin', 'BEN', 204, 229, 0, 'active', NULL, NULL),
(24, 'BM', 'Bermuda', 'BMU', 60, 1441, 0, 'active', NULL, NULL),
(25, 'BT', 'Bhutan', 'BTN', 64, 975, 0, 'active', NULL, NULL),
(26, 'BO', 'Bolivia', 'BOL', 68, 591, 0, 'active', NULL, NULL),
(27, 'BA', 'Bosnia and Herzegovina', 'BIH', 70, 387, 0, 'active', NULL, NULL),
(28, 'BW', 'Botswana', 'BWA', 72, 267, 0, 'active', NULL, NULL),
(29, 'BV', 'Bouvet Island', NULL, NULL, 0, 0, 'active', NULL, NULL),
(30, 'BR', 'Brazil', 'BRA', 76, 55, 0, 'active', NULL, NULL),
(31, 'IO', 'British Indian Ocean Territory', NULL, NULL, 246, 0, 'active', NULL, NULL),
(32, 'BN', 'Brunei Darussalam', 'BRN', 96, 673, 0, 'active', NULL, NULL),
(33, 'BG', 'Bulgaria', 'BGR', 100, 359, 0, 'active', NULL, NULL),
(34, 'BF', 'Burkina Faso', 'BFA', 854, 226, 0, 'active', NULL, NULL),
(35, 'BI', 'Burundi', 'BDI', 108, 257, 0, 'active', NULL, NULL),
(36, 'KH', 'Cambodia', 'KHM', 116, 855, 0, 'active', NULL, NULL),
(37, 'CM', 'Cameroon', 'CMR', 120, 237, 0, 'active', NULL, NULL),
(38, 'CA', 'Canada', 'CAN', 124, 1, 0, 'active', NULL, NULL),
(39, 'CV', 'Cape Verde', 'CPV', 132, 238, 0, 'active', NULL, NULL),
(40, 'KY', 'Cayman Islands', 'CYM', 136, 1345, 0, 'active', NULL, NULL),
(41, 'CF', 'Central African Republic', 'CAF', 140, 236, 0, 'active', NULL, NULL),
(42, 'TD', 'Chad', 'TCD', 148, 235, 0, 'active', NULL, NULL),
(43, 'CL', 'Chile', 'CHL', 152, 56, 0, 'active', NULL, NULL),
(44, 'CN', 'China', 'CHN', 156, 86, 0, 'active', NULL, NULL),
(45, 'CX', 'Christmas Island', NULL, NULL, 61, 0, 'active', NULL, NULL),
(46, 'CC', 'Cocos (Keeling) Islands', NULL, NULL, 672, 0, 'active', NULL, NULL),
(47, 'CO', 'Colombia', 'COL', 170, 57, 0, 'active', NULL, NULL),
(48, 'KM', 'Comoros', 'COM', 174, 269, 0, 'active', NULL, NULL),
(49, 'CG', 'Congo', 'COG', 178, 242, 0, 'active', NULL, NULL),
(50, 'CD', 'Congo, the Democratic Republic of the', 'COD', 180, 242, 0, 'active', NULL, NULL),
(51, 'CK', 'Cook Islands', 'COK', 184, 682, 0, 'active', NULL, NULL),
(52, 'CR', 'Costa Rica', 'CRI', 188, 506, 0, 'active', NULL, NULL),
(53, 'CI', 'Cote D\'Ivoire', 'CIV', 384, 225, 0, 'active', NULL, NULL),
(54, 'HR', 'Croatia', 'HRV', 191, 385, 0, 'active', NULL, NULL),
(55, 'CU', 'Cuba', 'CUB', 192, 53, 0, 'active', NULL, NULL),
(56, 'CY', 'Cyprus', 'CYP', 196, 357, 0, 'active', NULL, NULL),
(57, 'CZ', 'Czech Republic', 'CZE', 203, 420, 0, 'active', NULL, NULL),
(58, 'DK', 'Denmark', 'DNK', 208, 45, 0, 'active', NULL, NULL),
(59, 'DJ', 'Djibouti', 'DJI', 262, 253, 0, 'active', NULL, NULL),
(60, 'DM', 'Dominica', 'DMA', 212, 1767, 0, 'active', NULL, NULL),
(61, 'DO', 'Dominican Republic', 'DOM', 214, 1809, 0, 'active', NULL, NULL),
(62, 'EC', 'Ecuador', 'ECU', 218, 593, 0, 'active', NULL, NULL),
(63, 'EG', 'Egypt', 'EGY', 818, 20, 0, 'active', NULL, NULL),
(64, 'SV', 'El Salvador', 'SLV', 222, 503, 0, 'active', NULL, NULL),
(65, 'GQ', 'Equatorial Guinea', 'GNQ', 226, 240, 0, 'active', NULL, NULL),
(66, 'ER', 'Eritrea', 'ERI', 232, 291, 0, 'active', NULL, NULL),
(67, 'EE', 'Estonia', 'EST', 233, 372, 0, 'active', NULL, NULL),
(68, 'ET', 'Ethiopia', 'ETH', 231, 251, 0, 'active', NULL, NULL),
(69, 'FK', 'Falkland Islands (Malvinas)', 'FLK', 238, 500, 0, 'active', NULL, NULL),
(70, 'FO', 'Faroe Islands', 'FRO', 234, 298, 0, 'active', NULL, NULL),
(71, 'FJ', 'Fiji', 'FJI', 242, 679, 0, 'active', NULL, NULL),
(72, 'FI', 'Finland', 'FIN', 246, 358, 0, 'active', NULL, NULL),
(73, 'FR', 'France', 'FRA', 250, 33, 0, 'active', NULL, NULL),
(74, 'GF', 'French Guiana', 'GUF', 254, 594, 0, 'active', NULL, NULL),
(75, 'PF', 'French Polynesia', 'PYF', 258, 689, 0, 'active', NULL, NULL),
(76, 'TF', 'French Southern Territories', NULL, NULL, 0, 0, 'active', NULL, NULL),
(77, 'GA', 'Gabon', 'GAB', 266, 241, 0, 'active', NULL, NULL),
(78, 'GM', 'Gambia', 'GMB', 270, 220, 0, 'active', NULL, NULL),
(79, 'GE', 'Georgia', 'GEO', 268, 995, 0, 'active', NULL, NULL),
(80, 'DE', 'Germany', 'DEU', 276, 49, 0, 'active', NULL, NULL),
(81, 'GH', 'Ghana', 'GHA', 288, 233, 0, 'active', NULL, NULL),
(82, 'GI', 'Gibraltar', 'GIB', 292, 350, 0, 'active', NULL, NULL),
(83, 'GR', 'Greece', 'GRC', 300, 30, 0, 'active', NULL, NULL),
(84, 'GL', 'Greenland', 'GRL', 304, 299, 0, 'active', NULL, NULL),
(85, 'GD', 'Grenada', 'GRD', 308, 1473, 0, 'active', NULL, NULL),
(86, 'GP', 'Guadeloupe', 'GLP', 312, 590, 0, 'active', NULL, NULL),
(87, 'GU', 'Guam', 'GUM', 316, 1671, 0, 'active', NULL, NULL),
(88, 'GT', 'Guatemala', 'GTM', 320, 502, 0, 'active', NULL, NULL),
(89, 'GN', 'Guinea', 'GIN', 324, 224, 0, 'active', NULL, NULL),
(90, 'GW', 'Guinea-Bissau', 'GNB', 624, 245, 0, 'active', NULL, NULL),
(91, 'GY', 'Guyana', 'GUY', 328, 592, 0, 'active', NULL, NULL),
(92, 'HT', 'Haiti', 'HTI', 332, 509, 0, 'active', NULL, NULL),
(93, 'HM', 'Heard Island and Mcdonald Islands', NULL, NULL, 0, 0, 'active', NULL, NULL),
(94, 'VA', 'Holy See (Vatican City State)', 'VAT', 336, 39, 0, 'active', NULL, NULL),
(95, 'HN', 'Honduras', 'HND', 340, 504, 0, 'active', NULL, NULL),
(96, 'HK', 'Hong Kong', 'HKG', 344, 852, 0, 'active', NULL, NULL),
(97, 'HU', 'Hungary', 'HUN', 348, 36, 0, 'active', NULL, NULL),
(98, 'IS', 'Iceland', 'ISL', 352, 354, 0, 'active', NULL, NULL),
(99, 'IN', 'India', 'IND', 356, 91, 0, 'active', NULL, NULL),
(100, 'ID', 'Indonesia', 'IDN', 360, 62, 0, 'active', NULL, NULL),
(101, 'IR', 'Iran, Islamic Republic of', 'IRN', 364, 98, 0, 'active', NULL, NULL),
(102, 'IQ', 'Iraq', 'IRQ', 368, 964, 0, 'active', NULL, NULL),
(103, 'IE', 'Ireland', 'IRL', 372, 353, 0, 'active', NULL, NULL),
(104, 'IL', 'Israel', 'ISR', 376, 972, 0, 'active', NULL, NULL),
(105, 'IT', 'Italy', 'ITA', 380, 39, 0, 'active', NULL, NULL),
(106, 'JM', 'Jamaica', 'JAM', 388, 1876, 0, 'active', NULL, NULL),
(107, 'JP', 'Japan', 'JPN', 392, 81, 0, 'active', NULL, NULL),
(108, 'JO', 'Jordan', 'JOR', 400, 962, 0, 'active', NULL, NULL),
(109, 'KZ', 'Kazakhstan', 'KAZ', 398, 7, 0, 'active', NULL, NULL),
(110, 'KE', 'Kenya', 'KEN', 404, 254, 0, 'active', NULL, NULL),
(111, 'KI', 'Kiribati', 'KIR', 296, 686, 0, 'active', NULL, NULL),
(112, 'KP', 'Korea, Democratic People\'s Republic of', 'PRK', 408, 850, 0, 'active', NULL, NULL),
(113, 'KR', 'Korea, Republic of', 'KOR', 410, 82, 0, 'active', NULL, NULL),
(114, 'KW', 'Kuwait', 'KWT', 414, 965, 0, 'active', NULL, NULL),
(115, 'KG', 'Kyrgyzstan', 'KGZ', 417, 996, 0, 'active', NULL, NULL),
(116, 'LA', 'Lao People\'s Democratic Republic', 'LAO', 418, 856, 0, 'active', NULL, NULL),
(117, 'LV', 'Latvia', 'LVA', 428, 371, 0, 'active', NULL, NULL),
(118, 'LB', 'Lebanon', 'LBN', 422, 961, 0, 'active', NULL, NULL),
(119, 'LS', 'Lesotho', 'LSO', 426, 266, 0, 'active', NULL, NULL),
(120, 'LR', 'Liberia', 'LBR', 430, 231, 0, 'active', NULL, NULL),
(121, 'LY', 'Libyan Arab Jamahiriya', 'LBY', 434, 218, 0, 'active', NULL, NULL),
(122, 'LI', 'Liechtenstein', 'LIE', 438, 423, 0, 'active', NULL, NULL),
(123, 'LT', 'Lithuania', 'LTU', 440, 370, 0, 'active', NULL, NULL),
(124, 'LU', 'Luxembourg', 'LUX', 442, 352, 0, 'active', NULL, NULL),
(125, 'MO', 'Macao', 'MAC', 446, 853, 0, 'active', NULL, NULL),
(126, 'MK', 'Macedonia, the Former Yugoslav Republic of', 'MKD', 807, 389, 0, 'active', NULL, NULL),
(127, 'MG', 'Madagascar', 'MDG', 450, 261, 0, 'active', NULL, NULL),
(128, 'MW', 'Malawi', 'MWI', 454, 265, 0, 'active', NULL, NULL),
(129, 'MY', 'Malaysia', 'MYS', 458, 60, 0, 'active', NULL, NULL),
(130, 'MV', 'Maldives', 'MDV', 462, 960, 0, 'active', NULL, NULL),
(131, 'ML', 'Mali', 'MLI', 466, 223, 0, 'active', NULL, NULL),
(132, 'MT', 'Malta', 'MLT', 470, 356, 0, 'active', NULL, NULL),
(133, 'MH', 'Marshall Islands', 'MHL', 584, 692, 0, 'active', NULL, NULL),
(134, 'MQ', 'Martinique', 'MTQ', 474, 596, 0, 'active', NULL, NULL),
(135, 'MR', 'Mauritania', 'MRT', 478, 222, 0, 'active', NULL, NULL),
(136, 'MU', 'Mauritius', 'MUS', 480, 230, 0, 'active', NULL, NULL),
(137, 'YT', 'Mayotte', NULL, NULL, 269, 0, 'active', NULL, NULL),
(138, 'MX', 'Mexico', 'MEX', 484, 52, 0, 'active', NULL, NULL),
(139, 'FM', 'Micronesia, Federated States of', 'FSM', 583, 691, 0, 'active', NULL, NULL),
(140, 'MD', 'Moldova, Republic of', 'MDA', 498, 373, 0, 'active', NULL, NULL),
(141, 'MC', 'Monaco', 'MCO', 492, 377, 0, 'active', NULL, NULL),
(142, 'MN', 'Mongolia', 'MNG', 496, 976, 0, 'active', NULL, NULL),
(143, 'MS', 'Montserrat', 'MSR', 500, 1664, 0, 'active', NULL, NULL),
(144, 'MA', 'Morocco', 'MAR', 504, 212, 0, 'active', NULL, NULL),
(145, 'MZ', 'Mozambique', 'MOZ', 508, 258, 0, 'active', NULL, NULL),
(146, 'MM', 'Myanmar', 'MMR', 104, 95, 0, 'active', NULL, NULL),
(147, 'NA', 'Namibia', 'NAM', 516, 264, 0, 'active', NULL, NULL),
(148, 'NR', 'Nauru', 'NRU', 520, 674, 0, 'active', NULL, NULL),
(149, 'NP', 'Nepal', 'NPL', 524, 977, 0, 'active', NULL, NULL),
(150, 'NL', 'Netherlands', 'NLD', 528, 31, 0, 'active', NULL, NULL),
(151, 'AN', 'Netherlands Antilles', 'ANT', 530, 599, 0, 'active', NULL, NULL),
(152, 'NC', 'New Caledonia', 'NCL', 540, 687, 0, 'active', NULL, NULL),
(153, 'NZ', 'New Zealand', 'NZL', 554, 64, 0, 'active', NULL, NULL),
(154, 'NI', 'Nicaragua', 'NIC', 558, 505, 0, 'active', NULL, NULL),
(155, 'NE', 'Niger', 'NER', 562, 227, 0, 'active', NULL, NULL),
(156, 'NG', 'Nigeria', 'NGA', 566, 234, 0, 'active', NULL, NULL),
(157, 'NU', 'Niue', 'NIU', 570, 683, 0, 'active', NULL, NULL),
(158, 'NF', 'Norfolk Island', 'NFK', 574, 672, 0, 'active', NULL, NULL),
(159, 'MP', 'Northern Mariana Islands', 'MNP', 580, 1670, 0, 'active', NULL, NULL),
(160, 'NO', 'Norway', 'NOR', 578, 47, 0, 'active', NULL, NULL),
(161, 'OM', 'Oman', 'OMN', 512, 968, 0, 'active', NULL, NULL),
(162, 'PK', 'Pakistan', 'PAK', 586, 92, 0, 'active', NULL, NULL),
(163, 'PW', 'Palau', 'PLW', 585, 680, 0, 'active', NULL, NULL),
(164, 'PS', 'Palestinian Territory, Occupied', NULL, NULL, 970, 0, 'active', NULL, NULL),
(165, 'PA', 'Panama', 'PAN', 591, 507, 0, 'active', NULL, NULL),
(166, 'PG', 'Papua New Guinea', 'PNG', 598, 675, 0, 'active', NULL, NULL),
(167, 'PY', 'Paraguay', 'PRY', 600, 595, 0, 'active', NULL, NULL),
(168, 'PE', 'Peru', 'PER', 604, 51, 0, 'active', NULL, NULL),
(169, 'PH', 'Philippines', 'PHL', 608, 63, 0, 'active', NULL, NULL),
(170, 'PN', 'Pitcairn', 'PCN', 612, 0, 0, 'active', NULL, NULL),
(171, 'PL', 'Poland', 'POL', 616, 48, 0, 'active', NULL, NULL),
(172, 'PT', 'Portugal', 'PRT', 620, 351, 0, 'active', NULL, NULL),
(173, 'PR', 'Puerto Rico', 'PRI', 630, 1787, 0, 'active', NULL, NULL),
(174, 'QA', 'Qatar', 'QAT', 634, 974, 0, 'active', NULL, NULL),
(175, 'RE', 'Reunion', 'REU', 638, 262, 0, 'active', NULL, NULL),
(176, 'RO', 'Romania', 'ROM', 642, 40, 0, 'active', NULL, NULL),
(177, 'RU', 'Russian Federation', 'RUS', 643, 70, 0, 'active', NULL, NULL),
(178, 'RW', 'Rwanda', 'RWA', 646, 250, 0, 'active', NULL, NULL),
(179, 'SH', 'Saint Helena', 'SHN', 654, 290, 0, 'active', NULL, NULL),
(180, 'KN', 'Saint Kitts and Nevis', 'KNA', 659, 1869, 0, 'active', NULL, NULL),
(181, 'LC', 'Saint Lucia', 'LCA', 662, 1758, 0, 'active', NULL, NULL),
(182, 'PM', 'Saint Pierre and Miquelon', 'SPM', 666, 508, 0, 'active', NULL, NULL),
(183, 'VC', 'Saint Vincent and the Grenadines', 'VCT', 670, 1784, 0, 'active', NULL, NULL),
(184, 'WS', 'Samoa', 'WSM', 882, 684, 0, 'active', NULL, NULL),
(185, 'SM', 'San Marino', 'SMR', 674, 378, 0, 'active', NULL, NULL),
(186, 'ST', 'Sao Tome and Principe', 'STP', 678, 239, 0, 'active', NULL, NULL),
(187, 'SA', 'Saudi Arabia', 'SAU', 682, 966, 0, 'active', NULL, NULL),
(188, 'SN', 'Senegal', 'SEN', 686, 221, 0, 'active', NULL, NULL),
(189, 'CS', 'Serbia and Montenegro', NULL, NULL, 381, 0, 'active', NULL, NULL),
(190, 'SC', 'Seychelles', 'SYC', 690, 248, 0, 'active', NULL, NULL),
(191, 'SL', 'Sierra Leone', 'SLE', 694, 232, 0, 'active', NULL, NULL),
(192, 'SG', 'Singapore', 'SGP', 702, 65, 0, 'active', NULL, NULL),
(193, 'SK', 'Slovakia', 'SVK', 703, 421, 0, 'active', NULL, NULL),
(194, 'SI', 'Slovenia', 'SVN', 705, 386, 0, 'active', NULL, NULL),
(195, 'SB', 'Solomon Islands', 'SLB', 90, 677, 0, 'active', NULL, NULL),
(196, 'SO', 'Somalia', 'SOM', 706, 252, 0, 'active', NULL, NULL),
(197, 'ZA', 'South Africa', 'ZAF', 710, 27, 0, 'active', NULL, NULL),
(198, 'GS', 'South Georgia and the South Sandwich Islands', NULL, NULL, 0, 0, 'active', NULL, NULL),
(199, 'ES', 'Spain', 'ESP', 724, 34, 0, 'active', NULL, NULL),
(200, 'LK', 'Sri Lanka', 'LKA', 144, 94, 0, 'active', NULL, NULL),
(201, 'SD', 'Sudan', 'SDN', 736, 249, 0, 'active', NULL, NULL),
(202, 'SR', 'Suriname', 'SUR', 740, 597, 0, 'active', NULL, NULL),
(203, 'SJ', 'Svalbard and Jan Mayen', 'SJM', 744, 47, 0, 'active', NULL, NULL),
(204, 'SZ', 'Swaziland', 'SWZ', 748, 268, 0, 'active', NULL, NULL),
(205, 'SE', 'Sweden', 'SWE', 752, 46, 0, 'active', NULL, NULL),
(206, 'CH', 'Switzerland', 'CHE', 756, 41, 0, 'active', NULL, NULL),
(207, 'SY', 'Syrian Arab Republic', 'SYR', 760, 963, 0, 'active', NULL, NULL),
(208, 'TW', 'Taiwan, Province of China', 'TWN', 158, 886, 0, 'active', NULL, NULL),
(209, 'TJ', 'Tajikistan', 'TJK', 762, 992, 0, 'active', NULL, NULL),
(210, 'TZ', 'Tanzania, United Republic of', 'TZA', 834, 255, 0, 'active', NULL, NULL),
(211, 'TH', 'Thailand', 'THA', 764, 66, 0, 'active', NULL, NULL),
(212, 'TL', 'Timor-Leste', NULL, NULL, 670, 0, 'active', NULL, NULL),
(213, 'TG', 'Togo', 'TGO', 768, 228, 0, 'active', NULL, NULL),
(214, 'TK', 'Tokelau', 'TKL', 772, 690, 0, 'active', NULL, NULL),
(215, 'TO', 'Tonga', 'TON', 776, 676, 0, 'active', NULL, NULL),
(216, 'TT', 'Trinidad and Tobago', 'TTO', 780, 1868, 0, 'active', NULL, NULL),
(217, 'TN', 'Tunisia', 'TUN', 788, 216, 0, 'active', NULL, NULL),
(218, 'TR', 'Turkey', 'TUR', 792, 90, 0, 'active', NULL, NULL),
(219, 'TM', 'Turkmenistan', 'TKM', 795, 7370, 0, 'active', NULL, NULL),
(220, 'TC', 'Turks and Caicos Islands', 'TCA', 796, 1649, 0, 'active', NULL, NULL),
(221, 'TV', 'Tuvalu', 'TUV', 798, 688, 0, 'active', NULL, NULL),
(222, 'UG', 'Uganda', 'UGA', 800, 256, 0, 'active', NULL, NULL),
(223, 'UA', 'Ukraine', 'UKR', 804, 380, 0, 'active', NULL, NULL),
(224, 'AE', 'United Arab Emirates', 'ARE', 784, 971, 0, 'active', NULL, NULL),
(225, 'GB', 'United Kingdom', 'GBR', 826, 44, 0, 'active', NULL, NULL),
(226, 'US', 'United States', 'USA', 840, 1, 0, 'active', NULL, NULL),
(227, 'UM', 'United States Minor Outlying Islands', NULL, NULL, 1, 0, 'active', NULL, NULL),
(228, 'UY', 'Uruguay', 'URY', 858, 598, 0, 'active', NULL, NULL),
(229, 'UZ', 'Uzbekistan', 'UZB', 860, 998, 0, 'active', NULL, NULL),
(230, 'VU', 'Vanuatu', 'VUT', 548, 678, 0, 'active', NULL, NULL),
(231, 'VE', 'Venezuela', 'VEN', 862, 58, 0, 'active', NULL, NULL),
(232, 'VN', 'Viet Nam', 'VNM', 704, 84, 0, 'active', NULL, NULL),
(233, 'VG', 'Virgin Islands, British', 'VGB', 92, 1284, 0, 'active', NULL, NULL),
(234, 'VI', 'Virgin Islands, U.S.', 'VIR', 850, 1340, 0, 'active', NULL, NULL),
(235, 'WF', 'Wallis and Futuna', 'WLF', 876, 681, 0, 'active', NULL, NULL),
(236, 'EH', 'Western Sahara', 'ESH', 732, 212, 0, 'active', NULL, NULL),
(237, 'YE', 'Yemen', 'YEM', 887, 967, 0, 'active', NULL, NULL),
(238, 'ZM', 'Zambia', 'ZMB', 894, 260, 0, 'active', NULL, NULL),
(239, 'ZW', 'Zimbabwe', 'ZWE', 716, 263, 0, 'active', NULL, NULL),
(240, 'RS', 'Serbia', 'SRB', 688, 381, 0, 'active', NULL, NULL),
(241, 'AP', 'Asia / Pacific Region', '0', 0, 0, 0, 'active', NULL, NULL),
(242, 'ME', 'Montenegro', 'MNE', 499, 382, 0, 'active', NULL, NULL),
(243, 'AX', 'Aland Islands', 'ALA', 248, 358, 0, 'active', NULL, NULL),
(244, 'BQ', 'Bonaire, Sint Eustatius and Saba', 'BES', 535, 599, 0, 'active', NULL, NULL),
(245, 'CW', 'Curacao', 'CUW', 531, 599, 0, 'active', NULL, NULL),
(246, 'GG', 'Guernsey', 'GGY', 831, 44, 0, 'active', NULL, NULL),
(247, 'IM', 'Isle of Man', 'IMN', 833, 44, 0, 'active', NULL, NULL),
(248, 'JE', 'Jersey', 'JEY', 832, 44, 0, 'active', NULL, NULL),
(249, 'XK', 'Kosovo', '---', 0, 381, 0, 'active', NULL, NULL),
(250, 'BL', 'Saint Barthelemy', 'BLM', 652, 590, 0, 'active', NULL, NULL),
(251, 'MF', 'Saint Martin', 'MAF', 663, 590, 0, 'active', NULL, NULL),
(252, 'SX', 'Sint Maarten', 'SXM', 534, 1, 0, 'active', NULL, NULL),
(253, 'SS', 'South Sudan', 'SSD', 728, 211, 0, 'active', NULL, NULL);

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
-- Table structure for table `flats`
--

CREATE TABLE `flats` (
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
  `flat_id` int NOT NULL,
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
  `flat_id` int NOT NULL,
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
-- Table structure for table `residents`
--

CREATE TABLE `residents` (
  `id` bigint UNSIGNED NOT NULL,
  `resident_type` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `regno` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reg_date` date DEFAULT NULL,
  `floor_id` bigint NOT NULL,
  `flat_id` bigint NOT NULL,
  `name` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `spouse_name` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `father_name` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mother_name` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt_mobile` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nid` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dob` date DEFAULT NULL,
  `blood_group` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mail_address` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `permanent_address` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_relation` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nominee_info` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profession` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organization` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `designation` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `department` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `org_location` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `org_mobile` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `children` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
-- Table structure for table `site_settings`
--

CREATE TABLE `site_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
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

INSERT INTO `site_settings` (`id`, `title`, `contact_email`, `mobile`, `logo`, `address`, `map`, `authorized_parson_name`, `authorized_designation`, `authorized_signature`, `currency`, `schedule_invoice_on`, `schedule_invoice_day`, `sms_on`, `invoice_sms_on`, `remainder_sms_on`, `reminder_sms_day`, `created_at`, `updated_at`) VALUES
(1, 'Residence Name', 'apt@gmail.com', '+880 1789 000000', '{\"original\":\"upload\\/logo\\/original\\/0f7c6e9d-dd23-4312-893c-d69f4be56b93.webp\",\"600x200\":\"upload\\/logo\\/600x200\\/8dbbcf9d-8da1-4af6-8e4b-02f4f99a2396.webp\",\"300x100\":\"upload\\/logo\\/300x100\\/eefc15ab-0e44-4324-9050-b7cd848426c3.webp\",\"150x50\":\"upload\\/logo\\/150x50\\/be65cea1-d639-46f0-a07d-1cf97e68cba3.webp\"}', 'Residence Address', NULL, 'Authorized Person Name ', 'Secratery', '{\"original\":\"upload\\/authorized_signature\\/original\\/136415ca-a347-4434-88dd-9573764bba04.webp\",\"300x80\":\"upload\\/authorized_signature\\/300x80\\/6cebcce6-64c4-44f7-9bd1-80295059feb3.webp\"}', 'BDT', 1, 1, 0, 0, 0, 15, '2025-04-30 18:32:27', '2025-10-07 07:36:16');

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

-- --------------------------------------------------------

--
-- Table structure for table `utility_bills`
--

CREATE TABLE `utility_bills` (
  `id` bigint UNSIGNED NOT NULL,
  `floor_id` int NOT NULL,
  `flat_id` int NOT NULL,
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
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `flats`
--
ALTER TABLE `flats`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `residents`
--
ALTER TABLE `residents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_settings`
--
ALTER TABLE `site_settings`
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
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=254;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `flats`
--
ALTER TABLE `flats`
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
-- AUTO_INCREMENT for table `residents`
--
ALTER TABLE `residents`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `site_settings`
--
ALTER TABLE `site_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_login_histories`
--
ALTER TABLE `user_login_histories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `utility_bills`
--
ALTER TABLE `utility_bills`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
