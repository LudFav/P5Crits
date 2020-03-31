<?php
namespace CritsPortal\models;

abstract class Model
{

  protected static $_bdd;

  //connexion a la bdd

  private static function setBdd(){
    //self::$_bdd = new \PDO('mysql:host=localhost;dbname=blog;charset=utf8', 'root', '');
    self::$_bdd = new \PDO('mysql:host=db5000350603.hosting-data.io;dbname=dbs340719;charset=utf8', 'dbu494207', 'P5%Roll20LikeApp');
    //on utilise les constantes de PDO pour gérer les erreurs
    self::$_bdd->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_WARNING);
  }

  //fonction de connexion par defaut a la bdd
  protected function getBdd(){
    if (self::$_bdd == null) {
      self::setBdd();
      return self::$_bdd;
    }
  }
}

