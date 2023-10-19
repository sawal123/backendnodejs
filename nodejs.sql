-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Okt 2023 pada 11.18
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `menu`
--

CREATE TABLE `menu` (
  `menu_id` int(11) NOT NULL,
  `menu` varchar(255) NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `menu`
--

INSERT INTO `menu` (`menu_id`, `menu`, `kategori`, `price`, `created_at`) VALUES
(1, 'Nasi Goreng', 'makanan', 12000, '2023-10-17 08:56:23'),
(2, 'Mie Goreng', 'makanan', 10000, '2023-10-17 08:57:07'),
(3, 'Jus Alpukat', 'minuman', 5000, '2023-10-17 08:57:28'),
(4, 'Jus Mangga', 'minuman', 5000, '2023-10-17 08:57:39'),
(5, 'Jus Terong Belanda', 'minuman', 6000, '2023-10-17 08:57:49'),
(7, 'Ayam Goreng', 'makanan', 8000, '2023-10-17 09:08:22'),
(8, 'Sate Ayam', 'makanan', 11000, '2023-10-19 02:30:56'),
(9, 'Tempe Mendoan', 'makanan', 5000, '2023-10-19 02:31:20'),
(10, 'Es Teh Manis Anget', 'minuman', 3000, '2023-10-19 02:31:25');

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `menu_id` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `order_date` date NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `menu_id`, `qty`, `order_date`, `created_at`, `updated`) VALUES
(48, '1', '1', 1, '2023-10-19', '2023-10-19 07:20:09', '2023-10-19 07:20:09'),
(49, '1', '8', 1, '2023-10-19', '2023-10-19 07:20:09', '2023-10-19 07:20:09'),
(50, '1', '9', 5, '2023-10-19', '2023-10-19 07:20:09', '2023-10-19 07:20:09'),
(51, '1', '10', 3, '2023-10-19', '2023-10-19 07:20:09', '2023-10-19 07:20:09'),
(52, '2', '1', 5, '2023-10-19', '2023-10-19 07:20:56', '2023-10-19 07:20:56'),
(53, '2', '8', 6, '2023-10-19', '2023-10-19 07:20:56', '2023-10-19 07:20:56'),
(54, '2', '9', 5, '2023-10-19', '2023-10-19 07:20:56', '2023-10-19 07:20:56'),
(55, '2', '10', 3, '2023-10-19', '2023-10-19 07:20:56', '2023-10-19 07:20:56');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `created_at`) VALUES
(1, 'sawal', 'sawal123', '2023-10-10 02:35:42'),
(2, 'Tresa', '123', '2023-10-17 03:55:12'),
(3, 'Lin', '123', '2023-10-17 07:51:56'),
(4, 'chau', '123', '2023-10-17 08:15:50'),
(5, 'Irshan', '2674', '2023-10-19 01:27:19');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`menu_id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `menu`
--
ALTER TABLE `menu`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
