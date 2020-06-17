-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Май 29 2020 г., 12:02
-- Версия сервера: 10.4.11-MariaDB
-- Версия PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `shop_educoin_db`
--
CREATE DATABASE IF NOT EXISTS `shop_educoin_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `shop_educoin_db`;

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(5) NOT NULL,
  `deleted` int(1) NOT NULL DEFAULT 0,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `title` varchar(64) NOT NULL,
  `description` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `deleted`, `created`, `title`, `description`) VALUES
(0, 0, '2020-05-29 00:26:01', 'без категории', ''),
(1, 0, '2020-05-29 00:21:59', 'первая', ''),
(2, 0, '2020-05-29 00:21:59', 'вторая', ''),
(3, 0, '2020-05-29 00:22:34', 'третья', ''),
(4, 0, '2020-05-29 00:22:34', 'четвертая', ''),
(6, 0, '2020-05-29 00:26:40', 'пятая', '');

-- --------------------------------------------------------

--
-- Структура таблицы `pages`
--

DROP TABLE IF EXISTS `pages`;
CREATE TABLE `pages` (
  `id` int(3) NOT NULL,
  `title` varchar(125) NOT NULL,
  `description` text NOT NULL,
  `url` varchar(256) NOT NULL,
  `ico` varchar(64) NOT NULL,
  `admin_side` int(1) NOT NULL DEFAULT 0,
  `order_menu` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `pages`
--

INSERT INTO `pages` (`id`, `title`, `description`, `url`, `ico`, `admin_side`, `order_menu`) VALUES
(1, 'Главная', 'главная страница админки', 'index.php', 'nc-icon nc-bank', 1, 1),
(2, 'Товары', 'Таблица продуктов', 'products.php', 'nc-icon nc-badge', 1, 3),
(3, 'Категории', '', 'categories.php', 'nc-icon nc-bullet-list-67', 1, 2),
(4, 'Заказы', '', 'orders.php', 'nc-icon nc-cart-simple', 1, 4),
(5, 'Настройки', '', 'settings.php', 'nc-icon nc-settings-gear-64', 1, 5),
(6, 'Профиль', '', 'profile.php', 'nc-icon nc-circle-09', 1, 6),
(7, 'Выйти', '', 'logout.php', 'nc-icon nc-button-power', 1, 7);

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(5) NOT NULL,
  `deleted` int(1) NOT NULL DEFAULT 0,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `title` varchar(64) NOT NULL,
  `description` text NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `id_category` int(5) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `deleted`, `created`, `title`, `description`, `content`, `image`, `id_category`) VALUES
(1, 1, '2020-05-28 22:24:14', 'первый', 'первая запись', 'первая запись', '', 1),
(2, 1, '2020-05-28 22:36:04', 'два', 'вторая запись', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque, cupiditate dicta dolorem ducimus excepturi exercitationem fugiat id, itaque laboriosam, nam necessitatibus nihil nostrum recusandae similique! Alias at esse iusto neque tempore.', '', 4),
(3, 0, '2020-05-29 12:41:11', 'три 31', 'бла бла 3', 'бла бла 3', 'яя', 4),
(4, 0, '2020-05-29 12:47:46', 'четыре', 'что то четыре', '22', '', 1),
(5, 0, '2020-05-29 13:01:31', 'ййй', 'ццц', 'ууу', '', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;