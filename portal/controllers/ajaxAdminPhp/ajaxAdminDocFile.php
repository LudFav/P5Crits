<?php
use CritsPortal\models\FileManager;
require_once($_SERVER["DOCUMENT_ROOT"]. '/P5Crits/portal/models/UserManager.php');


$_FileManager = new FileManager;


$entiteParPage= 5;
$pageDocFile= isset($_POST['pageDocFile'])? $_POST['pageDocFile'] : 1; 
$table = 'docFile';
$userId = $_SESSION['admin']['id'];
$docFiles = $_FileManager->getFiles($table, $userId, $pageDocFile, $entiteParPage);
$docFilePages = $_FileManager->getPageMax($table, $entiteParPage, $userId);


if(isset($_POST['action']) && $_POST['action']=='updateDocFile'){
    $_fileManager->update($_POST['docFile2update']); 
}
if(isset($_POST['action']) && $_POST['action']=='deleteDocFile'){
    $_fileManager->delete($_POST['docFile2delete']);
}
?>
