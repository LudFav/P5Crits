<?php
require_once 'views/View.php';
require_once 'controllers/ajaxClientPhp/ajaxClientCom.php';

class ControllerPost {
  private $_billetManager;
  private $_view;

  public function __construct(){
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
      $this->_billetManager = new BilletManager;
      $billet = $this->_billetManager->getBillet($_GET['id']);
    
    //VUE
        /**
     * Generation de la vue 
     */
   
    if($billet == false){
      $errorMsg = 'Billet introuvable';
      $this->_view = new View('Error');
      $this->_view->generate('Erreur', array('errorMsg' => $errorMsg));
    } else{
      $this->_view = new View('SinglePost');
      $this->_view->generate('Billet', array('billet' => $billet));
    }
    
  
    }
  }
}

