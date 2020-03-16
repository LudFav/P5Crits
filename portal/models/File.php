<?php
namespace CritsPortal\models;

class File
{
    private $_id;
    private $_name;
    private $_file_url;
    private $_userId;
    private $_date;
   
    public function __construct(array $data){
        $this->hydrate($data);
    }

    public function hydrate(array $data){
        foreach ($data as $key => $value) {
          $method = 'set'.ucfirst($key);
          if (method_exists($this, $method)) {
            $this->$method($value);
          }
        }
    }
//setters 
    public function setId($id){
    $this->_id= (int) $id;
    }
    
    public function setName($name){
        if(is_string($name)){
            $this->_name= $name;
        }
    }
 
    public function setFile_url($file_url){
        if(is_string($file_url)){
            $this->_file_url= $file_url;
        }
    }

    public function setUserId($userId){
        if(is_string($userId)){
            $this->_userId = $userId;
        }
    }

    public function setDate($date){
        $this->_date= $date;   
    }
 //getters
    public function id(){
        return $this->_id;
    }
    public function name(){
        return $this->_name;
    }
    
    public function file_url(){
        return $this->_file_url;
    }

    public function userId(){
        return $this->_userId;
    }

    public function date(){
        return $this->_date;
    }
}