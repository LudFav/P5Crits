<?php
namespace CritsPortal\controllers;
use CritsPortal\controllers\ajaxClientPhp\ajaxClientBillet;


class ControllerSommaire{
  private $_view;
  public function __construct(){
    require_once('portal/controllers/Router.php');

    if (isset($url) && count($url) > 1) {
      throw new \Exception("Page introuvable", 1);
    } else {
      $this->_view = new \CritsPortal\views\View('Sommaire');
      $this->_view->generate('Sommaire', array());
    } 
  } 
}

