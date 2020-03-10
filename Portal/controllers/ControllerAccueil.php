<?php
namespace CritsPortal\controllers;

class ControllerAccueil{
  private $_view;
  public function __construct(){
    require_once('portal/controllers/Router.php');
    if (isset($url) && count($url) > 1) {
      throw new \Exception("Page introuvable", 1);
    } else {
      $this->_view = new \CritsPortal\views\View('Accueil');
      $this->_view->generate("Billet simple pour l'Alaska", array()); 
    } 
  }
}
