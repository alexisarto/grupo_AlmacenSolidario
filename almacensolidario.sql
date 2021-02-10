-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 09, 2021 at 12:47 AM
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
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carritos`
--

INSERT INTO `carritos` (`id`, `usuario_id`, `total`, `estado`, `created_at`, `updated_at`) VALUES
(1, 26, 0, 'abierto', '2021-02-05 13:49:35', '2021-02-05 11:17:14');

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
(3, 1, 6, 4, 0, '2021-02-05 21:08:05', '2021-02-08 22:35:24'),
(4, 1, 4, 1, 131.05, '2021-02-08 21:55:06', '2021-02-08 21:55:06'),
(7, 1, 15, 1, 68.5, '2021-02-08 22:33:07', '2021-02-08 22:33:07'),
(8, 1, 16, 1, 75, '2021-02-08 22:33:20', '2021-02-08 22:33:20'),
(9, 1, 23, 2, 112.3, '2021-02-08 22:34:55', '2021-02-08 22:35:13');

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
(2, 'Bebidas', '2021-01-04 22:38:47', '2021-01-04 19:38:47');

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
(14, 'Lincoln', '2021-02-06 16:10:09', '2021-02-06 13:10:09');

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
(6, 'Agua Mineral Natural Con gas', 'Agua Mineral Natural Con gas', 2, 2, 1, 43.45, '1.5', 2, 'Agua Mineral Natural Con gas Sierra de los Padres x 1.5 lt.jpg', '2021-01-10 18:04:09', '2021-02-06 15:13:02'),
(13, 'Agua Mineral Natural Sin gas', 'Agua Mineral Natural Sin gas', 2, 1, 2, 43.45, '1.5', 2, 'Agua Mineral Natural Sin gas Sierra de los Padres x 1.5 lt.jpg', '2021-02-06 16:22:52', '2021-02-06 15:16:52'),
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
(30, 'Galletitas dulces Clásica', 'Galletitas dulces Clásica', 14, 1, 9, 54.1, '153', 1, 'Galletitas dulces Clásica Lincoln x 153 gr.jpg', '2021-02-06 18:09:02', '2021-02-06 18:09:02');

-- --------------------------------------------------------

--
-- Table structure for table `sub_categorias`
--

CREATE TABLE `sub_categorias` (
  `id` int(10) NOT NULL,
  `sub_categoria` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sub_categorias`
--

INSERT INTO `sub_categorias` (`id`, `sub_categoria`, `created_at`, `updated_at`) VALUES
(1, 'Aceites y aderezos', '2021-01-04 22:45:16', '2021-01-04 19:45:16'),
(2, 'Agua mineral', '2021-01-04 22:45:16', '2021-01-04 19:45:16'),
(3, 'Arroz y fideos', '2021-02-06 16:13:29', '2021-02-06 13:13:29'),
(4, 'Conservas', '2021-02-06 16:14:52', '2021-02-06 13:14:52'),
(5, 'Infusiones, cacao', '2021-02-06 16:15:14', '2021-02-06 13:15:14'),
(6, 'Sopas, caldos, puré', '2021-02-06 16:15:38', '2021-02-06 13:15:38'),
(7, 'Mermeladas y dulces', '2021-02-06 16:16:05', '2021-02-06 13:16:05'),
(8, 'Premezcla postres', '2021-02-06 16:16:39', '2021-02-06 13:16:39'),
(9, 'Panadería, galletitas', '2021-02-06 16:17:00', '2021-02-06 13:17:00');

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
(5, 'un', '2021-01-10 17:55:35', '2021-01-10 14:55:35');

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
(2, 'Agustin', 'agustin@agustin.com', '$2a$10$ccBOxlGhOKlF8OQPs/zvgO4rpAsDJsj15Y4QhkK4AyR', 1, '2021-01-05 03:02:16', '2021-01-05 03:02:16'),
(3, 'Agustin', 'agustin@agustin.com', '$2a$10$ENU5d83hHIcPrJcvEzTI1ume3jOQOnpxI8ExM5px0N6', 1, '2021-01-05 03:09:33', '2021-01-05 03:09:33'),
(4, 'Agustin', 'agustin@agustin.com', '$2a$10$0G7vG4edoihnh74Rz6gSpOGpPUjk0HkCjzPASXMljxj', 1, '2021-01-05 19:07:16', '2021-01-05 19:07:16'),
(5, 'Agustin', 'agustin@agustin.com', '$2a$10$SSe1aLDdm/WaDLRzFe9ITeD8A/ibj/CPTLfbwM4VEH3', 1, '2021-01-05 19:11:11', '2021-01-05 19:11:11'),
(6, 'Agustin', 'agustin@agustin.com', '$2a$10$U.4ewDTVHKY1AO0I7TLT6O8gikl3yC.XF16bcsAH6jg', 1, '2021-01-05 19:18:36', '2021-01-05 19:18:36'),
(7, 'Agustin', 'agustin@agustin.com', '$2a$10$Gu8YidtBCu4EiaEi0/l0TOnZtA0LuUwkqGKTaptixsN', 1, '2021-01-05 19:20:50', '2021-01-05 19:20:50'),
(8, 'Marco', 'marco@marco.com', '$2a$10$6H9psUhoF7c.9qoJ4U8cy.gSX2nPzaeXXQCge.RMqNi', 1, '2021-01-06 22:40:54', '2021-01-06 22:40:54'),
(9, 'Francisco', 'francisco@francisco.com', '$2a$10$Bb0qEJ3.8S01x4k/7Vlm3.QRKSSZGOsrUZcGthFZTKH', 1, '2021-01-07 03:28:22', '2021-01-07 03:28:22'),
(10, 'Sergio', 'francisco@francisco.com', '$2a$10$xzXW1NOvqCpwwdGwSK7mL.niRjOcIGEseUIlwc7O3c8', 1, '2021-01-07 03:29:50', '2021-01-07 03:29:50'),
(11, 'Maria', 'francisco@francisco.com', '$2a$10$GYix5iaKSWVkM2RoEqk22ON3FHlFWfYQplLH9KkbLAC', 1, '2021-01-07 03:45:21', '2021-01-07 03:45:21'),
(12, 'Paula', 'paula@paula.com', '$2a$10$zyENGHN6nBlD977WUPNbdu1nh7.V6Q9y/g3Dm3eTIVJ', 1, '2021-01-08 14:25:23', '2021-01-08 14:25:23'),
(13, 'Eugenio', 'eugenio@eugenio.com', '$2a$10$QWgtwdugPlqyT6bBezSgqeN8dfbITmJTLKr9YTTLIrw', 1, '2021-01-10 03:05:40', '2021-01-10 03:05:40'),
(14, 'Ernesto', 'ernesto@ernesto.com', '$2a$10$s.wKvfm3t9gnOgwPm8HVYeFMPishaXaUhivEo2TNBsp', 1, '2021-01-10 03:13:56', '2021-01-10 03:13:56'),
(15, 'Filomena', 'filomena@filomena.com', '$2a$10$hK.cJ820CTk1zAJbD6ibk.bX3TxnJRerwIgDZiPy7Fz', 1, '2021-01-10 03:45:55', '2021-01-10 03:45:55'),
(16, 'Angelina', 'angelina@angelina.com', '$2a$10$PR8Lm/RLIpVjyFYj/1HPverMJCVErk86bElrwpsUSGMXC5/VP2HKm', 1, '2021-01-10 03:56:06', '2021-01-10 03:58:37'),
(17, 'Andres', 'andres@andres.com', '$2a$10$I3779bwkGb51D2u0kK8OUuH0V4HeWBCUbb0yQuFPwnoCfYNyMHqAC', 1, '2021-01-10 04:04:40', '2021-01-10 04:07:41'),
(18, 'Giacomo', 'giacomo@giacomo.com', '$2a$10$pY6CN2D77LH6bhdqb9Uwt.dQbykwKo1fiMB3JAFJzduzrfKyydpHe', 1, '2021-01-10 04:15:45', '2021-01-10 04:15:45'),
(19, 'Arturo', 'arturo@arturo.com', '$2a$10$LJ/gLDHfJqg/qeN72e.SrOHEbW/tKE/F1l9/l7uY/c9EZqzRq/.TC', 1, '2021-01-10 04:35:26', '2021-01-10 04:35:26'),
(20, 'Tristan', 'tristan@tristan.com', '$2a$10$svft1LyJGg6ZeFu8/Jb0eOclVfA7H2/Kp2zYCVK6TAzRINcWK0R8G', 1, '2021-01-10 04:38:38', '2021-01-10 04:38:38'),
(21, 'Ofelia', 'ofelia@ofelia.com', '$2a$10$usHCW.U4IDGcxE/f8rnFX.xtL/TT8SCrqtT/vOLhS2DNC9qHzQvNy', 1, '2021-01-10 04:45:38', '2021-01-10 04:47:11'),
(22, 'Stefano', 'stefano@stefano.com', '$2a$10$DQxjIJTUPBIryyZFMiAuCOmlCDL7t/9YQRLoUFigZYdALaI5AfBRa', 1, '2021-01-10 12:51:30', '2021-01-10 12:52:32'),
(23, 'Ramiro', 'ramiro@ramiro.com', '$2a$10$N/.M//Juudv0PTVjtUQYyu7lWdLhQSCWC2VK3lRPl7O8vZTJXA1K.', 1, '2021-01-10 13:51:02', '2021-01-10 17:09:37'),
(24, 'Pirulo', 'pirulo@pirulo.com', '$2a$10$SwD5VodaUq0bQ0TLhOUZtulzPXH9cv8rcO88.OyfNmFGhaB4FVUli', 1, '2021-01-25 18:44:53', '2021-01-25 18:44:53'),
(25, 'Sebastian', 'sebastian@sebastian.com', '$2a$10$/i9D55Gy/0x8nzMgFn9N5OfpdOiyfOeLANdeLosNZvg6m4iPQ1/YS', 1, '2021-01-25 19:37:31', '2021-01-25 19:37:31'),
(26, 'Samuel', 'samuel@samuel.com', '$2a$10$MkOJpH8.mVlWATGpdFl45u5C.v.xrfYfMQ0zHOmbKFY8po5bWJhDW', 1, '2021-01-27 17:49:15', '2021-01-27 17:49:15'),
(27, 'admin', 'admin@admin.com', '$2a$10$ylF399WXedJxxTW9V6skgOj5QRD4.6Sd90/IQkh.hqHm.833MgrS.', 2, '2021-02-03 17:19:10', '2021-02-03 14:49:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carritos`
--
ALTER TABLE `carritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

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
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `carrito_producto`
--
ALTER TABLE `carrito_producto`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `perfiles`
--
ALTER TABLE `perfiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `sub_categorias`
--
ALTER TABLE `sub_categorias`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `unidades`
--
ALTER TABLE `unidades`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carritos`
--
ALTER TABLE `carritos`
  ADD CONSTRAINT `carritos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON UPDATE CASCADE;

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
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`perfil_id`) REFERENCES `perfiles` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
