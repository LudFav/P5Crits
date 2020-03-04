<?php
require_once 'controllers/ajaxAdminPhp/ajaxAdminBillet.php';
require_once 'controllers/ajaxAdminPhp/ajaxAdminComSign.php';
require_once 'controllers/ajaxAdminPhp/ajaxAdminComMod.php';

require_once 'views/View.php';

class ControllerAdmin{
    private $_billetManager;
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