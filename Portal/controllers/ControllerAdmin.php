<?php
use Crits\ajaxAdminPhp;
use Crits\views\View;

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