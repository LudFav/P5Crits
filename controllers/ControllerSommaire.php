<?php
require_once $_SERVER["DOCUMENT_ROOT"]. '/P4Blog/views/View.php';
require_once $_SERVER["DOCUMENT_ROOT"]. '/P4Blog/controllers/ajaxClientPhp/ajaxClientBillet.php';
require_once $_SERVER["DOCUMENT_ROOT"]. '/P4Blog/controllers/ajaxClientPhp/ajaxClientCom.php';

class ControllerSommaire{
  private $_view;
  public function __construct(){
    if (isset($url) && count($url) > 1) {
      throw new \Exception("Page introuvable", 1);
    } else {
      $this->_view = new View('Sommaire');
      $this->_view->generate('Sommaire', array());
    } 
  } 
}

