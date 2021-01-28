<?php
namespace CritsPortal\controllers;

require_once($_SERVER['DOCUMENT_ROOT']. '/P5Crits/vendor/autoload.php');

class ControllerRegister
{
  private $_userManager;
  private $_view;

  public function __construct()
  {
    $this->addUser();
    $this->_view = new \CritsPortal\views\View('Inscription');
  }

  private function addUser(){
    if(isset($_POST['action']) && $_POST['action']=='register'){
      if(!empty($_POST['username']) && !empty($_POST['email']) && !empty($_POST['password'])){
        $data = array(
        'username' => htmlspecialchars($_POST['username']),
        'email' => htmlspecialchars($_POST['email']),
        'password' => htmlspecialchars($_POST['password']),
        //confirmation pass
        );
        $this->_userManager = new \CritsPortal\models\UserManager();
        $users = $this->_userManager->createUser($data);
        //creer une vue User
        header('Location:admin');
      } else {
        return false;
      }
    } 
  }
}
