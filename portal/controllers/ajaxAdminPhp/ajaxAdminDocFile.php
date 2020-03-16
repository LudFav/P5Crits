<?php
use CritsPortal\models\FileManager;
require_once($_SERVER["DOCUMENT_ROOT"]. '/P5Crits/portal/models/CommentManager.php');


$_FileManager = new FileManager;


$entiteParPage= 5;
$pageDocFile= isset($_POST['pageDocFile'])? $_POST['pageDocFile'] : 1; 
$table = 'docFile';
$docFiles = $_FileManager->getFiles($table, $userId, $pageDocFile, $entiteParPage);
$docFilePages = $_FileManager->getPageMax($table, $entiteParPage, $userId);

if(isset($_POST['action']) && $_POST['action']=='showDocFiles'){
    $docFileOutput=''; 

    foreach ($docFiles as $docFile){
        $docFileOutput.='<tr class="docFileRow' .$docFile->id(). '">';
        $docFileOutput.='<td>' .$docFile->id(). '</td>';
        $docFileOutput.='<td>' .$docFile->name(). '</td>';
        $docFileOutput.='<td>' .$docFile->name(). '</td>';
        $docFileOutput.='<td>' .$docFile->date(). '</td>';
        $docFileOutput.='<td class="commentActionTd">';       
        $docFileOutput.='<button class="updateDocFile" value="' .$docFile->id(). '" data-toggle="modal" data-target ="#unmodereComModal" ></button>';
        $docFileOutput.='<button class="deleteDocFile" value="' .$docFile->id(). '" data-toggle="modal" data-target ="#deleteModComModal" ><i class="fa fa-trash" aria-hidden="true"></i></button>';
        $docFileOutput.='</td>';
        $docFileOutput.='</tr>';
    }
    $data['docFileOutput'] = $docFileOutput;
    $data['pageDocFile'] = $pageDocFile;
    $data['docFilePages'] = $docFilePages;
    $responsedocFile = json_encode($data);
    exit($responsedocFile);
}

if(isset($_POST['action']) && $_POST['action']=='updateDocFile'){
    $_fileManager->update($_POST['docFile2update']); 
}
if(isset($_POST['action']) && $_POST['action']=='deleteDocFile'){
    $_fileManager->delete($_POST['docFile2delete']);
}
?>
