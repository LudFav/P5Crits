<?php

require_once 'views/View.php';

class ControllerAddbillet
{
  private $_billetManager;
  private $_view;

  public function __construct()
  {
    $this->addBillet();
  }

  private function addBillet(){
    
    if(isset($_POST['add'])){
      if(!empty($_POST['auteur']) && !empty($_POST['titre']) && !empty($_POST['contenu']) ){
        $data = array(
        'auteur' => htmlspecialchars($_POST['auteur']),
        'titre' => htmlspecialchars($_POST['titre']),
        'contenu' =>  $_POST['contenu']
        );
        $this->_billetManager = new BilletManager();
        $billets = $this->_billetManager->createBillet($data);
        header('Location:admin');
      } else {
        return false;
      }
    } 

    if(isset($_SESSION['admin']) && !empty($_SESSION['admin'])){
      $this->_view = new View('Addbillet');
      $this->_view->generate('Écriture',array());
    }else {
      header('Location:accueil');
    }
  }
}
