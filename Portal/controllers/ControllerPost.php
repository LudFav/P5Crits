<?php
namespace CritsPortal\controllers;

require_once $_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal/controllers/ajaxClientPhp/ajaxClientCom.php';

class ControllerPost {
  private $_billetManager;
  private $_view;

  public function __construct(){
    require_once('Portal/controllers/Router.php');
    if (isset($url) && count($url) < 1) {
      throw new \Exception("Page Introuvable");
    } else {
      $this->post();    
    }
  }

  private function post(){

  //BILLETS  
    if (isset($_GET['id'])) {
      /**
     * Billets a montrer
     */
      $this->_billetManager = new \CritsPortal\models\BilletManager;
      $billet = $this->_billetManager->getBillet($_GET['id']);
    
    //VUE
        /**
     * Generation de la vue 
     */
   
    if($billet == false){
      $errorMsg = 'Billet introuvable';
      $this->_view = new \CritsPortal\views\View('Error');
      $this->_view->generate('Erreur', array('errorMsg' => $errorMsg));
    } else{
      $this->_view = new \CritsPortal\views\View('SinglePost');
      $this->_view->generate('Crits-Billet', array('billet' => $billet));
    }
    
  
    }
  }
}

