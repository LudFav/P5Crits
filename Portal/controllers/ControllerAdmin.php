<?php
namespace CritsPortal\controllers;

use CritsPortal\views\View;
require_once($_SERVER['DOCUMENT_ROOT']. '/P5Crits/vendor/autoload.php');

require_once('portal/controllers/ajaxAdminPhp/ajaxAdminBillet.php');
require_once('portal/controllers/ajaxAdminPhp/ajaxAdminComSign.php');
require_once('portal/controllers/ajaxAdminPhp/ajaxAdminComMod.php');
require_once('portal/controllers/ajaxAdminPhp/ajaxAdminDocFile.php');
require_once('portal/controllers/ajaxAdminPhp/ajaxAdminImgFile.php');


class ControllerAdmin{
    private $_view;
    public function __construct(){
  
      if(isset($_SESSION['admin']) && !empty($_SESSION['admin'])){

        $this->_view = new View('Admin'); 
        $this->_view->generate('Administration', array()); 
    } else {
      header('Location:accueil');
    }
  }
}