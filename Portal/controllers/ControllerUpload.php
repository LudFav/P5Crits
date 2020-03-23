<?php
namespace CritsPortal\controllers;


require_once($_SERVER['DOCUMENT_ROOT']. '/P5Crits/vendor/autoload.php');
require_once('portal/controllers/ajaxAdminPhp/ajaxAdminDocFile.php');
require_once('portal/controllers/ajaxAdminPhp/ajaxAdminImgFile.php');



class ControllerUpload{

    public function __construct(){
        $this->docFileShow();
  }

  function docFileShow(){
    $output='';
    $messageOutput='';
    $docpath = "documents/".$_SESSION['admin']['id'];
    $tempdocpath = "temp/".$_SESSION['admin']['id'];
    if(isset($_POST['action']) && $_POST['action']=='uploadDocFiles'){
      return "ok";
      var_dump($tempLocation, $location);

      if(rename ( $tempLocation , $location )){
          $src = "default.png";
          if(is_array(getimagesize($location))){
              $src = $location;
              $messageOutput.='<p class="uploadOk">Document(s) envoyé(s)</p>';
          }
          $return_arr[] = array("name" => $filename,"size" => $filesize, "src"=> $src);   
      }
      $data= $messageOutput;
      return $data;
      
    }  else if(isset($_FILES['file']['name'][0])){
      $countfiles = count($_FILES['file']['name']);
      $return_arr = array();
      for($i=0;$i<$countfiles;$i++){
        $filename = $_FILES['file']['name'][$i];
        $filesize = $_FILES['file']['size'][$i];
      
        move_uploaded_file($_FILES['file']['tmp_name'][$i], $tempLocation);
        $output.= '<div id="thumbnail_'.$filename.'" class="thumbnail">';
        $output.= '<img src="'.$tempLocation.'" width="100%" height="78%">';
        $output.= '<span class="size">'.$filename.'<span></br>';
        $output.= '</div>';
      }
      $data['output'] = $output;
      $data['return_arr'] = $return_arr;
      $responseDocFile = json_encode($data);
      exit($responseDocFile);
    }
  }


  
}

