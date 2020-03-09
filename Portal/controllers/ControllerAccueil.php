<?php
namespace Crits\controllers;
use Crits\views\View;
use Crits\controllers\ajaxClientPhp;

class ControllerAccueil{
  private $_view;
  public function __construct(){
    if (isset($url) && count($url) > 1) {
      throw new \Exception("Page introuvable", 1);
    } else {
      $this->_view = new View('Accueil');
      if(isset($_SESSION['admin']) && !empty($_SESSION['admin'])){
      $this->_view->generate("Billet simple pour l'Alaska", array());
      } else {
        $this->_view->generate("Billet simple pour l'Alaska", array());
      }
    } 
  }
}
