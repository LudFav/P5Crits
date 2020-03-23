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
    
    
   if(isset($_FILES['file']['name'][0])){
      $countfiles = count($_FILES['file']['name']);
      $return_arr = array();
      $date = new \DateTime();
      for($i=0;$i<$countfiles;$i++){
        $timeStp = $date->getTimestamp();
        $file = $_FILES["file"]["name"][$i];
        $array = explode('.', $file);
        $fileTitle = $array[0];
        $fileExtension = $array[1];
        $filename = $fileTitle."_".$timeStp.".".$fileExtension;
        $filesize = $_FILES['file']['size'][$i];
        $docpath = "documents/".$_SESSION['admin']['id'];
        if( is_dir($docpath) === false ){
          mkdir($docpath);
        }
        $filepath = $docpath .'/ '. $filename; 
        $return_arr[] = array("name" => $filename,"size" => $filesize, "src"=> $filepath);
        $finfo = finfo_open( FILEINFO_MIME_TYPE );
        $tmpname =  $_FILES['file']['tmp_name'][$i];
        $mtype = finfo_file( $finfo, $tmpname );
	      finfo_close( $finfo );
        if ( $mtype == "application/pdf") {
          move_uploaded_file($_FILES['file']['tmp_name'][$i], $filepath);
          $output.= '<div id="thumbnail_'.$filename.'" class="thumbnail">';
          $output.= '<img src="documents/default.png" width="100%" height="78%">';
          $output.= '<span class="size">'.$filename.'<span></br>';
          $output.= '</div>';
          
        } else if($mtype == "image/png"  ||
	           $mtype ==  "image/jpeg"  || 
	           $mtype == "image/gif" || 
	           $mtype ==  "image/psd"  || 
             $mtype == "image/bmp" 
        ) {
           move_uploaded_file($_FILES['file']['tmp_name'][$i], $filepath);
           $output.= '<div id="thumbnail_'.$filename.'" class="thumbnail">';
           $output.= '<img src="'.$filepath.'" width="100%" height="78%">';
           $output.= '<span class="size">'.$filename.'<span></br>';
           $output.= '</div>';
          } else if ( $filesize  > 800000){
              $output.= '<div id="thumbnail_'.$filename.'" class="thumbnail">';
              $output.= '<img src="documents/error.png" width="100%" height="78%">';
              $output.= '<span class="size" style="color:red;">'.$filename.' Depasse la limite de 5Mo<span></br>';
              $output.= '</div>';
              } else {
              $output.= '<div id="thumbnail_'.$filename.'" class="thumbnail">';
              $output.= '<img src="documents/error.png" width="100%" height="78%">';
              $output.= '<span class="size" style="color:red;">'.$filename.' Mauvais type de fichier<span></br>';
              $output.= '</div>';
              }
      }
      $data['output'] = $output;
      $data['return_arr'] = $return_arr;
      $responseDocFile = json_encode($data);
      exit($responseDocFile);
    }
  }


  
}

