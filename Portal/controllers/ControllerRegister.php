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
        'confirmedPassword' => trim(htmlspecialchars($_POST['confirmedPassword'])),
        'role' => 'user',
        'usernameError' => '',
        'emailError' => '',
        'passwordError' => '',
        'confirmPasswordError' => ''
        );

        //Validation du nom : il peut comporter des lettres et des numeros
        $nameValidation= "/^[a-zA-Z0-9]*$/"; 
        if(!preg_match($nameValidation, $data['username'])){
          $data['usernameError'] ='votre pseudo ne peut contenir que des lettres et des numéros';
        }

        //Validation Email: vérification des caracteres utilisés et que l'email n'existe pas deja dans la bdd
        $email = $data['email'];
        if(!filter_var($data['email'], FILTER_VALIDATE_EMAIL)){
          $data['emailError'] ='adresse email non valide';
        }elseif($this->_userManager->getUserEmail($email)){
          $data['emailError'] ='email déja utilisé';
        }

        //Mot de passe et mot de passe de confirmation
        $passValidation = "/^(.{0,7}|[^a-z]*|[^\d]*)$/i";
        if(preg_match($passValidation, $data['password'])){
          $data['passwordError'] = 'Votre mot de passe doit contenir un chiffre';
        } elseif(strlen($data['password']) <= 7){
          $data['passwordError'] = 'Votre mot de passe doit avoir au moin 8 caractères';
        }
        if ($data['password'] != $data['confirmedPassword']) {
          $data['confirmPasswordError'] = 'Vos mots de passe ne correspondent pas, veuillez rééessayer.';
        }

        //Si aucune erreur on créé le compte sinon on reste sur la page
        if (empty($data['usernameError']) && empty($data['emailError']) && empty($data['passwordError']) && empty($data['confirmPasswordError'])){
          $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT, ['cost' => 12]);
          $this->_userManager = new \CritsPortal\models\UserManager();
          $users = $this->_userManager->createUser($data);
          header('Location:accueil');
          } else {
              return false;
          }
          // POST IT creer une vue/session USER
        } else {
        return false;
        }
    } 
  }
}
