<?php
namespace CritsPortal\controllers;

class ControllerCharacter{
  private $_view;
  
  public function __construct(){
    require_once('Portal/controllers/Router.php');
    if (isset($url) && count($url) > 1) {
      throw new \Exception("Page introuvable", 1);
    } else {
      $this->character();
    } 
  }

  private function character(){
    $this->_view = new \CritsPortal\views\View('Character');
   
    $this->_view->generate('Crits-Personnage', array('character' => $character));

  }
}
