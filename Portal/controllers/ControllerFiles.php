<?php
namespace CritsPortal\controllers;
require_once($_SERVER['DOCUMENT_ROOT']. '/P5Crits/vendor/autoload.php');
require_once('portal/controllers/ajaxAdminPhp/ajaxAdminDocFile.php');
require_once('portal/controllers/ajaxAdminPhp/ajaxAdminImgFile.php');

class ControllerFiles
{
  private $_fileManager;
  

  public function __construct()
  {
    $this->addFile();
  }

  private function addFile(){
    if(isset($_POST['action']) && $_POST['action']=='addDoc'){
    $test = $_FILES['file']['name'][0];
    var_dump($test);
    }
  }
}