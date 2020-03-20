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

if(isset($_POST['action']) && $_POST['action']=='addDoc'){
   //echo 'fichier nom :' .$_FILES['file']['name'];
   /* $filename = $_FILES['file']['name'];
    var_dump($filename);
    $filesize = $_FILES['file']['size'];
    var_dump($filesize);
  
    $location = "upload/".$filename;

    $return_arr = array();

    if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
        $src = "default.png";

        // checking file is image or not
        if(is_array(getimagesize($location))){
            $src = $location;
        }
        $return_arr = array("name" => $filename,"size" => $filesize, "src"=> $src);
    }
    
    $responseDocFile =  json_encode($return_arr);
    var_dump($responseDocFile);
    //exit($responseDocFile);
    /*$docFileOutput=''; 
    foreach ($docFiles as $docFile){
        $docFileOutput.='<tr class="docFileRow' .$docFile->id(). '">';
        $docFileOutput.='<td>' .$docFile->id(). '</td>';
        $docFileOutput.='<td>' .$docFile->name(). '</td>';
        $docFileOutput.='<td>' .$docFile->name(). '</td>';
        $docFileOutput.='<td>' .$docFile->date(). '</td>';
        $docFileOutput.='<td class="docFileActionTd">';       
        $docFileOutput.='<button class="updateDocFile" value="' .$docFile->id(). '" data-toggle="modal" data-target ="#updateDocFileModal" ></button>';
        $docFileOutput.='<button class="deleteDocFile" value="' .$docFile->id(). '" data-toggle="modal" data-target ="#deleteDocFileModal" ><i class="fa fa-trash" aria-hidden="true"></i></button>';
        $docFileOutput.='</td>';
        $docFileOutput.='</tr>';
    }
    $data['docFileOutput'] = $docFileOutput;
    $data['pageDocFile'] = $pageDocFile;
    $data['docFilePages'] = $docFilePages;
    $responsedocFile = json_encode($data);
    exit($responsedocFile);*/
    
}

if(isset($_POST['action']) && $_POST['action']=='updateDocFile'){
    $_fileManager->update($_POST['docFile2update']); 
}
if(isset($_POST['action']) && $_POST['action']=='deleteDocFile'){
    $_fileManager->delete($_POST['docFile2delete']);
}
?>
