<?php
namespace CritsPortal\controllers;


require_once($_SERVER['DOCUMENT_ROOT']. '/P5Crits/vendor/autoload.php');
require_once('Portal/controllers/ajaxAdminPhp/ajaxAdminMedia.php');




class ControllerUpload{

  private $_fileManager;


  public function __construct(){
        $this->modalFileShow();
       
  }

  function modalFileShow(){
  $output=''; 
  $this->_fileManager = new \CritsPortal\models\fileManager; 
   if(isset($_FILES['file']['name'][0])){
      $userId = $_SESSION['admin']['id'];
      $tempDocPath = "uploads/".$userId;
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
        if( is_dir($tempDocPath) === false ){
          mkdir($tempDocPath);
        }
        $filepath = $tempDocPath .'/'. $filename; 
        $return_arr[] = array("name" => $filename,"size" => $filesize, "src"=> $filepath);
        $finfo = finfo_open( FILEINFO_MIME_TYPE );
        $tmpname =  $_FILES['file']['tmp_name'][$i];
        $mtype = finfo_file( $finfo, $tmpname );
        $typeOfFile = $mtype == "application/pdf"? 'document':'image';
        finfo_close( $finfo );
        $create = array(
          'userId'=>$userId,
          'name'=>$filename,
          'file_url'=>$filepath,
          'date' => (new \DateTime())->format('Y-m-d H:i'),
          'type' => $typeOfFile
        );

        if($mtype == "application/pdf" || $mtype == "image/png"  || $mtype ==  "image/jpg" || $mtype ==  "image/jpeg" || $mtype == "image/gif" || $mtype == "image/bmp") {
          if ( $filesize  > 5000000){
              $output.= '<div id="thumbnail_'.$fileTitle.'" class="thumbnail file">';
              $output.= '<img src="uploads/error.png">';
              $output.= '<p class="size" style="color:red;">'.$filename.' Depasse la limite de 5Mo<p></br>';
              $output.= '</div>';
              } else if( $mtype == "application/pdf") {    
                  $this->_fileManager->createFile('docfile', $create, $userId);
                  move_uploaded_file($_FILES['file']['tmp_name'][$i], $filepath);
                  $output.= '<div id="thumbnail_'.$fileTitle.'" class="thumbnail file" data-type="document">';
                  $output.= '<img src="uploads/default.png">';
                  $output.= '<p class="size">'.$filename.'<p></br>';
                  $output.= '</div>';
              } else {
                  $this->_fileManager->createFile('imgfile', $create, $userId);
                  move_uploaded_file($_FILES['file']['tmp_name'][$i], $filepath);
                  $output.= '<div id="thumbnail_'.$fileTitle.'" class="thumbnail file" data-type="image">';
                  $output.= '<img src="'.$filepath.'">';
                  $output.= '<p class="size">'.$filename.'<p></br>';
                  $output.= '</div>';
              }
          } else {
              $output.= '<div id="thumbnail_'.$fileTitle.'" class="thumbnail file">';
              $output.= '<img src="uploads/error.png">';
              $output.= '<p class="size" style="color:red;">'.$filename.' Mauvais type de fichier<p></br>';
              $output.= '</div>';
          }

         
      }
      $data['output'] = $output;
      $data['return_arr'] = $return_arr;
      $responseDocFile=json_encode($data);
      echo $responseDocFile;
    }
  }
}

