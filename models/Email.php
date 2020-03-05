<?php

/**
 *
 */
class Billet {

  private $_id;
  private $_email;
  
  public function __construct(array $data){
    $this->hydrate($data);
  }

  //hydratation
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
    $id = (int) $id;
    if ($id > 0) {
      $this->_id = $id;
    }
  }
  
  public function setEmail($email){
    if(is_string($email)){
        $this->_email= $email;
    }
  }
}