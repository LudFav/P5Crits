<?php
use CritsPortal\models\BilletManager;


require_once($_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal/models/BilletManager.php');

$_billetManager;
$_billetManager = new BilletManager;
$page = isset($_POST['page']) && is_numeric($_POST['page'])? $_POST['page'] : 1;
$entiteParPage = 6; 
$billets = $_billetManager->getBillets($page, $entiteParPage);
$pages = $_billetManager->getPageMax($entiteParPage);
if(isset($_POST['action']) && $_POST['action']=='showSommaire'){
  $billetsAccueilOutput = '';
  foreach ($billets as $billet){ 
       $date = $billet->date();
       $newDate = date('d/m/Y H:i', strtotime($date));
       $billetsAccueilOutput.= '<article>';
       $billetsAccueilOutput.= '<header>';
       $billetsAccueilOutput.= '<span class="date">' .$newDate. '</span>';
       $billetsAccueilOutput.= '<h2>' .$billet->titre(). '<h2></br>';
       $billetsAccueilOutput.='<a href="post&id=' .$billet->id(). '" class="image fit"><img src="' .$billet->image(). '" alt="" /></a>';
       $billetsAccueilOutput.= '<a href="post&id=' .$billet->id(). '" class="button">Lire Article</a>';
       $billetsAccueilOutput.= '</ul>';
       $billetsAccueilOutput.= '</article>';
  }
  $data['billetsAccueilOutput'] = $billetsAccueilOutput;
  $data['page'] = $page;
  $data['maxPages'] = $pages;
  $response = json_encode($data);
  exit($response);
}  



    

