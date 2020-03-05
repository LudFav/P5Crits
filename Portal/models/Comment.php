<?php


class Comment
{
    private $_id;
    private $_billetId;
    private $_auteur;
    private $_contenu;
    private $_date;
    private $_signale;
    private $_modere;
 
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
    
    public function setBilletid($billetId){
    $this->_billetId = (int) $billetId;
    }
 
    public function setAuteur($auteur){
        if(is_string($auteur)){
            $this->_auteur= $auteur;
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

    public function setSignale($signale){
        $this->_signale = (int) $signale;
    }

    public function setModere($modere){
        $this->_modere = (int) $modere;
    }
 //getters
    public function id(){
        return $this->_id;
    }
    public function billetId(){
        return $this->_billetId;
    }
    
    public function auteur(){
        return $this->_auteur;
    }
    
    public function contenu(){
        return $this->_contenu;
    }
    
    public function date(){
        return $this->_date;
    }

    public function signale(){
        return $this->_signale;
    }

    public function modere(){
        return $this->_modere;
    }
}