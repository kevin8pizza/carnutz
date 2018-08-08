DROP DATABASE IF EXISTS car_db;
CREATE DATABASE car_db;
USE car_db;
CREATE TABLE `specs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `make` varchar(20) DEFAULT NULL,
  `model` varchar(20) DEFAULT NULL,
  `year` int(4) DEFAULT NULL,
  `bodyType` varchar(20) DEFAULT NULL,
  `engineSize` int(4) DEFAULT NULL,
  `fuelEconomy` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=latin1;
SELECT * FROM car_db.specs;