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
    if(isset($_POST['action']) && $_POST['action']=='inputImage'){
      $this->_fileManager = new \CritsPortal\models\FileManager();
      $idImage = $_POST['idImage'];
      $image = $this->_fileManager->getFile('imgfile', $idImage);
      $imgInputOutput='';
      foreach($image as $img){
        $imgInputOutput.='<label for="image liée" class="labelBillet">Image liée</label>';
        $imgInputOutput.='<input type="hidden" type="text" name="image" class="form-control" id="imgB" value="' .$img->file_url(). '">';
        $imgInputOutput.='<div class="thumbnail">';
        $imgInputOutput.='<img src="' .$img->file_url(). '" >';
        $imgInputOutput.='</div>';
        $data = $imgInputOutput;
        exit($data);
      }
    }
    if(isset($_POST['add'])){
      $imageDefault = 'assets/images/Crits.svg';
        $imagepost = isset($_POST['image'])? $_POST['image'] : $imageDefault;
      if(!empty($_POST['auteur']) && !empty($_POST['titre']) && !empty($_POST['contenu'])){
        $data = array(
        'auteur' => htmlspecialchars($_POST['auteur']),
        'titre' => htmlspecialchars($_POST['titre']),
        'image' => $imagepost,
        'contenu' =>  $_POST['contenu']
        );
        $this->_billetManager = new \CritsPortal\models\BilletManager();
        $billets = $this->_billetManager->createBillet($data);
        header('Location:admin');
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
