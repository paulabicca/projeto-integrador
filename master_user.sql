-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 30-Maio-2019 às 17:38
-- Versão do servidor: 5.6.34
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_loginionic`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `master_user`
--

CREATE TABLE `master_user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `status` char(1) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `master_user`
--

INSERT INTO `master_user` (`user_id`, `username`, `password`, `status`, `created_at`) VALUES
(1, 'dev', '123', 'y', '2019-05-28'),
(2, 'Paula', 'ola', 'y', '2019-05-28'),
(3, 'Master', '1234', 'y', '2019-05-28'),
(4, 'Ola', '123456', 'y', '2019-05-28'),
(5, 'Teste', '123', 'y', '2019-05-28'),
(6, 'Teste 1', '123', 'y', '2019-05-28'),
(7, 'qq', 'ww', 'y', '2019-05-28'),
(8, 'Olar', '123', 'y', '2019-05-28'),
(9, 'Bel', '123456', 'y', '2019-05-28'),
(10, 'boy', '1', 'y', '2019-05-28'),
(11, '123', '123', 'y', '2019-05-28'),
(12, 'kard', 'somin', 'y', '2019-05-28'),
(13, 'Somin', 'kard', 'y', '2019-05-28'),
(14, 'master', 'master', 'y', '2019-05-30'),
(15, 'master', 'master', 'y', '2019-05-30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `master_user`
--
ALTER TABLE `master_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `master_user`
--
ALTER TABLE `master_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
