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
        $passwordHashed = $userLogins[0]->password();
        $goodUsername = $userLogins[0]->username();
        $userRole = $userLogins[0]->role();   
        $userId = $userLogins[0]->id();
        $password= password_verify($passwordSubmitted, $passwordHashed);
        if($_POST['username'] == $userLogins[0]->username() && $password == true){
        $_SESSION['role'] = $userRole;
        $_SESSION['id'] = $userId;
        $_SESSION['username'] = $goodUsername;
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
