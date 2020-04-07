<?php
namespace CritsPortal\controllers;

use CritsPortal\views\View;
require_once($_SERVER['DOCUMENT_ROOT']. '/P5Crits/vendor/autoload.php');

require_once('Portal/controllers/ajaxAdminPhp/ajaxAdminBillet.php');
require_once('Portal/controllers/ajaxAdminPhp/ajaxAdminComSign.php');
require_once('Portal/controllers/ajaxAdminPhp/ajaxAdminComMod.php');
require_once('Portal/controllers/ajaxAdminPhp/ajaxAdminMedia.php');




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