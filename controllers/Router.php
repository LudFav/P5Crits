<?php
// Notre routeur va gerer les requetes de l'URL, selon l'url il chargera le bon controleur
require_once 'views/View.php';

class Router {
  private $ctrl;
  private $view;

  public function routeReq(){

    try {

      //chargement automatique des classes du dossier models
      spl_autoload_register(function($class){
        require_once('../P4Blog/models/'.$class.'.php');
      });

      //on crée une variable $url contenant une chaine de caractere vide
      $url = '';

      //on va determiner le controleur en fonction de la valeur de cette variable
      if (isset($_GET['url'])) {
        /*on décompose l'url et on lui applique un filtre afin de supprimer tout les caracteres illegaux d'url d'une chaine,
          exemple si l'on rentre 'P4Blog/accueil' comme adresse
          (grace a l'htaccess nous n'avons pas besoin de rentrer l'adresse complete P4Blog/index.php?url=accueil)*/

        $url = explode('/', filter_var($_GET['url'], FILTER_SANITIZE_URL)); // $url[0] = accueil 

        //on recupere le premier parametre de url, on le met tout en minuscule, on met sa premiere lettre en majuscule
        $controller = ucfirst(strtolower($url[0])); // $controller = Accueil

        $controllerClass = "Controller".$controller; // ControllerClass = ControllerAccueil

        //on retrouve le chemin du controleur voulu
        $controllerFile = "controllers/".$controllerClass.".php"; // controllerFile = "controllers/ControllerAccueil.php"

        //on verifit si le fichier du controleur existe
        if (file_exists($controllerFile)) {
          //on lance la classe en question avec tous les parametres url
          require_once($controllerFile);
          $this->ctrl = new $controllerClass($url);
        }
        else {
          throw new \Exception("Page introuvable", 1);
        }
      }
       // si le routeur ne reconnait pas le parametre de la variable $url, il redirigera la page vers la page d'accueil
      else {
        require_once('controllers/ControllerAccueil.php');
        $this->ctrl = new ControllerAccueil($url);
      }

    } catch (\Exception $e) {
      $errorMsg = $e->getMessage();
      $this->_view = new View('Error');
      $this->_view->generate('Erreur', array('errorMsg' => $errorMsg));
    }
  }
}
?>
