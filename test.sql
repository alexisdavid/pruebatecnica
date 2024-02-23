-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-02-2024 a las 22:28:51
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `apiblog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_category` bigint(20) UNSIGNED DEFAULT NULL,
  `id_author` bigint(20) UNSIGNED DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `released_date` date NOT NULL,
  `cover_pick` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `id_category`, `id_author`, `title`, `author`, `released_date`, `cover_pick`, `content`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, '2r52', '24', '2024-02-23', 'C:\\Users\\Alexis Duarte\\Desktop\\project\\apiblog\\public\\images/65d90ced599a0.jpg', '24t24t', '2024-02-24 02:23:57', '2024-02-24 02:23:57'),
(2, 2, 3, 'Post 2', 'Marcos Garcia', '2024-01-21', 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', NULL, NULL),
(3, 1, 2, 'Post 3', 'Maria Juarez', '2024-01-22', 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', NULL, NULL),
(4, 3, 1, 'Post 4', 'Victoria Alcudia', '2024-01-23', 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', NULL, NULL),
(5, 4, 4, 'Post 5', 'David Duarte', '2024-01-24', 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', NULL, NULL),
(6, 2, 5, 'Post 6', 'Juan Lopez', '2024-01-25', 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', NULL, NULL),
(7, 1, 3, 'Post 7', 'Marcos Garcia', '2024-01-26', 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', NULL, NULL),
(8, 3, 2, 'Post 8', 'Maria Juarez', '2024-01-27', 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', NULL, NULL),
(9, 2, 1, 'Post 9', 'Victoria Alcudia', '2024-01-28', 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', NULL, NULL),
(10, 1, 4, 'Post 10', 'David Duarte', '2024-01-29', 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', NULL, NULL),
(11, 4, 5, 'Post 1', 'Juan Lopez', '2024-01-20', 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
