<?php
use CritsPortal\models\UserManager;

require_once($_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal/models/UserManager.php');


$_userManager;
$_userManager = new UserManager;

if(isset($_POST['action']) && $_POST['action']=='register'){
  if(!empty($_POST['username']) && !empty($_POST['email']) && !empty($_POST['password'])){
    $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
    $data = array(
    'username' => trim(htmlspecialchars($_POST['username'])),
    'email' => trim(htmlspecialchars($_POST['email'])),
    'password' => trim(htmlspecialchars($_POST['password'])),
    'confirmedPassword' => trim(htmlspecialchars($_POST['confirmedPassword'])),
    'role' => 'user'
    );
    //Validation du nom : il peut comporter des lettres et des numeros
    $nameValidation= "/^[a-zA-Z0-9]*$/"; 
    $infoName = $data['username'];
    $typeName='username';
    if(!preg_match($nameValidation, $data['username'])){
      $error ='usernameError';
    }elseif($_userManager->getUserInfo($infoName, $typeName)){
        $error ='nameAlreadyUsed';
    }
    //Validation Email: vérification des caracteres utilisés et que l'email n'existe pas deja dans la bdd
    $infoEmail = $data['email'];
    $typeEmail = 'email';
    if(!filter_var($data['email'], FILTER_VALIDATE_EMAIL)){
      $error ='mailInvalid';
    }elseif($_userManager->getUserInfo($infoEmail, $typeEmail)){
      $error ='mailAlreadyUsed';
    }
    //Mot de passe et mot de passe de confirmation
    $passValidation = "/^(.{0,7}|[^a-z]*|[^\d]*)$/i";
    if(preg_match($passValidation, $data['password'])){
      $error = 'passWithoutNumber';
    } 
    if(strlen($data['password']) <= 7){
      $error = 'passTooShort';
    }
    if ($data['password'] != $data['confirmedPassword']) {
      $error = 'passUnmatched';
    }
    //Si aucune erreur on créer le compte sinon on reste sur la page
    if (empty($error)){
      $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT, ['cost' => 12]);
      $users = $_userManager->createUser($data);
      exit;
      } else{   
          $data['error'] = $error;
          $responseError = json_encode($data['error']);
          ob_clean();
          exit($responseError);
      }
      // POST IT creer une vue/session USER
    } else {
    return false;
    }
} 
  