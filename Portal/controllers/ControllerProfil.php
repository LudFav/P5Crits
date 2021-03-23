<?php
namespace CritsPortal\controllers;

require_once $_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal/controllers/ajaxClientPhp/ajaxClientRegister.php';

class ControllerProfil {
  private $_userManager;
  private $_view;

  public function __construct(){
    require_once('Portal/controllers/Router.php');
    if (isset($url) && count($url) < 1) {
      throw new \Exception("Page Introuvable");
    } else {
      $this->profil();    
    }
  }

  private function profil(){
    if(isset($_SESSION['username']) && !empty($_SESSION['username'])){
    //username  
        
        $username = $_SESSION['username'];
        /**
         * Profil a montrer
         */
          $this->_userManager = new \CritsPortal\models\UserManager;
          $user = $this->_userManager->getUser($username);
        
        //VUE
            /**
         * Generation de la vue 
         */
        
            if($user == false){
              $errorMsg = 'Profil introuvable';
              $this->_view = new \CritsPortal\views\View('Error');
              $this->_view->generate('Erreur', array('errorMsg' => $errorMsg));
            } else{
              $this->_view = new \CritsPortal\views\View('Profil');
              $this->_view->generate('Crits-Profil', array('user' => $user));
            }

        }
    
  }
}

