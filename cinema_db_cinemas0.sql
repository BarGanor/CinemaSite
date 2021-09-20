-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: localhost    Database: cinema_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cinemas`
--

DROP TABLE IF EXISTS `cinemas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cinemas` (
  `cinema_name` varchar(20) NOT NULL,
  `city` varchar(30) NOT NULL,
  `street` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`cinema_name`,`city`),
  CONSTRAINT `Fk_cinemas` FOREIGN KEY (`cinema_name`) REFERENCES `Companies` (`company_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinemas`
--

LOCK TABLES `cinemas` WRITE;
/*!40000 ALTER TABLE `cinemas` DISABLE KEYS */;
INSERT INTO `cinemas` VALUES ('Cinema-City','Bat-Yam','Le Via'),('Cinema-City','Beer Sheva','Morgan Hollow'),('Cinema-City','Eilat','Lewis Gateway'),('Cinema-City','Hadera','Reilly Cove'),('Cinema-City','Haifa','Harper Trace'),('Cinema-City','Jerusalem','Johns Walk'),('Cinema-City','Modiin','Juan Mill'),('Cinema-City','Natanya','Weaver Wall'),('Cinema-City','Ramat-Gan','James Gateway'),('Cinema-City','Tel Aviv','Damon Expressway'),('Hot-Cinema','Bat-Yam','Kevin Landing'),('Hot-Cinema','Beer Sheva','Hood Terrace'),('Hot-Cinema','Eilat','Elizabeth Streets'),('Hot-Cinema','Hadera','Troy Shores'),('Hot-Cinema','Haifa','Danielle Harbor'),('Hot-Cinema','Jerusalem','Wesley Harbors'),('Hot-Cinema','Modiin','Carol Tunnel'),('Hot-Cinema','Natanya','Williams Alley'),('Hot-Cinema','Ramat-Gan','Megan Isle'),('Hot-Cinema','Tel Aviv','Jamie Throughway'),('Yes-Planet','Bat-Yam','Christina Parks'),('Yes-Planet','Beer Sheva','Michael Flats'),('Yes-Planet','Eilat','Randy Mall'),('Yes-Planet','Hadera','Jared Brook'),('Yes-Planet','Haifa','Kyle Dam'),('Yes-Planet','Jerusalem','Aaron Square'),('Yes-Planet','Modiin','Walker Station'),('Yes-Planet','Natanya','Clark Ramp'),('Yes-Planet','Ramat-Gan','Rodriguez Mills'),('Yes-Planet','Tel Aviv','Alexis Plain');
/*!40000 ALTER TABLE `cinemas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-20 23:38:55
