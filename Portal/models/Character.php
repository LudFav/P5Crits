<?php
namespace CritsPortal\models;


class Character
{
    private $_id;
    private $_user_id;

    private $_character_name;
    private $_character_class1;
    private $_character_class2;
    private $_character_class3;

    private $_race; 
    private $_speed;
    private $_size;
    private $_alignment;

    private $_xp;
    private $_level;
    private $_money;

    private $_base_strenght;
    private $_base_dexterity;
    private $_base_constitution;
    private $_base_intelligence;
    private $_base_wisdom;
    private $_base_charisma;
 
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
    
    public function setUser_id($user_id){
    $this->_user_id = (int) $user_id;
    }

    public function setCharacter_name($chararacter_name){
        if(is_string($character_name)){
            $this->_character_name= $character_name;
        }
    }

    public function setCharacter_class1($character_class1){
        if(is_string($character_class1)){
            $this->_character_class1= $character_class1;
        }
    }

    public function setCharacter_class2($character_class2){
        if(is_string($character_class2)){
            $this->_character_class2= $character_class2;
        }
    }

    public function setCharacter_class3($character_class3){
        if(is_string($character_class3)){
            $this->_character_class3= $character_class3;
        }
    }

    public function setRace($race){
        if(is_string($race)){
            $this->_race= $race;
        }
    }

    public function setSpeed($speed){
        $this->_speed= (int) $speed;
    }

    public function setSize($size){
        if(is_string($size)){
            $this->_size= $size;
        }
    }
 
    public function setAlignment($alignment){
        if(is_string($alignment)){
            $this->_alignment= $alignment;
        }
    }

    public function setXp($xp){
        $this->_xp = (int) $xp;
    }

    public function setLevel($level){
        $this->_level = (int) $level;
    }

    public function setMoney($money){
        $this->_money = (int) $money;
    }

    public function setBase_strenght($base_strenght){
        $this->_base_strenght = (int) $base_strenght;
    }
    public function setBase_dexterity($base_dexterity){
        $this->_base_dexterity= (int) $base_dexterity;
    }
    public function setBase_constitution($base_constitution){
        $this->_base_constitution = (int) $base_constitution;
    }
    public function setBase_intelligence($base_intelligence){
        $this->_base_intelligence = (int) $base_intelligence;
    }
    public function setBase_wisdom($base_wisdom){
        $this->_base_wisdom = (int) $base_wisdom;
    }
    public function setBase_charisma($base_charisma){
        $this->_base_charisma = (int) $base_charisma;
    }



 //getters
    public function id(){
        return $this->_id;
    }
    public function user_id(){
        return $this->_user_id;
    }
    public function character_name(){
        return $this->_character_name;
    }
    
    public function character_class1(){
        return $this->_character_class1;
    }
    public function character_class2(){
        return $this->_character_class2;
    }
    public function character_class3(){
        return $this->_character_class3;
    }
    
    public function race(){
        return $this->_race;
    }
    public function speed(){
        return $this->_speed;
    }
    public function size(){
        return $this->_size;
    }
    public function alignment(){
        return $this->_alignment;
    }

    public function xp(){
        return $this->_xp;
    }
    public function level(){
        return $this->_level;
    }
    public function money(){
        return $this->_money;
    }

    public function base_strength(){
        return $this->_base_strength;
    }
    public function base_dexterity(){
        return $this->_base_dexterity;
    }
    public function base_constitution(){
        return $this->_base_constitution;
    }
    public function base_intelligence(){
        return $this->_base_intelligence;
    }
    public function base_wisdom(){
        return $this->_base_wisdom;
    }
    public function base_charisma(){
        return $this->_base_charisma;
    }

}