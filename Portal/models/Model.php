<?php

abstract class Model
{

  protected static $_bdd;

  //connexion a la bdd

  private static function setBdd(){
    self::$_bdd = new PDO('mysql:host=localhost;dbname=blog;charset=utf8', 'root', '');
    //self::$_bdd = new PDO('mysql:host=db5000307985.hosting-data.io;dbname=dbs300525;charset=utf8', 'dbu539508', 'Open%Class*R00m');
    //on utilise les constantes de PDO pour gérer les erreurs
    self::$_bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
  }

  //fonction de connexion par defaut a la bdd
  protected function getBdd(){
    if (self::$_bdd == null) {
      self::setBdd();
      return self::$_bdd;
    }
  }
}

