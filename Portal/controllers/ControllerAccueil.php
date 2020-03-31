<?php
namespace CritsPortal\controllers;

class ControllerAccueil{
  private $_view;
  private $_billetManager;
  public function __construct(){
    require_once('Portal/controllers/Router.php');
    if (isset($url) && count($url) > 1) {
      throw new \Exception("Page introuvable", 1);
    } else {
      $this->accueil();
    } 
  }

  private function accueil(){
    $this->_billetManager = new \CritsPortal\models\BilletManager;
    $billet = $this->_billetManager->getLastBillet();
  
    $this->_view = new \CritsPortal\views\View('accueil');
   
    $this->_view->generate('Accueil', array('billet' => $billet));

  }
}
