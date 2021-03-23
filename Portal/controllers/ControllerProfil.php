<?php
namespace CritsPortal\controllers;
require_once($_SERVER['DOCUMENT_ROOT']. '/P5Crits/vendor/autoload.php');
require_once $_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal/controllers/ajaxClientPhp/ajaxClientCom.php';
use CritsPortal\views\View;

class ControllerProfil{
    private $_view;
    public function __construct(){
  
      if(isset($_SESSION['id']) && !empty($_SESSION['id'])){
        $this->_userManager = new \CritsPortal\models\UserManager;
        $userName=$_SESSION['username'];
        $user = $this->_userManager->getUser($userName);
        $this->_view = new View('Profil'); 
        $this->_view->generate('Profil', array('user' => $user));
    } else {
      header('Location:accueil');
    }
  }
}