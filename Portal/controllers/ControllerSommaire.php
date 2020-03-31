<?php
namespace CritsPortal\controllers;
require_once $_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal/controllers/ajaxClientPhp/ajaxClientBillet.php';
class ControllerSommaire{
  private $_view;
  public function __construct(){
    require_once('Portal/controllers/Router.php');
    if (isset($url) && count($url) > 1) {
      throw new \Exception("Page introuvable", 1);
    } else {
      $this->_view = new \CritsPortal\views\View('Sommaire');
      $this->_view->generate('Sommaire', array());
    } 
  } 
}

