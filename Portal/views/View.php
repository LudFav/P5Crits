<?php
namespace CritsPortal\views;
class View
{
  //fichier a envoyer a la vue
  private $_file;

  function __construct($action){
    $this->_file = $_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal//views/view'.$action.'.php';
  }

  //fonction qui va générer et afficher la vue selon si une session est ouverte ou pas
  public function generate($title, $data){
    //définir le contenu à envoyer
    $content = $this->generateFile($this->_file, $data);
    
    if(isset($_SESSION['role']) && !empty($_SESSION['role'])){
    
      $role = $_SESSION['role'];
      if($role=='admin'){
        $template = $_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal/views/templateAdmin.php';
        
      } 
      if($role=='user'){ 
        $template = $_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal/views/templateUser.php';
       
      }
      
    } elseif(empty($_SESSION['role'])) {
      $template = $_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal/views/template.php';
      
    }
    $view = $this->generateFile($template, array('title'=>$title, 'content' => $content));
    echo $view;
  }

  private function generateFile($file, $data){
    if (file_exists($file)) {
     
      extract($data);

      //commencer la temporisation
      ob_start();

      require $file;

      //arreter la temporisation
     return ob_get_clean();
    }
    else {
      throw new \Exception("Fichier ".$file." introuvable", 1);
    }
  }
}
 ?>
