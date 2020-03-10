<?php
session_start();
class View
{
  //fichier a envoyer a la vue
  private $_file;

  //titre de la page
  private $title;

  function __construct($action){
    $this->_file = 'views/view'.$action.'.php';
  }

  //crée une fonction qui va générer et afficher la vue selon si une session est ouverte ou pas 
  public function generate($title, $data){
    //définir le contenu à envoyer
    $content = $this->generateFile($this->_file, $data);
    if(isset($_SESSION['admin']) && !empty($_SESSION['admin'])){
      $template = 'views/templateAdmin.php';
    } else {
      $template = 'views/template.php';
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
