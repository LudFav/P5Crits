<?php
use CritsPortal\models\BilletManager;


require_once($_SERVER["DOCUMENT_ROOT"]. '/P5Crits/portal/models/BilletManager.php');

$_billetManager;
$_billetManager = new BilletManager;

$page = isset($_POST['page']) && is_numeric($_POST['page'])? $_POST['page'] : 1;
$entiteParPage = 9; 
$billets = $_billetManager->getBillets($page, $entiteParPage);
$pages = $_billetManager->getPageMax($entiteParPage);
if(isset($_POST['action']) && $_POST['action']=='showAccueilBillet'){
  $billetsAccueilOutput = '';
  foreach ($billets as $billet){ 
       $billetsAccueilOutput.= '<article>';
       $billetsAccueilOutput.= '<header>';
       $billetsAccueilOutput.= '<span class="date">' .$billet->date(). '</span>';
       $billetsAccueilOutput.= '<h2><a href="#">' .$billet->titre(). '<br />';
       $billetsAccueilOutput .='<a href="#" class="image fit"><img src="images/pic02.jpg" alt="" /></a>';
       $billetsAccueilOutput.= '<h5 class="title"><a href="post&id=' .$billet->id(). '"><b>' .$billet->titre(). '</b></a></h5>';
       $billetsAccueilOutput.= '<li><a href="#" class="button">Lire Article</a></li>';
       $billetsAccueilOutput.= '</ul>';
       $billetsAccueilOutput.= '</article>';
  }
  $data['billetsAccueilOutput'] = $billetsAccueilOutput;
  $data['page'] = $page;
  $data['maxPages'] = $pages;
  $response = json_encode($data);
  exit($response);
}  



    

