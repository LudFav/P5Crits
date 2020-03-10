<?php


class User
{
    private $_id;
    private $_username;
    private $_password;
    private $_role;
   
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
    
    public function setUsername($username){
        if(is_string($username)){
            $this->_username= $username;
        }
    }
 
    public function setPassword($password){
        if(is_string($password)){
            $this->_password= $password;
        }
    }

    public function setRole($role){
        if(is_string($role)){
            $this->_role= $role;
        }
    }

 //getters
    public function id(){
        return $this->_id;
    }
    public function username(){
        return $this->_username;
    }
    
    public function password(){
        return $this->_password;
    }

    public function role(){
        return $this->_role;
    }
}