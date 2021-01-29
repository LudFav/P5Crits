<?php
namespace CritsPortal\controllers;

require_once($_SERVER['DOCUMENT_ROOT']. '/P5Crits/vendor/autoload.php');

class ControllerRegister
{
  private $_userManager;
  private $_view;

  public function __construct()
  {
    $this->_userManager = new \CritsPortal\models\UserManager; 
    $this->_view = new \CritsPortal\views\View('Register');
    $this->_view->generate('inscription', array()); 
    $this->addUser();
  }

  private function addUser(){
    if(isset($_POST['action']) && $_POST['action']=='register'){
      if(!empty($_POST['username']) && !empty($_POST['email']) && !empty($_POST['password'])){
        $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
        $data = array(
        'username' => trim(htmlspecialchars($_POST['username'])),
        'email' => trim(htmlspecialchars($_POST['email'])),
        'password' => trim(htmlspecialchars($_POST['password'])),
        'confirmedPassword' => trim(htmlspecialchars($_POST['confirmedPassword']))
        );
        //Validation du nom : il peut comporter des lettres et des numeros
        var_dump($data);
        
        $nameValidation= "/^[a-zA-Z0-9]*$/";
      
        if(!preg_match($nameValidation, $data['username'])){
          echo 'votre pseudo ne peut contenir que des lettres et des numéros';
        }
        $emailValidation = $data['email'];
        if(!filter_var($data['email'], FILTER_VALIDATE_EMAIL)){
          echo 'adresse email non valide';
        }/*elseif($this->_userManager->getUserEmail($emailValidation)){
          echo 'email déja utilisé';
        }*/


        $this->_userManager = new \CritsPortal\models\UserManager();
        $users = $this->_userManager->createUser($data);
        //creer une vue User
        header('Location:accueil');
      } else {
        return false;
      }
    } 
  }
}
