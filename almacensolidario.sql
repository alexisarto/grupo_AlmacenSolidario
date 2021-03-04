-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2021 at 06:03 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `almacensolidario`
--

-- --------------------------------------------------------

--
-- Table structure for table `carritos`
--

CREATE TABLE `carritos` (
  `id` int(10) NOT NULL,
  `usuario_id` int(10) NOT NULL,
  `total` float NOT NULL,
  `estado` varchar(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `institucion_id` int(10) DEFAULT NULL,
  `personas_alcanzadas` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carritos`
--

INSERT INTO `carritos` (`id`, `usuario_id`, `total`, `estado`, `created_at`, `updated_at`, `institucion_id`, `personas_alcanzadas`) VALUES
(4, 26, 3532.7, 'cerrado', '2021-02-15 04:11:22', '2021-02-27 14:24:45', 1, 10.093428431919643),
(6, 31, 9493.85, 'cerrado', '2021-02-19 16:08:57', '2021-02-27 14:24:45', 2, 27.125284598214286),
(7, 51, 2787, 'cerrado', '2021-02-22 13:10:24', '2021-02-27 14:24:45', 3, 7.962857142857143),
(8, 33, 10803.3, 'cerrado', '2021-02-22 13:12:10', '2021-02-27 14:24:45', 4, 30.866570870535714),
(9, 40, 6775.4, 'cerrado', '2021-02-22 13:18:40', '2021-02-27 14:24:45', 1, 19.358285435267856),
(10, 26, 0, 'abierto', '2021-02-22 13:21:45', '2021-02-27 14:24:45', NULL, 0),
(11, 31, 3956.65, 'cerrado', '2021-02-22 13:22:27', '2021-02-27 14:24:45', 2, 11.304714006696429),
(12, 32, 4868.6, 'cerrado', '2021-02-22 13:26:24', '2021-02-27 14:24:45', 3, 13.910285993303571),
(13, 32, 6496.25, 'cerrado', '2021-02-24 18:07:46', '2021-02-27 14:24:45', 2, 18.560714285714287),
(14, 31, 103.45, 'cerrado', '2021-02-25 17:33:29', '2021-02-27 14:24:45', 4, 0.29557141985212054),
(15, 31, 284.35, 'cerrado', '2021-02-26 20:57:00', '2021-02-27 14:24:45', 1, 0.8124285888671875),
(16, 32, 21793.5, 'cerrado', '2021-02-27 02:19:37', '2021-02-27 14:24:45', 4, 62.26714285714286),
(17, 33, 18976.4, 'cerrado', '2021-02-27 03:35:59', '2021-02-27 14:24:45', 3, 54.218286830357144),
(18, 57, 3481.1, 'cerrado', '2021-02-27 04:08:30', '2021-02-27 14:24:45', 4, 9.946000279017857),
(19, 58, 7221, 'cerrado', '2021-02-27 04:12:31', '2021-02-27 14:24:45', 1, 20.63142857142857),
(20, 32, 11452.7, 'cerrado', '2021-02-27 04:15:47', '2021-02-27 14:24:45', 1, 32.72200055803572),
(21, 32, 17867.1, 'cerrado', '2021-02-27 15:21:24', '2021-02-27 14:24:45', 2, 51.048856026785714),
(22, 32, 14352.7, 'cerrado', '2021-02-27 15:39:48', '2021-02-27 14:51:45', 3, 41.00771484375),
(23, 32, 8600.3, 'cerrado', '2021-02-27 17:53:44', '2021-02-27 17:56:58', 1, 24.572285714285712),
(24, 32, 11235.2, 'cerrado', '2021-02-27 18:06:51', '2021-02-27 18:09:45', 4, 32.10057142857143),
(25, 32, 686.4, 'cerrado', '2021-02-27 18:13:48', '2021-03-01 18:44:13', 1, 1.961142857142857),
(26, 32, 6778.9, 'cerrado', '2021-03-01 19:00:58', '2021-03-02 18:54:26', 3, 19.36828571428571);

-- --------------------------------------------------------

--
-- Table structure for table `carrito_producto`
--

CREATE TABLE `carrito_producto` (
  `id` int(10) NOT NULL,
  `carrito_id` int(10) NOT NULL,
  `producto_id` int(10) NOT NULL,
  `cantidad` int(10) NOT NULL,
  `precio` float NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carrito_producto`
--

INSERT INTO `carrito_producto` (`id`, `carrito_id`, `producto_id`, `cantidad`, `precio`, `created_at`, `updated_at`) VALUES
(65, 4, 14, 10, 58.3, '2021-02-19 19:28:50', '2021-02-22 13:07:22'),
(66, 4, 17, 1, 41.35, '2021-02-19 19:28:57', '2021-02-19 19:28:57'),
(67, 4, 18, 1, 453.6, '2021-02-19 19:29:02', '2021-02-19 19:29:02'),
(68, 4, 16, 7, 75, '2021-02-19 19:29:07', '2021-02-19 19:30:37'),
(69, 4, 19, 1, 78.75, '2021-02-19 19:29:12', '2021-02-19 19:29:12'),
(99, 4, 65, 10, 185.1, '2021-02-22 13:07:46', '2021-02-22 13:07:56'),
(100, 6, 4, 3, 131.05, '2021-02-22 13:08:42', '2021-02-22 13:08:45'),
(101, 6, 15, 10, 68.5, '2021-02-22 13:08:56', '2021-02-22 13:09:04'),
(102, 6, 17, 10, 41.35, '2021-02-22 13:09:11', '2021-02-22 13:09:19'),
(103, 6, 66, 24, 49.05, '2021-02-22 13:09:30', '2021-02-22 13:09:40'),
(104, 6, 75, 10, 682.5, '2021-02-22 13:09:51', '2021-02-22 13:09:59'),
(105, 7, 22, 10, 35.3, '2021-02-22 13:10:33', '2021-02-22 13:10:39'),
(106, 7, 14, 10, 58.3, '2021-02-22 13:10:50', '2021-02-22 13:10:58'),
(107, 7, 65, 10, 185.1, '2021-02-22 13:11:10', '2021-02-22 13:11:16'),
(108, 8, 78, 10, 682.5, '2021-02-22 13:15:51', '2021-02-22 13:15:57'),
(109, 8, 14, 10, 58.3, '2021-02-22 13:16:10', '2021-02-22 13:16:20'),
(110, 8, 39, 10, 50.15, '2021-02-22 13:16:36', '2021-02-22 13:16:45'),
(111, 8, 65, 10, 185.1, '2021-02-22 13:17:34', '2021-02-22 13:17:41'),
(112, 8, 6, 24, 43.45, '2021-02-22 13:17:54', '2021-02-22 13:18:02'),
(113, 9, 24, 10, 35.3, '2021-02-22 13:18:56', '2021-02-22 13:19:00'),
(114, 9, 14, 10, 58.3, '2021-02-22 13:19:06', '2021-02-22 13:19:13'),
(115, 9, 25, 10, 35.3, '2021-02-22 13:19:22', '2021-02-22 13:19:28'),
(116, 9, 66, 24, 49.05, '2021-02-22 13:19:37', '2021-02-22 13:19:43'),
(117, 9, 78, 6, 682.5, '2021-02-22 13:20:02', '2021-02-22 13:20:10'),
(118, 9, 38, 6, 35.7, '2021-02-22 13:20:34', '2021-02-22 13:20:45'),
(119, 11, 4, 3, 131.05, '2021-02-22 13:22:33', '2021-02-22 13:22:46'),
(120, 11, 14, 6, 58.3, '2021-02-22 13:22:51', '2021-02-22 13:22:58'),
(121, 11, 23, 4, 112.3, '2021-02-22 13:23:05', '2021-02-22 13:23:12'),
(122, 11, 17, 3, 41.35, '2021-02-22 13:23:17', '2021-02-22 13:23:22'),
(123, 11, 19, 3, 78.75, '2021-02-22 13:23:29', '2021-02-22 13:23:34'),
(124, 11, 20, 6, 87.15, '2021-02-22 13:23:40', '2021-02-22 13:23:47'),
(125, 11, 31, 6, 57.25, '2021-02-22 13:23:58', '2021-02-22 13:24:04'),
(126, 11, 37, 6, 62.05, '2021-02-22 13:24:13', '2021-02-22 13:24:20'),
(127, 11, 40, 6, 56.7, '2021-02-22 13:24:31', '2021-02-22 13:24:38'),
(128, 11, 45, 3, 100.7, '2021-02-22 13:24:47', '2021-02-22 13:24:55'),
(129, 11, 50, 3, 36.75, '2021-02-22 13:25:04', '2021-02-22 13:25:10'),
(130, 11, 49, 3, 96.7, '2021-02-22 13:25:18', '2021-02-22 13:25:25'),
(131, 11, 51, 3, 40.95, '2021-02-22 13:25:35', '2021-02-22 13:25:52'),
(132, 12, 30, 6, 54.1, '2021-02-22 13:26:38', '2021-02-22 13:26:44'),
(133, 12, 43, 10, 53.5, '2021-02-22 13:26:53', '2021-02-22 13:27:01'),
(134, 12, 46, 6, 100.7, '2021-02-22 13:27:13', '2021-02-22 13:27:18'),
(135, 12, 40, 3, 56.7, '2021-02-22 13:27:25', '2021-02-22 13:27:30'),
(136, 12, 14, 10, 58.3, '2021-02-22 13:27:35', '2021-02-22 13:27:40'),
(137, 12, 49, 3, 96.7, '2021-02-22 13:27:50', '2021-02-22 13:27:55'),
(138, 12, 66, 12, 49.05, '2021-02-22 13:28:04', '2021-02-22 13:28:11'),
(139, 12, 63, 10, 40.15, '2021-02-22 13:28:35', '2021-02-22 13:28:42'),
(140, 12, 74, 10, 137.15, '2021-02-22 13:29:05', '2021-02-22 13:29:12'),
(142, 13, 4, 1, 131.05, '2021-02-24 18:10:40', '2021-02-24 18:10:40'),
(143, 14, 82, 1, 103.45, '2021-02-25 17:34:02', '2021-02-25 17:34:02'),
(144, 15, 4, 1, 131.05, '2021-02-26 20:57:13', '2021-02-26 20:57:13'),
(145, 15, 6, 1, 43.45, '2021-02-26 20:57:16', '2021-02-26 20:57:16'),
(146, 15, 15, 1, 68.5, '2021-02-26 20:57:20', '2021-02-26 20:57:20'),
(147, 15, 17, 1, 41.35, '2021-02-26 20:57:26', '2021-02-26 20:57:26'),
(148, 13, 18, 1, 453.6, '2021-02-27 02:07:57', '2021-02-27 02:07:57'),
(149, 13, 26, 1, 112.3, '2021-02-27 02:08:03', '2021-02-27 02:08:03'),
(150, 13, 20, 1, 87.15, '2021-02-27 02:08:11', '2021-02-27 02:08:11'),
(151, 13, 35, 10, 87.5, '2021-02-27 02:08:22', '2021-02-27 02:08:30'),
(152, 13, 43, 5, 53.5, '2021-02-27 02:08:42', '2021-02-27 02:08:54'),
(153, 13, 39, 10, 50.15, '2021-02-27 02:09:03', '2021-02-27 02:09:13'),
(154, 13, 16, 6, 75, '2021-02-27 02:09:22', '2021-02-27 02:09:34'),
(155, 13, 65, 6, 185.1, '2021-02-27 02:09:54', '2021-02-27 02:10:02'),
(156, 13, 76, 3, 682.5, '2021-02-27 02:10:18', '2021-02-27 02:10:28'),
(157, 13, 45, 4, 100.7, '2021-02-27 02:10:39', '2021-02-27 02:10:57'),
(158, 13, 31, 1, 57.25, '2021-02-27 02:11:11', '2021-02-27 02:11:11'),
(159, 16, 4, 10, 131.05, '2021-02-27 02:19:46', '2021-02-27 02:19:56'),
(160, 16, 6, 10, 43.45, '2021-02-27 02:19:50', '2021-02-27 02:20:01'),
(161, 16, 14, 10, 58.3, '2021-02-27 02:20:06', '2021-02-27 02:20:12'),
(162, 16, 16, 10, 75, '2021-02-27 02:20:17', '2021-02-27 02:20:23'),
(163, 16, 17, 10, 41.35, '2021-02-27 02:20:28', '2021-02-27 02:20:33'),
(164, 16, 18, 10, 453.6, '2021-02-27 02:20:41', '2021-02-27 02:20:47'),
(165, 16, 19, 10, 78.75, '2021-02-27 02:20:53', '2021-02-27 02:21:00'),
(166, 16, 20, 10, 87.15, '2021-02-27 02:21:21', '2021-02-27 02:21:28'),
(167, 16, 22, 10, 35.3, '2021-02-27 02:21:36', '2021-02-27 02:21:42'),
(168, 16, 24, 10, 35.3, '2021-02-27 02:21:51', '2021-02-27 02:21:58'),
(169, 16, 27, 10, 23.9, '2021-02-27 02:22:08', '2021-02-27 02:22:16'),
(170, 16, 28, 10, 90.3, '2021-02-27 02:22:28', '2021-02-27 02:22:35'),
(171, 16, 31, 10, 57.25, '2021-02-27 02:22:45', '2021-02-27 02:22:52'),
(172, 16, 35, 10, 87.5, '2021-02-27 02:23:01', '2021-02-27 02:23:08'),
(173, 16, 38, 10, 35.7, '2021-02-27 02:23:20', '2021-02-27 02:23:26'),
(174, 16, 39, 10, 50.15, '2021-02-27 02:23:35', '2021-02-27 02:23:42'),
(175, 16, 44, 10, 64.5, '2021-02-27 02:23:53', '2021-02-27 02:24:00'),
(176, 16, 45, 10, 100.7, '2021-02-27 02:24:10', '2021-02-27 02:24:18'),
(177, 16, 47, 10, 100.75, '2021-02-27 02:24:29', '2021-02-27 02:24:38'),
(178, 16, 54, 10, 245.25, '2021-02-27 02:24:54', '2021-02-27 02:25:03'),
(179, 16, 58, 10, 99, '2021-02-27 02:25:15', '2021-02-27 02:25:24'),
(180, 16, 65, 10, 185.1, '2021-02-27 02:25:34', '2021-02-27 02:25:43'),
(181, 17, 76, 10, 682.5, '2021-02-27 03:36:20', '2021-02-27 03:36:26'),
(182, 17, 75, 10, 682.5, '2021-02-27 03:36:36', '2021-02-27 03:36:45'),
(183, 17, 73, 5, 176.8, '2021-02-27 03:36:56', '2021-02-27 03:37:03'),
(184, 17, 65, 24, 185.1, '2021-02-27 03:37:19', '2021-02-27 03:37:31'),
(185, 18, 4, 1, 131.05, '2021-02-27 04:08:41', '2021-02-27 04:08:41'),
(186, 18, 15, 1, 68.5, '2021-02-27 04:08:47', '2021-02-27 04:08:47'),
(187, 18, 16, 1, 75, '2021-02-27 04:08:52', '2021-02-27 04:08:52'),
(188, 18, 17, 1, 41.35, '2021-02-27 04:08:56', '2021-02-27 04:08:56'),
(189, 18, 18, 1, 453.6, '2021-02-27 04:09:02', '2021-02-27 04:09:02'),
(190, 18, 21, 1, 92.4, '2021-02-27 04:09:07', '2021-02-27 04:09:07'),
(191, 18, 35, 10, 87.5, '2021-02-27 04:09:16', '2021-02-27 04:09:23'),
(192, 18, 40, 10, 56.7, '2021-02-27 04:09:30', '2021-02-27 04:09:38'),
(193, 18, 66, 24, 49.05, '2021-02-27 04:09:49', '2021-02-27 04:10:00'),
(194, 19, 15, 10, 68.5, '2021-02-27 04:12:39', '2021-02-27 04:12:43'),
(195, 19, 16, 12, 75, '2021-02-27 04:12:49', '2021-02-27 04:12:56'),
(196, 19, 18, 6, 453.6, '2021-02-27 04:13:02', '2021-02-27 04:13:11'),
(197, 19, 24, 10, 35.3, '2021-02-27 04:13:18', '2021-02-27 04:13:26'),
(198, 19, 40, 6, 56.7, '2021-02-27 04:13:39', '2021-02-27 04:13:46'),
(199, 19, 65, 12, 185.1, '2021-02-27 04:13:55', '2021-02-27 04:14:01'),
(200, 20, 4, 10, 131.05, '2021-02-27 14:01:02', '2021-02-27 14:01:24'),
(201, 20, 14, 10, 58.3, '2021-02-27 14:01:30', '2021-02-27 14:01:37'),
(202, 20, 16, 20, 75, '2021-02-27 14:01:42', '2021-02-27 14:01:50'),
(203, 20, 17, 10, 41.35, '2021-02-27 14:01:57', '2021-02-27 14:02:04'),
(204, 20, 20, 10, 87.15, '2021-02-27 14:02:11', '2021-02-27 14:02:18'),
(205, 20, 24, 10, 35.3, '2021-02-27 14:02:23', '2021-02-27 14:02:31'),
(206, 20, 27, 10, 23.9, '2021-02-27 14:02:41', '2021-02-27 14:02:47'),
(207, 20, 45, 10, 100.7, '2021-02-27 14:02:58', '2021-02-27 14:03:03'),
(208, 20, 39, 10, 50.15, '2021-02-27 14:03:13', '2021-02-27 14:03:19'),
(209, 20, 54, 10, 245.25, '2021-02-27 14:03:29', '2021-02-27 14:03:35'),
(210, 20, 65, 12, 185.1, '2021-02-27 14:03:43', '2021-02-27 14:03:49'),
(211, 21, 4, 10, 131.05, '2021-02-27 15:22:26', '2021-02-27 15:22:31'),
(212, 21, 6, 12, 43.45, '2021-02-27 15:22:39', '2021-02-27 15:22:46'),
(213, 21, 14, 10, 58.3, '2021-02-27 15:22:52', '2021-02-27 15:22:58'),
(214, 21, 16, 24, 75, '2021-02-27 15:23:03', '2021-02-27 15:23:10'),
(215, 21, 17, 10, 41.35, '2021-02-27 15:23:15', '2021-02-27 15:23:20'),
(216, 21, 18, 10, 453.6, '2021-02-27 15:23:27', '2021-02-27 15:23:32'),
(217, 21, 20, 10, 87.15, '2021-02-27 15:23:38', '2021-02-27 15:23:44'),
(218, 21, 24, 10, 35.3, '2021-02-27 15:23:53', '2021-02-27 15:24:01'),
(219, 21, 22, 10, 35.3, '2021-02-27 15:24:07', '2021-02-27 15:24:13'),
(220, 21, 29, 10, 78.1, '2021-02-27 15:24:26', '2021-02-27 15:24:32'),
(221, 21, 27, 10, 23.9, '2021-02-27 15:24:40', '2021-02-27 15:24:45'),
(222, 21, 39, 10, 50.15, '2021-02-27 15:24:53', '2021-02-27 15:24:59'),
(223, 21, 45, 10, 100.7, '2021-02-27 15:25:09', '2021-02-27 15:25:16'),
(224, 21, 49, 10, 96.7, '2021-02-27 15:25:26', '2021-02-27 15:25:33'),
(225, 21, 54, 10, 245.25, '2021-02-27 15:25:44', '2021-02-27 15:25:50'),
(226, 21, 66, 24, 49.05, '2021-02-27 15:26:08', '2021-02-27 15:26:17'),
(227, 22, 4, 10, 131.05, '2021-02-27 17:30:49', '2021-02-27 17:31:08'),
(228, 22, 14, 10, 58.3, '2021-02-27 17:30:57', '2021-02-27 17:31:03'),
(229, 22, 6, 24, 43.45, '2021-02-27 17:31:14', '2021-02-27 17:31:20'),
(230, 22, 16, 36, 75, '2021-02-27 17:31:26', '2021-02-27 17:31:32'),
(231, 22, 24, 10, 35.3, '2021-02-27 17:31:39', '2021-02-27 17:31:46'),
(232, 22, 39, 10, 50.15, '2021-02-27 17:31:59', '2021-02-27 17:32:05'),
(233, 22, 54, 10, 245.25, '2021-02-27 17:32:18', '2021-02-27 17:32:24'),
(234, 22, 49, 10, 96.7, '2021-02-27 17:32:34', '2021-02-27 17:32:40'),
(235, 22, 65, 24, 185.1, '2021-02-27 17:32:52', '2021-02-27 17:33:01'),
(236, 23, 4, 10, 131.05, '2021-02-27 17:54:04', '2021-02-27 17:54:11'),
(237, 23, 6, 12, 43.45, '2021-02-27 17:54:22', '2021-02-27 17:54:29'),
(238, 23, 15, 10, 68.5, '2021-02-27 17:54:35', '2021-02-27 17:54:42'),
(239, 23, 16, 10, 75, '2021-02-27 17:54:52', '2021-02-27 17:54:59'),
(240, 23, 17, 12, 41.35, '2021-02-27 17:55:04', '2021-02-27 17:55:10'),
(241, 23, 22, 10, 35.3, '2021-02-27 17:55:19', '2021-02-27 17:55:27'),
(242, 23, 24, 10, 35.3, '2021-02-27 17:55:34', '2021-02-27 17:55:41'),
(243, 23, 39, 10, 50.15, '2021-02-27 17:55:49', '2021-02-27 17:55:55'),
(244, 23, 54, 10, 245.25, '2021-02-27 17:56:07', '2021-02-27 17:56:13'),
(245, 23, 66, 24, 49.05, '2021-02-27 17:56:25', '2021-02-27 17:56:35'),
(246, 24, 4, 10, 131.05, '2021-02-27 18:07:23', '2021-02-27 18:07:27'),
(247, 24, 14, 10, 58.3, '2021-02-27 18:07:34', '2021-02-27 18:07:40'),
(248, 24, 17, 20, 41.35, '2021-02-27 18:07:49', '2021-02-27 18:07:57'),
(249, 24, 20, 20, 87.15, '2021-02-27 18:08:05', '2021-02-27 18:08:11'),
(250, 24, 24, 10, 35.3, '2021-02-27 18:08:16', '2021-02-27 18:08:23'),
(251, 24, 39, 10, 50.15, '2021-02-27 18:08:38', '2021-02-27 18:08:44'),
(252, 24, 45, 12, 100.7, '2021-02-27 18:08:53', '2021-02-27 18:08:59'),
(253, 24, 54, 12, 245.25, '2021-02-27 18:09:06', '2021-02-27 18:09:12'),
(254, 24, 66, 36, 49.05, '2021-02-27 18:09:21', '2021-02-27 18:09:29'),
(255, 25, 4, 1, 131.05, '2021-03-01 18:43:29', '2021-03-01 18:43:29'),
(256, 25, 6, 1, 43.45, '2021-03-01 18:43:39', '2021-03-01 18:43:39'),
(257, 25, 14, 1, 58.3, '2021-03-01 18:43:50', '2021-03-01 18:43:50'),
(258, 25, 18, 1, 453.6, '2021-03-01 18:43:59', '2021-03-01 18:43:59'),
(260, 26, 15, 10, 68.5, '2021-03-01 19:01:56', '2021-03-02 18:52:10'),
(261, 26, 16, 12, 75, '2021-03-01 19:02:07', '2021-03-02 18:52:18'),
(262, 26, 18, 6, 453.6, '2021-03-01 19:02:15', '2021-03-02 18:52:25'),
(264, 26, 22, 12, 35.3, '2021-03-01 19:06:26', '2021-03-02 18:52:40'),
(267, 26, 20, 10, 87.15, '2021-03-02 18:53:27', '2021-03-02 18:53:36'),
(268, 26, 66, 24, 49.05, '2021-03-02 18:53:48', '2021-03-02 18:53:56');

-- --------------------------------------------------------

--
-- Table structure for table `categorias`
--

CREATE TABLE `categorias` (
  `id` int(10) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categorias`
--

INSERT INTO `categorias` (`id`, `categoria`, `created_at`, `updated_at`) VALUES
(1, 'Almacén', '2021-01-04 22:38:47', '2021-01-04 19:38:47'),
(2, 'Bebidas', '2021-01-04 22:38:47', '2021-01-04 19:38:47'),
(3, 'Bebés', '2021-02-21 01:38:30', '2021-02-21 01:38:30'),
(4, 'Lácteos', '2021-02-21 01:38:42', '2021-02-21 01:38:42'),
(5, 'Limpieza', '2021-02-21 01:38:52', '2021-02-21 01:38:52'),
(6, 'Perfumería', '2021-02-21 01:39:08', '2021-02-21 01:39:08');

-- --------------------------------------------------------

--
-- Table structure for table `instituciones`
--

CREATE TABLE `instituciones` (
  `id` int(10) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `instituciones`
--

INSERT INTO `instituciones` (`id`, `nombre`, `created_at`, `updated_at`) VALUES
(1, 'Los piletones', '2021-02-26 23:10:38', '2021-02-26 20:10:38'),
(2, 'Los niños primero', '2021-02-26 23:10:59', '2021-02-26 20:10:59'),
(3, 'Los bajitos', '2021-02-26 23:11:13', '2021-02-26 20:11:13'),
(4, 'Manos en acción', '2021-02-26 23:11:30', '2021-02-26 20:11:30');

-- --------------------------------------------------------

--
-- Table structure for table `marcas`
--

CREATE TABLE `marcas` (
  `id` int(10) NOT NULL,
  `marca` varchar(30) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `marcas`
--

INSERT INTO `marcas` (`id`, `marca`, `created_at`, `updated_at`) VALUES
(1, 'Cada día', '2021-01-04 22:40:04', '2021-01-04 19:40:04'),
(2, 'Sierra de los padres', '2021-01-04 22:40:04', '2021-01-04 19:40:04'),
(3, 'Apóstoles', '2021-02-06 16:02:35', '2021-02-06 13:05:16'),
(4, 'Supermercado', '2021-02-06 16:07:32', '2021-02-06 13:07:32'),
(5, 'Arcoa', '2021-02-06 16:07:49', '2021-02-06 13:07:49'),
(6, 'La Morenita', '2021-02-06 16:08:05', '2021-02-06 13:08:05'),
(7, 'Knorr', '2021-02-06 16:08:18', '2021-02-06 13:08:18'),
(8, 'Esnaola', '2021-02-06 16:08:30', '2021-02-06 13:08:30'),
(9, 'Canale', '2021-02-06 16:08:46', '2021-02-06 13:08:46'),
(10, 'Matarazzo', '2021-02-06 16:09:00', '2021-02-06 13:09:00'),
(11, 'Ravana', '2021-02-06 16:09:15', '2021-02-06 13:09:15'),
(12, 'Tía Maruca', '2021-02-06 16:09:38', '2021-02-06 13:09:38'),
(13, 'Criollitas', '2021-02-06 16:09:54', '2021-02-06 13:09:54'),
(14, 'Lincoln', '2021-02-06 16:10:09', '2021-02-06 13:10:09'),
(16, 'Coca Cola', '2021-02-20 21:29:51', '2021-02-20 21:29:51'),
(17, 'Cunnington', '2021-02-20 21:41:26', '2021-02-20 21:41:26'),
(18, 'Morixe', '2021-02-20 21:48:22', '2021-02-20 21:48:22'),
(19, 'Menoyo', '2021-02-20 21:51:27', '2021-02-20 21:51:27'),
(20, 'Arcor', '2021-02-20 21:53:52', '2021-02-20 21:53:52'),
(21, 'Unión', '2021-02-20 21:57:02', '2021-02-20 21:57:02'),
(22, 'Fanacoa', '2021-02-20 22:04:39', '2021-02-20 22:04:39'),
(23, 'Mamá Cocina', '2021-02-20 22:09:39', '2021-02-20 22:09:39'),
(24, 'Lucchetti', '2021-02-20 22:12:14', '2021-02-20 22:12:14'),
(25, 'Dos Anclas', '2021-02-20 22:15:39', '2021-02-20 22:15:39'),
(26, 'Taragüí', '2021-02-20 22:17:46', '2021-02-20 22:17:46'),
(27, 'Alcazar', '2021-02-20 22:19:35', '2021-02-20 22:19:35'),
(28, 'Germex', '2021-02-21 01:31:40', '2021-02-21 01:31:40'),
(29, 'Doncella', '2021-02-21 01:31:53', '2021-02-21 01:31:53'),
(30, 'Ala Ultra', '2021-02-21 01:34:53', '2021-02-21 01:34:53'),
(31, 'Algabo', '2021-02-21 01:35:08', '2021-02-21 01:35:08'),
(32, 'Ayudín', '2021-02-21 01:35:37', '2021-02-21 01:35:37'),
(33, 'Colores de Amor NH3', '2021-02-21 01:35:55', '2021-02-21 01:35:55'),
(34, 'Ecovita', '2021-02-21 01:36:07', '2021-02-21 01:36:07'),
(35, 'Elite', '2021-02-21 01:36:16', '2021-02-21 01:36:16'),
(36, 'Ilolay', '2021-02-21 01:36:27', '2021-02-21 01:36:27'),
(37, 'Pampers', '2021-02-21 01:36:39', '2021-02-21 01:36:39'),
(38, 'Rexona', '2021-02-21 01:36:51', '2021-02-21 01:36:51'),
(39, 'Sancor', '2021-02-21 01:37:01', '2021-02-21 01:37:01'),
(40, 'Sanicare', '2021-02-21 01:37:13', '2021-02-21 01:37:13'),
(41, 'Virulana', '2021-02-21 01:37:24', '2021-02-21 01:37:24');

-- --------------------------------------------------------

--
-- Table structure for table `perfiles`
--

CREATE TABLE `perfiles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `perfiles`
--

INSERT INTO `perfiles` (`id`, `nombre`, `created_at`, `updated_at`) VALUES
(1, 'usuario', '2021-01-05 02:59:26', '2021-01-04 23:59:26'),
(2, 'admin', '2021-01-05 02:59:51', '2021-01-04 23:59:51');

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `descripcion_completa` varchar(150) NOT NULL DEFAULT 'null',
  `marca_id` int(10) NOT NULL,
  `categoria_id` int(10) NOT NULL,
  `sub_categoria_id` int(10) NOT NULL,
  `precio` float NOT NULL,
  `presentacion` varchar(50) NOT NULL,
  `unidad_id` int(10) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `descripcion`, `descripcion_completa`, `marca_id`, `categoria_id`, `sub_categoria_id`, `precio`, `presentacion`, `unidad_id`, `imagen`, `created_at`, `updated_at`) VALUES
(4, 'Aceite Girasol', 'Aceite Girasol', 1, 1, 1, 131.05, '1500', 1, 'Aceite Girasol Cada Día x 1500 cc.jpg', '2021-01-10 17:56:19', '2021-02-06 15:19:21'),
(6, 'Agua Mineral Natural Con gas', 'Agua Mineral Natural Con gas', 2, 2, 2, 43.45, '1.5', 2, 'Agua Mineral Natural Con gas Sierra de los Padres x 1.5 lt.jpg', '2021-01-10 18:04:09', '2021-02-21 14:04:26'),
(13, 'Agua Mineral Natural Sin gas', 'Agua Mineral Natural Sin gas', 2, 2, 2, 43.45, '1.5', 2, 'Agua Mineral Natural Sin gas Sierra de los Padres x 1.5 lt.jpg', '2021-02-06 16:22:52', '2021-02-21 13:54:27'),
(14, 'Arroz Largo fino', 'Arroz Largo fino', 3, 1, 3, 58.3, '1', 3, 'Arroz Largo fino Apóstoles x 1 kg.jpg', '2021-02-06 16:28:11', '2021-02-06 16:28:11'),
(15, 'Arroz No se pasa', 'Arroz No se pasa', 3, 1, 3, 68.5, '1', 3, 'Arroz No se pasa Apóstoles x 1 kg.webp', '2021-02-06 16:29:56', '2021-02-06 16:29:56'),
(16, 'Atún Desmenuzado al natural', 'Atún Desmenuzado al natural', 4, 1, 4, 75, '170', 4, 'Atún Desmenuzado al natural Supermercado x 170 gr.jpg', '2021-02-06 16:31:25', '2021-02-06 16:31:25'),
(17, 'Cacao en polvo', 'Cacao en polvo', 5, 1, 5, 41.35, '180', 4, 'Cacao en polvo Arcoa x 180 gr.webp', '2021-02-06 16:33:02', '2021-02-06 16:33:02'),
(18, 'Café Molido', 'Café Molido', 6, 1, 5, 453.6, '1', 3, 'Café Molido La Morenita x 1 kg.webp', '2021-02-06 17:49:55', '2021-02-06 17:49:55'),
(19, 'Caldo Gallina', 'Caldo Gallina', 7, 1, 6, 78.75, '12', 5, 'Caldo Gallina Knorr x 12 un.jpg', '2021-02-06 17:51:24', '2021-02-06 17:51:24'),
(20, 'Dulce de batata Estuche', 'Dulce de batata Estuche', 8, 1, 7, 87.15, '500', 4, 'Dulce de batata Estuche Esnaola x 500 gr.webp', '2021-02-06 17:53:31', '2021-02-06 17:53:31'),
(21, 'Dulce de membrillo Estuche', 'Dulce de membrillo Estuche', 8, 1, 7, 92.4, '500', 4, 'Dulce de membrillo Estuche Esnaola x 500 gr.jpg', '2021-02-06 17:54:52', '2021-02-06 17:54:52'),
(22, 'Fideos Codito', 'Fideos Codito', 9, 1, 3, 35.3, '500', 4, 'Fideos Codito Canale x 500 gr.jpg', '2021-02-06 17:57:00', '2021-02-06 17:57:00'),
(23, 'Fideos Spaghetti Libre de Gluten', 'Fideos Spaghetti Libre de Gluten', 10, 1, 3, 112.3, '500', 4, 'Fideos Spaghetti Libre de Gluten Matarazzo x 500 gr.png', '2021-02-06 17:58:21', '2021-02-06 17:58:21'),
(24, 'Fideos Tallarín', 'Fideos Tallarín', 9, 1, 3, 35.3, '500', 4, 'Fideos Tallarín Canale x 500 gr.jpg', '2021-02-06 18:00:07', '2021-02-06 18:00:07'),
(25, 'Fideos Tirabuzón', 'Fideos Tirabuzón', 9, 1, 3, 35.3, '500', 4, 'Fideos Tirabuzón Canale x 500 gr.jpg', '2021-02-06 18:01:05', '2021-02-06 18:01:05'),
(26, 'Fideos Tirabuzón Libre de Gluten', 'Fideos Tirabuzon Libre de Gluten', 10, 1, 3, 112.3, '500', 4, 'Fideos Tirabuzón Libre de Gluten Matarazzo x 500 gr.jpg', '2021-02-06 18:03:08', '2021-02-06 18:03:08'),
(27, 'Flan Vainilla', 'Flan Vainilla', 11, 1, 8, 23.9, '60', 4, 'Flan Vainilla Ravana x 60 gr.jpg', '2021-02-06 18:04:37', '2021-02-06 18:04:37'),
(28, 'Galleta Marinera Clásica', 'Galleta Marinera Clásica', 12, 1, 9, 90.3, '350', 4, 'Galleta Marinera Clásica Tía Maruca x 350 gr.webp', '2021-02-06 18:06:11', '2021-02-06 18:06:11'),
(29, 'Galletitas de agua Pack x 3', 'Galletitas de agua Pack x 3', 13, 1, 9, 78.1, '300', 4, 'Galletitas de agua Pack x 3 Criollitas x 300 gr.jpg', '2021-02-06 18:07:49', '2021-02-06 18:07:49'),
(30, 'Galletitas dulces Clásica', 'Galletitas dulces Clásica', 14, 1, 9, 54.1, '153', 1, 'Galletitas dulces Clásica Lincoln x 153 gr.jpg', '2021-02-06 18:09:02', '2021-02-06 18:09:02'),
(31, 'Galletitas dulces Pepas con membrillo', 'Galletitas dulces Pepas con membrillo', 12, 1, 9, 57.25, '250', 4, 'Galletitas dulces Pepas con membrillo Tía Maruca x 250 gr.png', '2021-02-20 21:22:56', '2021-02-20 21:22:56'),
(33, 'Galletitas saladas Bizcocho salado', 'Galletitas saladas Bizcocho salado', 12, 1, 9, 32, '200', 4, 'Galletitas saladas Bizcocho salado Tía Maruca x 200 gr.jpg', '2021-02-20 21:28:08', '2021-02-20 21:28:08'),
(34, 'Gaseosa Cola original', 'Gaseosa Cola original', 16, 2, 10, 87.5, '1.25', 2, 'Gaseosa Cola original Coca Cola x 1.25 lt.jpg', '2021-02-20 21:39:22', '2021-02-21 13:54:40'),
(35, 'Gaseosa Cola original', 'Gaseosa Cola original', 16, 2, 10, 87.5, '1.5', 2, 'Gaseosa Cola original Coca Cola x 1.5 lt.jpg', '2021-02-20 21:40:35', '2021-02-21 13:54:46'),
(36, 'Gaseosa Lima limón light', 'Gaseosa Lima limón light', 17, 2, 10, 62.05, '2.25', 2, 'Gaseosa Lima limón light Cunnington x 2.25 lt.webp', '2021-02-20 21:42:48', '2021-02-21 13:54:51'),
(37, 'Gaseosa Naranja light', 'Gaseosa Naranja light', 17, 2, 10, 62.05, '2.25', 2, 'Gaseosa Naranja light Cunnington x 2.25 lt.jpg', '2021-02-20 21:43:56', '2021-02-21 13:54:56'),
(38, 'Gelatina cereza', 'Gelatina cereza', 11, 1, 8, 35.7, '50', 4, 'Gelatina cereza Ravana x 50 gr.jpg', '2021-02-20 21:45:38', '2021-02-20 21:45:38'),
(39, 'Harina de trigo 0000', 'Harina de trigo 0000', 18, 1, 11, 50.15, '1', 3, 'Harina de trigo 0000 Morixe x 1 kg.webp', '2021-02-20 21:49:49', '2021-02-20 21:49:49'),
(40, 'Harina de trigo Leudante', 'Harina de trigo Leudante', 18, 1, 11, 56.7, '1', 3, 'Harina de trigo Leudante Morixe x 1 kg.webp', '2021-02-20 21:50:52', '2021-02-20 21:50:52'),
(41, 'Jugo de limón', 'Jugo de limón', 19, 1, 1, 73.45, '250', 1, 'Jugo de limón Menoyo x 250 cc.jpg', '2021-02-20 21:52:53', '2021-02-20 21:52:53'),
(42, 'Jugo en Polvo Naranja Dulce', 'Jugo en Polvo Naranja Dulce', 20, 1, 12, 11.65, '20', 4, 'Jugo en Polvo Naranja Dulce Arcor x 20 gr.webp', '2021-02-20 21:56:17', '2021-02-20 21:56:17'),
(43, 'Mate cocido Suave', 'Mate cocido Suave', 1, 1, 5, 53.5, '25', 5, 'Mate cocido Suave Unión x 25 un.webp', '2021-02-20 21:58:38', '2021-02-20 21:58:38'),
(44, 'Mayonesa Sin tacc doypack', 'Mayonesa Sin tacc doypack', 22, 1, 1, 64.5, '475', 4, 'Mayonesa Sin tacc doypack Fanacoa x 475 gr.jpg', '2021-02-20 22:05:47', '2021-02-20 22:05:47'),
(45, 'Mermelada Ciruela', 'Mermelada Ciruela', 20, 1, 7, 100.7, '454', 4, 'Mermelada Ciruela Arcor x 454 gr.png', '2021-02-20 22:07:35', '2021-02-21 13:12:32'),
(46, 'Mermelada Durazno', 'Mermelada Durazno', 20, 1, 7, 100.7, '454', 4, 'Mermelada Durazno Arcor x 454 gr.jpg', '2021-02-20 22:08:43', '2021-02-21 13:12:32'),
(47, 'Pan rallado', 'Pan rallado', 23, 1, 9, 100.75, '1', 3, 'Pan rallado Mamá Cocina x 1 kg.webp', '2021-02-20 22:11:11', '2021-02-20 22:11:11'),
(48, 'Premezclas Chipa', 'Premezclas Chipa', 24, 1, 6, 140.4, '250', 4, 'Premezclas Chipa Lucchetti x 250 gr.webp', '2021-02-20 22:13:31', '2021-02-20 22:13:31'),
(49, 'Puré de papas', 'Puré de papas', 18, 1, 6, 96.7, '200', 4, 'Puré de papas Morixe x 200 gr.png', '2021-02-20 22:15:07', '2021-02-20 22:15:07'),
(50, 'Sal fina', 'Sal fina', 25, 1, 1, 36.75, '500', 4, 'Sal fina Dos Anclas x 500 gr.webp', '2021-02-20 22:16:41', '2021-02-20 22:16:41'),
(51, 'Té común Saquitos', 'Té común Saquitos', 26, 1, 5, 40.95, '25', 5, 'Té común Saquitos Taraguí x 25 un.webp', '2021-02-20 22:19:07', '2021-02-20 22:19:07'),
(52, 'Vinagre De alcohol', 'Vinagre De alcohol', 27, 1, 1, 26.75, '500', 1, 'Vinagre De alcohol Alcazar x 500 cc.jpg', '2021-02-20 22:20:38', '2021-02-20 22:20:38'),
(53, 'Vinagre De manzana', 'Vinagre De manzana', 27, 1, 1, 74.15, '1000', 1, 'Vinagre De manzana Alcazar x 1000 cc.webp', '2021-02-20 22:21:54', '2021-02-20 22:21:54'),
(54, 'Yerba mate Con palo suave', 'Yerba mate Con palo suave', 21, 1, 5, 245.25, '1', 3, 'Yerba mate Con palo suave Unión x 1 kg.webp', '2021-02-20 22:23:12', '2021-02-20 22:23:12'),
(56, 'Alcohol en gel Doy Pack', 'Alcohol en gel Doy Pack', 28, 6, 23, 99, '250', 6, 'Alcohol en gel Doy Pack Germex x 250 ml.jpg', '2021-02-21 01:59:40', '2021-02-21 01:59:40'),
(57, 'Algodón Hidrófilo clásico', 'Algodón Hidrófilo clásico', 29, 6, 23, 81.6, '140', 4, 'Algodón Hidrófilo clásico Doncella x 140 gr.jpg', '2021-02-21 02:01:35', '2021-02-21 02:01:35'),
(58, 'Dulce de Leche Clásico', 'Dulce de Leche Clásico', 39, 4, 16, 99, '400', 4, 'Dulce de Leche Clásico Sancor x 400 gr.jpeg', '2021-02-21 02:03:06', '2021-02-21 02:03:06'),
(59, 'Esponja Con fibra Multiuso', 'Esponja Con fibra Multiuso', 41, 5, 15, 26.55, '1', 5, 'Esponja Con fibra Multiuso Virulana x 1 un.jpg', '2021-02-21 02:04:51', '2021-02-21 02:04:51'),
(60, 'Jabón de tocador Antibacterial aloe x 3 un', 'Jabón de tocador Antibacterial aloe x 3 un', 38, 6, 23, 106.6, '90', 4, 'Jabón de tocador Antibacterial aloe x 3 un Rexona x 90 gr.webp', '2021-02-21 02:06:20', '2021-02-21 02:06:20'),
(61, 'Jabón líquido de manos Doypack citrus', 'Jabón líquido de manos Doypack citrus', 31, 6, 23, 66.8, '300', 6, 'Jabón líquido de manos Doypack citrus Algabo x 300 ml.jpg', '2021-02-21 02:07:55', '2021-02-21 02:07:55'),
(62, 'Lavandina Tradicional concentrada', 'Lavandina Tradicional concentrada', 32, 5, 15, 40.15, '1', 2, 'Lavandina Tradicional concentrada Ayudín x 1 lt.jpg', '2021-02-21 02:09:25', '2021-02-21 02:09:25'),
(63, 'Lavandina Tradicional concentrada', 'Lavandina Tradicional concentrada', 32, 5, 14, 40.15, '1', 2, 'Lavandina Tradicional concentrada Ayudín x 1 lt.jpg', '2021-02-21 02:10:30', '2021-02-21 02:10:30'),
(64, 'Lavavajilla Limón', 'Lavavajilla Limón', 30, 5, 15, 74.2, '500', 6, 'Lavavajilla Limón Ala Ultra x 500 ml.jpg', '2021-02-21 02:13:01', '2021-02-21 02:13:01'),
(65, 'Leche en polvo Entera', 'Leche en polvo Entera', 36, 4, 17, 185.1, '400', 4, 'Leche en polvo Entera Ilolay x 400 gr.jpg', '2021-02-21 03:12:58', '2021-02-21 03:12:58'),
(66, 'Leche larga vida Entera UHT', 'Leche larga vida Entera UHT', 3, 4, 18, 49.05, '1', 2, 'Leche larga vida Entera UHT Apóstoles x 1 lt.webp', '2021-02-21 03:15:00', '2021-02-21 03:15:00'),
(67, 'Leche larga vida Parcialmente descremada UHT', 'Leche larga vida Parcialmente descremada UHT', 3, 4, 18, 49.05, '1', 2, 'Leche larga vida Parcialmente descremada UHT Apóstoles x 1 ltjpg.jpg', '2021-02-21 03:16:09', '2021-02-21 03:16:09'),
(68, 'Limpiador Baño Baño doypack', 'Limpiador Baño Baño doypack', 34, 5, 14, 53, '500', 6, 'Limpiador Baño Baño doypack Ecovita x 500 ml.jpg', '2021-02-21 03:18:17', '2021-02-21 03:18:17'),
(69, 'Limpiador Cocina Cocina doypack', 'Limpiador Cocina Cocina doypack', 34, 5, 15, 53, '500', 6, 'Limpiador Cocina Cocina doypack Ecovita x 500 ml.jpg', '2021-02-21 03:19:25', '2021-02-21 03:19:25'),
(70, 'Limpiador de piso', 'Limpiador de piso', 33, 5, 22, 94.5, '1800', 1, 'Limpiador de piso Colores de Amor NH3 x 1800 cc.webp', '2021-02-21 03:20:48', '2021-02-21 03:20:48'),
(71, 'Limpiador Desinfectante Botella', 'Limpiador Desinfectante Botella', 34, 5, 15, 79, '900', 6, 'Limpiador Desinfectante Botella Ecovita x 900 ml.jpg', '2021-02-21 03:22:27', '2021-02-21 03:22:27'),
(72, 'Limpiador Desinfectante Botella', 'Limpiador Desinfectante Botella', 34, 5, 14, 79, '900', 6, 'Limpiador Desinfectante Botella Ecovita x 900 ml.jpg', '2021-02-21 03:24:05', '2021-02-21 03:24:05'),
(73, 'Oleo calcáreo Botella', 'Oleo calcáreo Botella', 40, 3, 19, 176.8, '1000', 6, 'Oleo calcáreo Botella Sanicare x 1000 ml.jpg', '2021-02-21 03:25:41', '2021-02-21 03:25:41'),
(74, 'Papel higiénico Hoja Simple Flor Cadenas 80 mts', 'Papel higiénico Hoja Simple Flor Cadenas 80 mts', 35, 5, 21, 137.15, '4', 5, 'Papel higiénico Hoja Simple Flor Cadenas 80 mts Elite x 4 un.jpg', '2021-02-21 03:27:26', '2021-02-21 03:27:26'),
(75, 'Pañales descartables Supersec Talle G', 'Pañales descartables Supersec Talle G', 37, 3, 20, 682.5, '46', 5, 'Pañales descartables Supersec Talle G Pampers x 46 un.jpg', '2021-02-21 03:29:00', '2021-02-21 03:29:00'),
(76, 'Pañales descartables Supersec Talle M', 'Pañales descartables Supersec Talle M', 37, 3, 20, 682.5, '54', 5, 'Pañales descartables Supersec Talle M Pampers x 54 un.jpg', '2021-02-21 03:30:53', '2021-02-21 03:30:53'),
(77, 'Pañales descartables Supersec Talle P', 'Pañales descartables Supersec Talle P', 37, 3, 20, 378, '30', 5, 'Pañales descartables Supersec Talle P Pampers x 30 un.webp', '2021-02-21 03:32:15', '2021-02-21 03:32:15'),
(78, 'Pañales descartables Supersec Talle XG', 'Pañales descartables Supersec Talle XG', 37, 3, 20, 682.5, '36', 5, 'Pañales descartables Supersec Talle XG Pampers x 36 un.jpg', '2021-02-21 03:33:28', '2021-02-21 03:33:28'),
(79, 'Pañales descartables Supersec Talle XXG', 'Pañales descartables Supersec Talle XXG', 37, 3, 20, 682.5, '34', 5, 'Pañales descartables Supersec Talle XXG Pampers x 34 un.jpg', '2021-02-21 03:34:46', '2021-02-21 03:34:46'),
(80, 'Paño Amarillo Multiuso Twist', 'Paño Amarillo Multiuso Twist', 41, 5, 15, 45, '1', 5, 'Paño Amarillo Multiuso Twist Virulana x 1 un.jpg', '2021-02-21 03:36:10', '2021-02-21 03:36:10'),
(81, 'Paño Amarillo Multiuso Twist', 'Paño Amarillo Multiuso Twist', 41, 5, 14, 45, '1', 5, 'Paño Amarillo Multiuso Twist Virulana x 1 un.jpg', '2021-02-21 03:37:08', '2021-02-21 03:37:08'),
(82, 'Rollo de cocina 60 paños', 'Rollo de cocina 60 paños', 35, 5, 21, 103.45, '3', 5, 'Rollo de cocina 60 paños Elite x 3 un.webp', '2021-02-21 03:38:31', '2021-02-21 03:38:31'),
(83, 'Servilletas Blanca', 'Servilletas Blanca', 35, 5, 21, 53.8, '70', 5, 'Servilletas Blanca Elite x 70 un.jpg', '2021-02-21 03:39:54', '2021-02-21 03:39:54');

-- --------------------------------------------------------

--
-- Table structure for table `sub_categorias`
--

CREATE TABLE `sub_categorias` (
  `id` int(10) NOT NULL,
  `sub_categoria` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `categoria_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sub_categorias`
--

INSERT INTO `sub_categorias` (`id`, `sub_categoria`, `created_at`, `updated_at`, `categoria_id`) VALUES
(1, 'Aceites y aderezos', '2021-01-04 22:45:16', '2021-03-02 19:10:36', 1),
(2, 'Agua mineral', '2021-01-04 22:45:16', '2021-03-02 19:11:33', 2),
(3, 'Arroz y fideos', '2021-02-06 16:13:29', '2021-03-02 19:09:33', 1),
(4, 'Conservas', '2021-02-06 16:14:52', '2021-03-02 19:09:43', 1),
(5, 'Infusiones, cacao', '2021-02-06 16:15:14', '2021-03-02 19:09:53', 1),
(6, 'Sopas, caldos, puré', '2021-02-06 16:15:38', '2021-03-02 19:10:00', 1),
(7, 'Mermeladas y dulces', '2021-02-06 16:16:05', '2021-03-02 19:10:08', 1),
(8, 'Premezcla postres', '2021-02-06 16:16:39', '2021-03-02 19:10:14', 1),
(9, 'Panadería, galletitas', '2021-02-06 16:17:00', '2021-03-02 19:10:21', 1),
(10, 'Gaseosas', '2021-02-20 21:37:45', '2021-03-02 19:11:42', 2),
(11, 'Harinas', '2021-02-20 21:48:46', '2021-03-02 19:10:28', 1),
(12, 'Bebidas', '2021-02-20 21:55:17', '2021-03-02 19:20:50', 1),
(14, 'Baño', '2021-02-21 01:41:34', '2021-03-02 19:12:07', 5),
(15, 'Cocina', '2021-02-21 01:41:44', '2021-03-02 19:12:12', 5),
(16, 'Dulce de leche', '2021-02-21 01:41:56', '2021-03-02 19:10:54', 4),
(17, 'Leche en polvo', '2021-02-21 01:42:08', '2021-03-02 19:11:10', 4),
(18, 'Leche larga vida', '2021-02-21 01:42:20', '2021-03-02 19:11:03', 4),
(19, 'Oleo calcáreo', '2021-02-21 01:42:37', '2021-03-02 19:12:48', 3),
(20, 'Pañales descartables', '2021-02-21 01:42:51', '2021-03-02 19:12:37', 3),
(21, 'Papeles', '2021-02-21 01:43:03', '2021-03-02 19:12:24', 5),
(22, 'Piso', '2021-02-21 01:43:13', '2021-03-02 19:11:56', 5),
(23, '', '2021-02-21 01:53:33', '2021-03-02 19:20:14', 6);

-- --------------------------------------------------------

--
-- Table structure for table `unidades`
--

CREATE TABLE `unidades` (
  `id` int(10) NOT NULL,
  `medida` varchar(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `unidades`
--

INSERT INTO `unidades` (`id`, `medida`, `created_at`, `updated_at`) VALUES
(1, 'cc', '2021-01-10 17:54:44', '2021-01-10 14:54:44'),
(2, 'lt', '2021-01-10 17:54:58', '2021-01-10 14:54:58'),
(3, 'kg', '2021-01-10 17:55:16', '2021-01-10 14:55:16'),
(4, 'gr', '2021-01-10 17:55:25', '2021-01-10 14:55:25'),
(5, 'un', '2021-01-10 17:55:35', '2021-01-10 14:55:35'),
(6, 'ml', '2021-02-21 01:44:34', '2021-02-21 01:44:34');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `perfil_id` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `perfil_id`, `created_at`, `updated_at`) VALUES
(26, 'Samuel', 'samuel@samuel.com', '$2a$10$MkOJpH8.mVlWATGpdFl45u5C.v.xrfYfMQ0zHOmbKFY8po5bWJhDW', 1, '2021-01-27 17:49:15', '2021-01-27 17:49:15'),
(30, 'admin', 'admin@admin.com', '$2a$10$Ioy5Jzg2bjoS1Ycs0dKrEOOCmTREAVGewDtN2nHKITp7H0lzutcYG', 2, '2021-02-19 11:31:40', '2021-02-19 08:33:21'),
(31, 'Pablo', 'pablo@pablo.com', '$2a$10$9gjnW8T7hpBR./mhAVww2uVfmo6SeDY6LqkYtaLVqyZ9opxXFbkBy', 1, '2021-02-19 16:07:02', '2021-02-19 16:17:10'),
(32, 'Sergio', 'sergio@sergio.com', '$2a$10$DwmzyphpQGUSv.Oz48D.EeiKTOagy/M3HFyQWrlMh4k3rIAHDYwUG', 1, '2021-02-20 20:41:49', '2021-02-20 20:41:49'),
(33, 'Maria', 'maria@maria.com', '$2a$10$8SvDxHZsybrKqz4.wUsHVOvscJIitRA7ol6iCF0g00gllj.SBPQKu', 1, '2021-02-20 20:42:21', '2021-02-20 20:42:21'),
(34, 'Francisco', 'francisco@francisco.com', '$2a$10$Q/2mQj.HxYtxt4GYhQA3neBy0LJmrUSgHe78SgBIqKeJvSn1hoHga', 1, '2021-02-20 20:42:47', '2021-02-20 20:42:47'),
(35, 'Arturo', 'arturo@arturo.com', '$2a$10$h8cYrFkJCXWDQd62BwCHGub05KaJ5BIJq4mo2uGaMmUnpTDyF8uPS', 1, '2021-02-20 20:43:38', '2021-02-20 20:43:38'),
(36, 'Filomena', 'filomena@filomena.com', '$2a$10$7w4C0avv4OY4c6BaVsv7LukTdZDEJmEosqfvJmyPrIkQ.2rSPmuQC', 1, '2021-02-20 20:44:04', '2021-02-20 20:44:04'),
(37, 'Claudio', 'claudio@claudio.com', '$2a$10$uzaENcmVyR55NXjsk6C6xOTLh3MWqZ6MHFAE7lZ2rzPD6KifnMw/m', 1, '2021-02-20 20:44:31', '2021-02-20 20:44:31'),
(38, 'Sebastian', 'sebastian@sebastian.com', '$2a$10$RRcKsqOBoAb6A4AK6.haX.HzscyscxgaVNC07gXFIY7kV53QBfFDO', 1, '2021-02-20 20:44:57', '2021-02-20 20:44:57'),
(39, 'Antonia', 'antonia@antonia.com', '$2a$10$hkTzjBH.BBi61SltROo5euIKHbunUOIqObOmumEALkadQeUW0cXKu', 1, '2021-02-20 20:45:28', '2021-02-20 20:45:28'),
(40, 'Adriana', 'adriana@adriana.com', '$2a$10$ZVx1QjsjIzUyoMmbgrod6.6qpmxvAyfbjUBwEMnfliNkK9oTcAOH6', 1, '2021-02-20 20:46:01', '2021-02-20 20:46:01'),
(41, 'Angela', 'angela@angela.com', '$2a$10$2GZKGmDFincErfdQQu9TGOqQR.gs3zJfpTs2ZlUrBjc6ojocy1Gnm', 1, '2021-02-20 20:46:36', '2021-02-20 20:46:36'),
(42, 'Tristan', 'tristan@tristan.com', '$2a$10$6bCP29q8HTcC5qMpOa0..enIAYAFwqzXlbaQRs.OQJxwQQRw1lXpq', 1, '2021-02-20 20:47:04', '2021-02-20 20:47:04'),
(43, 'Hernan', 'hernan@hernan.com', '$2a$10$iSzUqDXwiie5SKCJnnCby.c1T5aIjuHSKaWRsIT70.v.7r.JKL/l6', 1, '2021-02-20 20:47:38', '2021-02-20 20:47:38'),
(44, 'Sofia', 'sofia@sofia.com', '$2a$10$tXHgGyD.nUyQBnsT1UtTlui9vJgii6pNUDRmTS5QcugB25OPxENrq', 1, '2021-02-20 20:49:10', '2021-02-20 20:49:10'),
(45, 'Andres', 'andres@andres.com', '$2a$10$KE6G4hDsYtOAoGDcre22s.mrAiT/GO6n0fKA1I2poEdxYQnKehEHm', 1, '2021-02-20 20:49:32', '2021-02-20 20:49:32'),
(46, 'Martin', 'martin@martin.com', '$2a$10$InGei9L33xi93lVLeJ2/z.68RkiHmCwh6hvltD012X0sURidCHCvW', 1, '2021-02-20 20:50:01', '2021-02-20 20:50:01'),
(47, 'Pedro', 'pedro@pedro.com', '$2a$10$ULuvy8esvpIHr1lXc64wC.kra2LXh89G9P4QMmBK2kL.NQ28/6Q8.', 1, '2021-02-20 20:50:29', '2021-02-20 20:50:29'),
(48, 'Jose', 'jose@jose.com', '$2a$10$qgw5adHbMU3B.5S/nuPN8etsOFGUubRJFjODDDOSTT3gH80n7JpDe', 1, '2021-02-20 20:51:45', '2021-02-20 20:51:45'),
(49, 'Esteban', 'esteban@esteban.com', '$2a$10$U0nUkY8JbtKbKw3kGlczFuWwPHlz0q9RclTf5bvQUZHn81My.Y9bS', 1, '2021-02-20 20:52:31', '2021-02-20 20:52:31'),
(50, 'Daniela', 'daniela@daniela.com', '$2a$10$T9IUL5S6.hQldqYithe9I.3wbakFWKWkj7ppKiaAcSuDPK55.nkte', 1, '2021-02-20 20:53:34', '2021-02-20 20:53:34'),
(51, 'Ramiro', 'ramiro@ramiro.com', '$2a$10$s0XBPMMFvhavrbT99GrWLeMWQoPfFyJK/bUbA2W4AasFwRidPqERG', 1, '2021-02-20 20:53:57', '2021-02-20 20:53:57'),
(52, 'Raquel', 'raquel@raquel.com', '$2a$10$5U2ZTLxIBfW0aa0rkfXsoeLiJsXXMiNLbna3R/XNLSSOjL8XLJZaq', 1, '2021-02-20 20:54:28', '2021-02-20 20:54:28'),
(53, 'Nilda', 'nilda@nilda.com', '$2a$10$TsfY10uzwVLav7ZOWdrWzO5kxwtkCaSRI0tHiqhnOjUT7xm8wLkxS', 1, '2021-02-20 20:55:07', '2021-02-20 20:55:07'),
(54, 'Nicolas', 'nicolas@nicolas.com', '$2a$10$uAvL3Rocpd40f35bOilWJeV7DUaWw20afxY/NiXXwHXSc6SS2Sho6', 1, '2021-02-20 20:55:33', '2021-02-20 20:55:33'),
(55, 'Yanina', 'yanina@yanina.com', '$2a$10$45ZnaqGY4rV9C7blXSR5muI2AIRc0uX/8VZUe6OROtComeJUOuzJq', 1, '2021-02-20 20:56:28', '2021-02-20 20:56:28'),
(56, 'Diego', 'diego@diego.com', '$2a$10$3okJHjtrbYrt7gxogmEm2Ot.7TuyEmfQuDA9G1ipRoIHX.D9EKCh.', 1, '2021-02-20 20:57:01', '2021-02-20 20:57:01'),
(57, 'Antonio', 'antonio@antonio.com', '$2a$10$uqRY76ksZnFoqATFBceZJ..yohzoWU2C7qIsNgiXC7IbiZ6EMkdhO', 1, '2021-02-27 03:51:33', '2021-02-27 03:51:33'),
(58, 'Giacomo', 'giacomo@giacomo.com', '$2a$10$wXuA36wAeXNKgo9BuX/3NOG4hESubiuiR80YFFRAsQWtbOsOZk7gG', 1, '2021-02-27 04:12:31', '2021-02-27 04:12:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carritos`
--
ALTER TABLE `carritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `carritos_ibfk_2_idx` (`institucion_id`);

--
-- Indexes for table `carrito_producto`
--
ALTER TABLE `carrito_producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carrito_id` (`carrito_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indexes for table `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `instituciones`
--
ALTER TABLE `instituciones`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `perfiles`
--
ALTER TABLE `perfiles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `marca_id` (`marca_id`),
  ADD KEY `categoria_id` (`categoria_id`),
  ADD KEY `sub_categoria_id` (`sub_categoria_id`),
  ADD KEY `productos_ibfk_3_idx` (`unidad_id`);

--
-- Indexes for table `sub_categorias`
--
ALTER TABLE `sub_categorias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_categorias_ibfk_1_idx` (`categoria_id`);

--
-- Indexes for table `unidades`
--
ALTER TABLE `unidades`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `perfil_id` (`perfil_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carritos`
--
ALTER TABLE `carritos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `carrito_producto`
--
ALTER TABLE `carrito_producto`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=269;

--
-- AUTO_INCREMENT for table `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `instituciones`
--
ALTER TABLE `instituciones`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `perfiles`
--
ALTER TABLE `perfiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `sub_categorias`
--
ALTER TABLE `sub_categorias`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `unidades`
--
ALTER TABLE `unidades`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carritos`
--
ALTER TABLE `carritos`
  ADD CONSTRAINT `carritos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `carritos_ibfk_2` FOREIGN KEY (`institucion_id`) REFERENCES `instituciones` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `carrito_producto`
--
ALTER TABLE `carrito_producto`
  ADD CONSTRAINT `carrito_producto_ibfk_1` FOREIGN KEY (`carrito_id`) REFERENCES `carritos` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `carrito_producto_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`marca_id`) REFERENCES `marcas` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `productos_ibfk_3` FOREIGN KEY (`unidad_id`) REFERENCES `unidades` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `productos_ibfk_4` FOREIGN KEY (`sub_categoria_id`) REFERENCES `sub_categorias` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `sub_categorias`
--
ALTER TABLE `sub_categorias`
  ADD CONSTRAINT `sub_categorias_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`perfil_id`) REFERENCES `perfiles` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
