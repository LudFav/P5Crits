<?php
require_once $_SERVER["DOCUMENT_ROOT"]. '/P4Blog/views/View.php';

class ControllerAccueil{
  private $_view;
  public function __construct(){
    if (isset($url) && count($url) > 1) {
      throw new \Exception("Page introuvable", 1);
    } else {
      $this->_view = new View('Accueil');
      $this->_view->generate("Billet simple pour l'Alaska", array()); 
    } 
  }
}
