<?php

class ControllerAdmin{
   
    private $_view;
    public function __construct(){
      if(isset($_SESSION['admin']) && !empty($_SESSION['admin'])){
        $this->_view = new CritsPortal\views\View('Admin'); 
        $this->_view->generate('Administration', array());  
    } else {
      header('Location:accueil');
    }
  }
}