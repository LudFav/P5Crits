<?php
use CritsPortal\models\BilletManager;
use CritsPortal\models\FileManager;
require_once($_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal/models/BilletManager.php');

$_billetManager;
$_billetManager = new BilletManager; 
$_fileManager;
$_fileManager = new FileManager;
$entiteParPage = 4;
$nbreEntitesParPage = $entiteParPage;

$page = isset($_POST['page'])? $_POST['page'] :1;

$pageDebillets = $_billetManager->getBillets($page, $entiteParPage);
$pages = $_billetManager->getPageMax($nbreEntitesParPage);

//TABLEAU BILLET ET PAGE
if(isset($_POST['action']) && $_POST['action']=='showbillet'){
    $billetsOutput = '';
    foreach ($pageDebillets as $billet){ 
         $billetsOutput.= '<tr class="billetRow' .$billet->id(). '">';
         $billetsOutput.= '<a href="post&id' .$billet->id(). '"><td>' .$billet->id(). '</td></a>';
         $billetsOutput.= '<td>' .$billet->auteur(). '</td>';
         $billetsOutput.= '<td>' .$billet->titre(). '</td>';
         $billetsOutput.= '<td>' .$billet->image(). '</td>';
         $billetsOutput.= '<td>' .$billet->date(). '</td>';
         $billetsOutput.= '<td class="actionTd" value="' .$pages. '">';
         $billetsOutput.= '<button class="admin-btn visualBilBtn"><a href="post&id=' .$billet->id(). '" ><i class="fa fa-eye"></i></a></button>';
         $billetsOutput.= '<button class="admin-btn editBilBtn" ><a href="update&id=' .$billet->id(). '"><i class="fa fa-pencil" aria-hidden="true"></i></a></button>';
         $billetsOutput.= '<button class="admin-btn deleteBilBtn" value="' .$billet->id(). '" data-toggle="modal" data-target ="#deleteBillet" ><i class="fa fa-trash" aria-hidden="true"></i></button>';
         $billetsOutput.= '</td>';
         $billetsOutput.= '</tr>'; 
    }
    $data['billetsOutput'] = $billetsOutput;
    $data['page'] = $page;
    $data['maxPages'] = $pages;
    $response = json_encode($data);
    exit($response);
}

//EFFACER BILLET
if(isset($_POST['action']) && $_POST['action']=='deleteBillet'){
    $deleteBillet = $_billetManager->deleteBillet($_POST['deleteBillet']); 
}

if(isset($_POST['action']) && $_POST['action']=='showImageLib'){
    //$image = isset($_POST['idImage'])? $_POST['idImage'] :1;
    $userId = $_SESSION['admin']['id'];
    $pageImg = isset($_POST['pageImg'])? $_POST['pageImg'] :1;
    $entiteParPage = 5;
    $page = $pageImg;
    $imageBillet =  $_fileManager->getFiles('imgfile', $userId, $page, $entiteParPage);
    $pageMaxImg = $_fileManager->getPageMax('imgfile', $entiteParPage, $userId);
    $imageOutput ='';
    foreach($imageBillet as $image){
    $imageOutput .= '<input type="radio" name="choice' .$image->id(). '" class=" sr-only imgRadioImpt" id="' .$image->type().$image->id(). '" value="' .$image->id(). '">';
    $imageOutput .= '<label class="imgRadioLbl" for="choice' .$image->id(). '" value="' .$image->id(). '" >';
    $imageOutput .= '<img src="' .$image->file_url(). '" alt="' .$image->name(). '" class="thumbnail file' .$image->id(). '">';
    $imageOutput .= '</label>';
    }
    $data['imageOutput']=$imageOutput;
    $data['pageImg']=$pageImg;
    $data['pageMaxImg']=$pageMaxImg;
    $responseImgBillet = json_encode($data);
    exit($responseImgBillet);
}
?>
