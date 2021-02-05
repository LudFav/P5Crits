<?php
namespace CritsPortal\controllers;

class ControllerLogin {
    private $_userManager;
  
  public function __construct(){
    $this->_userManager = new \CritsPortal\models\UserManager; 
    $this->login();
    $this->isLoggedIn();
    $this->logout();
  }

  public function login(){
      if(isset($_POST['action']) && $_POST['action'] == 'login'){  
        $username = htmlspecialchars($_POST['username']);
        $passwordSubmitted = htmlspecialchars($_POST['password']);
        $userLogins = $this->_userManager->getUser($username);
        $passwordHashed = $userLogins->password();
        $goodUsername = $userLogins->username();
        $userRole = $userLogins->role();   
        $userId = $userLogins->id();
        $password= password_verify($passwordSubmitted, $passwordHashed);
        if($_POST['username'] == $userLogins->username() && $password == true){
        $_SESSION[$userRole] = array('id'=>$userId, 'username'=>$goodUsername);
        $link = "accueil";
        echo $link; 
        } else if(empty($_POST['username']) || empty($_POST['password'])){
          echo 'inputVide';
        } else if(($_POST['username'] != $goodUsername && $password == false) || ($_POST['username'] == $goodUsername && $password == false) || ($_POST['username'] != $goodUsername && $password == true)){
          echo 'wrong login';
        } 
        
      }
  }

  public function isLoggedIn(){
      if(isset($_POST['action']) && $_POST['action'] == 'isLogged'){
      $logged = true;
      echo $logged;
      }
  }

  public function logout(){
    if(isset($_POST['action']) && $_POST['action'] == 'logout'){
      session_unset();   
      session_destroy();
      $link = "accueil";
      echo $link;
      exit;
    }
  }
} 
?>
