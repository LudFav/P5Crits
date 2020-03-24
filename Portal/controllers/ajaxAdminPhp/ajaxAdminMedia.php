<?php
use CritsPortal\models\FileManager;
require_once($_SERVER["DOCUMENT_ROOT"]. '/P5Crits/portal/models/UserManager.php');


$_FileManager = new FileManager;


$entiteParPage= 5;

//DOCFILE
$pageDocFile = isset($_POST['pageDocFile'])? $_POST['pageDocFile'] : 1; 
$userId = $_SESSION['admin']['id'];
$docFiles = $_FileManager->getFiles('docfile', $userId, $pageDocFile, $entiteParPage);
$docFilePages = $_FileManager->getPageMax('docfile', $entiteParPage, $userId);
if(isset($_POST['action']) && $_POST['action']=='showDocFile'){
    $docFileOutput = '';
    foreach ($docFiles as $docFile){
        $docFileOutput .= '<tr class="docFileRow' .$docFile->id(). '">';
        $docFileOutput .= '<a href="'.$docFile->file_url(). '"><td>' .$docFile->id(). '</td></a>';
        $docFileOutput .= '<td>' .$docFile->name(). '</td>';
        $docFileOutput .= '<button class="deleteDocFile" value="' .$docFile->id(). '" data-toggle="modal" data-target ="#deleteDocFile" ><i class="fa fa-trash" aria-hidden="true"></i></button>';
        $docFileOutput .= '</td>';
        $docFileOutput .= '</tr>'; 
    }
    $data['docFileOutput'] = $docFileOutput;
    $data['docFilePage'] = $pageDocFile;
    $data['docFileMaxPages'] = $docFilePages;
    $responsedoc = json_encode($data);
    exit($responsedoc);
}

if(isset($_POST['action']) && $_POST['action']=='updateDocFile'){
    $_fileManager->update($_POST['docFile2update']); 
}
if(isset($_POST['action']) && $_POST['action']=='deleteDocFile'){
    $_fileManager->delete($_POST['docFile2delete']);
}

//IMGFILE
$pageImgFile = isset($_POST['pageImgFile'])? $_POST['pageImgFile'] : 1; 
$imgFiles = $_FileManager->getFiles('imgfile', $userId, $pageImgFile, $entiteParPage);
$imgFilePages = $_FileManager->getPageMax('imgfile', $entiteParPage, $userId);
if(isset($_POST['action']) && $_POST['action']=='showImgFile'){
    $imgFileOutput = '';
    foreach ($imgFiles as $imgFile){
        $imgFileOutput .= '<tr class="imgFileRow' .$imgFile->id(). '">';
        $imgFileOutput .= '<td><img src="' .$imgFile->file_url(). '" alt="' .$imgFile->name(). '" class="thumbnail file"></td>';
        $imgFileOutput .= '<td>' .$imgFile->name(). '</td>';
        $imgFileOutput .= '<button class="deleteImgFile" value="' .$imgFile->id(). '" data-toggle="modal" data-target ="#deleteImgFile" ><i class="fa fa-trash" aria-hidden="true"></i></button>';
        $imgFileOutput .= '</td>';
        $imgFileOutput .= '</tr>'; 
    }
    $data['imgFileOutput'] = $imgFileOutput;
    $data['imgFilePage'] = $pageImgFile;
    $data['imgFileMaxPages'] = $imgFilePages;
    $responseImg = json_encode($data);
    exit($responseImg);
}

if(isset($_POST['action']) && $_POST['action']=='deleteImgFile'){
    $_fileManager->delete($_POST['ImgFile2delete']);
}
?>