<?php
namespace CritsPortal\controllers;
require_once($_SERVER['DOCUMENT_ROOT']. '/P5Crits/vendor/autoload.php');

class ControllerUpdate {
  private $_billetManager;
  private $_fileManager;
  private $_view;

  public function __construct(){
    require_once('Portal/controllers/Router.php');
    if (isset($url) && count($url) < 1) {
        throw new \Exception("Page Introuvable");
    } else {
    $this->updtBillet();
    }
  }

  private function updtBillet(){
    if(isset($_POST['action']) && $_POST['action']=='editImage'){
      $this->_fileManager = new \CritsPortal\models\FileManager();
      $idImage = $_POST['idImage'];
      $image = $this->_fileManager->getFile('imgfile', $idImage);
      $imgEditOutput='';
      foreach($image as $img){
        
        $imgEditOutput='<div class="imgInput edit"';
        $imgEditOutput.='<label for="image liée" class="labelBillet">Image liée</label>';
        $imgEditOutput.='<input type="hidden" type="text" name="image" class="form-control" id="imgB" value="' .$img->file_url(). '">';
        $imgEditOutput.='<div class="thumbnail">';
        $imgEditOutput.='<img src="' .$img->file_url(). '" >';
        $imgEditOutput.='</div>';
        $imgEditOutput.='</div>';
        $data = $imgEditOutput;
        exit($data);
      }
    }
    if (isset($_GET['id'])) {
      $this->_billetManager = new \CritsPortal\models\BilletManager;
      $billetToUpdate = $this->_billetManager->getBillet($_GET['id']);
      
      if(isset($_POST['updateBillet'])){
        if(!empty($_POST['contenu']) && !empty($_POST['titre'])){
          $imageDefault = 'assets/images/Crits.svg';
          $imagepost = isset($_POST['image'])? $_POST['image'] : $imageDefault;
          $updatedContent = $_POST['contenu'];
          $data = array(
            'titre' => htmlspecialchars($_POST['titre']),
            'image'=> $imagepost,
            'contenu' =>  $updatedContent
            );
            $updateBillet = $this->_billetManager->updateBillet($data, $_GET['id']);
            header('Location:admin');
        } else{
          return false;
        } 
      }

      if(isset($_SESSION['admin']) && !empty($_SESSION['admin'])){
        $this->_view = new \CritsPortal\views\View('Update'); 
        $this->_view->generate('Édition', array('billet' => $billetToUpdate));  
      } else {
      header('Location:accueil');
      }  
    }
  }
}
