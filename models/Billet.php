<?php

/**
 *
 */
class Billet {

  private $_id;
  private $_auteur;
  private $_titre;
  private $_contenu;
  private $_date;

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
  
  public function setAuteur($auteur){
    if(is_string($auteur)){
        $this->_auteur= $auteur;
    }
  }

  public function setTitre($titre){
    if(is_string($titre)){
        $this->_titre= $titre;
    }
  }

  public function setContenu($contenu){
    if(is_string($contenu)){
        $this->_contenu= $contenu;
    }
  }

  public function setDate($date){
    $this->_date= $date;   
  }

  //getters
  public function id(){
    return $this->_id;
  }

  public function auteur(){
    return $this->_auteur;
  }

  public function titre(){
    return $this->_titre;
  }

  public function contenu(){
    return $this->_contenu;
  }

  public function date(){
    return $this->_date;
  }
}












 ?>
