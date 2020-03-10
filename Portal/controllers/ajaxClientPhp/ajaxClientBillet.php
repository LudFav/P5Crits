<?php
spl_autoload_register(function($class){
  require_once($_SERVER["DOCUMENT_ROOT"]. '/P4Blog/models/'.$class.'.php');
}); 

$_billetManager;
$_billetManager = new BilletManager();

$page = isset($_POST['page']) && is_numeric($_POST['page'])? $_POST['page'] : 1;
$entiteParPage = 9; 
$billets = $_billetManager->getBillets($page, $entiteParPage);
$pages = $_billetManager->getPageMax($entiteParPage);
if(isset($_POST['action']) && $_POST['action']=='showAccueilBillet'){
  $billetsAccueilOutput = '';
  foreach ($billets as $billet){ 
       $billetsAccueilOutput.= '<div class="col-lg-4 col-md-6">';
       $billetsAccueilOutput.= '<div class="card h-100">';
       $billetsAccueilOutput.= '<div class="single-post post-style-1">';
       $billetsAccueilOutput.= '<div class="blog-info">';
       $billetsAccueilOutput.= '<h5 class="title"><a href="post&id=' .$billet->id(). '"><b>' .$billet->titre(). '</b></a></h5>';
       $billetsAccueilOutput.= '</div><!-- blog-info -->';
       $billetsAccueilOutput.= '</div><!-- single-post -->';
       $billetsAccueilOutput.= '</div><!-- card -->';
       $billetsAccueilOutput.= '</div><!-- col-lg-4 col-md-6 -->';
  }
  $data['billetsAccueilOutput'] = $billetsAccueilOutput;
  $data['page'] = $page;
  $data['maxPages'] = $pages;
  $response = json_encode($data);
  exit($response);
}  
