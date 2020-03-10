<?php
namespace CritsPortal\controllers;
use CritsPortal\controllers\ajaxClientPhp\ajaxClientBillet;
use CritsPortal\views\View;


class ControllerSommaire{
  private $_view;
  public function __construct(){
    require_once('portal/controllers/Router.php');
    require_once('portal/controllers/ajaxClientPhp/ajaxClientBillet.php');
    if (isset($url) && count($url) > 1) {
      throw new \Exception("Page introuvable", 1);
    } else {
      $this->_view = new View('Sommaire');
      $this->_view->generate('Sommaire', array());
    } 
  } 
}

