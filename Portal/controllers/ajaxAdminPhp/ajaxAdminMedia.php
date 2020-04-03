<?php
use CritsPortal\models\FileManager;
require_once($_SERVER["DOCUMENT_ROOT"]. '/P5Crits/Portal/models/UserManager.php');


$_FileManager = new FileManager;


$entiteParPage= 5;

//DOCFILE
$pageDocFile = isset($_POST['pageDocFile'])? $_POST['pageDocFile'] : 1; 
$pageImgFile = isset($_POST['pageImgFile'])? $_POST['pageImgFile'] : 1;
$userId = $_SESSION['admin']['id'];
$docFiles = $_FileManager->getFiles('docfile', $userId, $pageDocFile, $entiteParPage);
$docFilePages = $_FileManager->getPageMax('docfile', $entiteParPage, $userId);
if(isset($_POST['action']) && $_POST['action']=='showDocFile'){
    $docFileOutput = '';
    foreach ($docFiles as $docFile){
        $docFileOutput .= '<tr class="docFileRow' .$docFile->id(). '">';
        $docFileOutput .= '<td class="docname' .$docFile->id(). '" value="' .$docFile->name(). '">' .$docFile->name(). '</td>';
        $docFileOutput .= '<td class="docFileAction"> ';
        $docFileOutput .= '<button class="admin-btn visualDocBtn"><a class ="doc' .$docFile->id(). '" href="' .$docFile->file_url(). '" ><i class="fa fa-eye"></i></a></button>';
        $docFileOutput .= '<button class="admin-btn deleteDocFile" value="' .$docFile->id(). '" data-toggle="modal" data-target ="#deleteDocFileModal" ><i class="fa fa-trash" aria-hidden="true"></i></button>';
        $docFileOutput .= '</td>';
        $docFileOutput .= '</tr>'; 
    }
    $data['docFileOutput'] = $docFileOutput;
    $data['docFilePage'] = $pageDocFile;
    $data['docFileMaxPages'] = $docFilePages;
    $responsedoc = json_encode($data);
    exit($responsedoc);
}



//IMGFILE
$pageImgFile = isset($_POST['pageImgFile'])? $_POST['pageImgFile'] : 1; 
$imgFiles = $_FileManager->getFiles('imgfile', $userId, $pageImgFile, $entiteParPage);
$imgFilePages = $_FileManager->getPageMax('imgfile', $entiteParPage, $userId);
if(isset($_POST['action']) && $_POST['action']=='showImgFile'){
    $imgFileOutput = '';
    foreach ($imgFiles as $imgFile){
        $imgFileOutput .= '<tr class="imgFileRow' .$imgFile->id(). '">';
        $imgFileOutput .= '<td><img src="' .$imgFile->file_url(). '" alt="' .$imgFile->name(). '" class="thumbnail file' .$imgFile->id(). '"></td>';
        $imgFileOutput .= '<td>' .$imgFile->name(). '</td>';
        $imgFileOutput .= '<td class="imgFileAction">';
        $imgFileOutput.= '<button class="admin-btn visualImgBtn"><a href="' .$imgFile->file_url(). '" ><i class="fa fa-eye"></i></a></button>';
        $imgFileOutput .= '<button class="admin-btn deleteImgFile" value="' .$imgFile->id(). '" data-toggle="modal" data-target ="#deleteImgFileModal" ><i class="fa fa-trash" aria-hidden="true"></i></button>';
        $imgFileOutput .= '</td>';
        $imgFileOutput .= '</tr>'; 
    }
    $data['imgFileOutput'] = $imgFileOutput;
    $data['imgFilePage'] = $pageImgFile;
    $data['imgFileMaxPages'] = $imgFilePages;
    $responseImg = json_encode($data);
    exit($responseImg);
}

if(isset($_POST['action']) && $_POST['action']=='deleteThisDoc'){
    $id =  $_POST['deleteDoc'];
    $userFolder = $_SESSION['admin']['id'];
    $docToDel =  $_POST['deleteDocUrl'];
    $filePathToDel = $_SERVER['DOCUMENT_ROOT']. '/P5Crits/uploads/' .$userFolder. '/' .$docToDel;
    unlink($filePathToDel);
    $_FileManager->deleteFile('docfile', $id);   
}

if(isset($_POST['action']) && $_POST['action']=='deleteThisImg'){
    $id =  $_POST['deleteImg'];
    $userFolder = $_SESSION['admin']['id'];
    $imgToDel =  $_POST['deleteImgUrl'];
    $imgFilePathToDel = $_SERVER['DOCUMENT_ROOT']. '/P5Crits/uploads/' .$userFolder. '/' .$imgToDel;
    unlink($imgFilePathToDel);
    $_FileManager->deleteFile('imgfile', $id); 
}
?>
