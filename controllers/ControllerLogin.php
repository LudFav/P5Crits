<?php


class ControllerLogin {
    private $_userManager;
    private $_view;
  
  public function __construct(){
    $this->_userManager = new UserManager; 
    $this->login();
    $this->isLoggedIn();
    $this->logout();
  }

  public function login(){
      if(isset($_POST['action']) && $_POST['action'] == 'login'){  
        $userInfo = $this->_userManager->getUser();
        $username = htmlspecialchars($_POST['username']);
        $passwordSubmitted = htmlspecialchars($_POST['password']);
        //$passToHash = password_hash("mot de passe", PASSWORD_DEFAULT, ['cost' => 12]);
        $passwordHashed = $userInfo[0]->password();
        $goodUsername = $userInfo[0]->username();
        $password= password_verify($passwordSubmitted, $passwordHashed);
        if($_POST['username'] == $userInfo[0]->username() && $password == true){
        $_SESSION['admin'] = $username;
        $link = "admin";
        echo $link; 
        } else if(empty($_POST['username']) || empty($_POST['password'])){
          echo 'inputVide';
        } else if(($_POST['username'] != $goodUsername && $password == false) || ($_POST['username'] == $goodUsername && $password == false) || ($_POST['username'] != $goodUsername && $password == true)){
         echo 'wrong login';
        } 
      }
  }

  public function isLoggedIn(){
    if(isset($_SESSION['admin']) && !empty($_SESSION['admin'])){
      if(isset($_POST['action']) && $_POST['action'] == 'isLogged'){
      $logged = true;
      echo $logged;
      }
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
