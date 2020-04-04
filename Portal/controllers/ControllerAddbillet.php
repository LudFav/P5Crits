<?php
namespace CritsPortal\controllers;

require_once($_SERVER['DOCUMENT_ROOT']. '/P5Crits/vendor/autoload.php');

class ControllerAddbillet
{
  private $_billetManager;
  private $_fileManager;
  private $_view;

  public function __construct()
  {
    $this->addBillet();
  }

  private function addBillet(){
 
    if(isset($_POST['add'])){
      if(!empty($_POST['auteur']) && !empty($_POST['titre']) && !empty($_POST['contenu']) && !empty($_POST['idImage']) ){
        $this->_fileManager = new \CritsPortal\models\FileManager();
        $idImage = $_POST['idImage'];
        $image = $this->_fileManager->getFile('imgfile', $idImage);
        var_dump($idImage);
        var_dump($image[0]);
        if($idImage == NULL){
          $imageUrl = 'assets/images/Critstest.png';
        } else {
          $imageUrl = $image['file_url'];
        }
       
        $data = array(
        'auteur' => htmlspecialchars($_POST['auteur']),
        'titre' => htmlspecialchars($_POST['titre']),
        'image' => $imageUrl,
        'contenu' =>  $_POST['contenu']
        );
        $this->_billetManager = new \CritsPortal\models\BilletManager();
        $billets = $this->_billetManager->createBillet($data);
        //header('Location:admin');
      } else {
        return false;
      }
    } 

    if(isset($_SESSION['admin']) && !empty($_SESSION['admin'])){
      $this->_view = new \CritsPortal\views\View('Addbillet');
      $this->_view->generate('Écriture',array());
    }else {
      header('Location:accueil');
    }
  }
}
