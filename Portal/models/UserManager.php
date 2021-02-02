<?php
namespace CritsPortal\models;
require ($_SERVER['DOCUMENT_ROOT']. '/P5Crits/vendor/autoload.php');

class UserManager extends Model implements crud
{
  public function create($table, $data){
    $this->getBdd();
    ksort($data);
    $keyFields = implode('`, `', array_keys($data));
    $valueFields = ':' . implode(', :', array_keys($data));
    $req = self::$_bdd->prepare("INSERT INTO $table (`$keyFields`) VALUES ($valueFields )"); 

    foreach ($data as $key => $value){
      $req->bindValue(":$key", $value);
    }

    $req->execute();
    $req->closeCursor();
  }

  public function readAll($table, $obj, $page, $entiteParPage){
    $this->getBdd();
    $var = [];
    $limit = (htmlspecialchars($page) - 1) * $entiteParPage. ', ' .$entiteParPage;
    $req = self::$_bdd->prepare("SELECT * FROM $table ORDER BY id DESC LIMIT $limit");
    $req->execute();
    while ($data = $req->fetch(\PDO::FETCH_ASSOC)) { 
      $var[] = new $obj($data);
    }
    return $var;
    $req->closeCursor();

  }

  public function readOne($table, $obj, $id){
    $this->getBdd();
    $var = [];
    $req = self::$_bdd->prepare("SELECT id, email, username, password, role FROM $table WHERE id = ?");
    $req->execute(array($id));
    while ($data = $req->fetch(\PDO::FETCH_ASSOC)) {
      $var[] = new $obj($data);
    }
    return $var;
    $req->closeCursor();
  }


  public function readAdmin($table, $obj){
    $this->getBdd();
    $var = [];
    $req = self::$_bdd->prepare("SELECT * FROM $table");
    $req->execute(array());
    while ($data = $req->fetch(\PDO::FETCH_ASSOC)) {
      $var[] = new User($data);
    }
    return $var;
    $req->closeCursor();
  }

  public function update($table, $data, $where){
    $this->getBdd();
    ksort($data);
    $fields = NULL;
    foreach($data as $key=> $value) {
      $fields .= "`$key`=:$key,";
    }
    $fields = rtrim($fields, ',');
    $req = self::$_bdd->prepare("UPDATE $table SET $fields WHERE $where"); 
    
    foreach ($data as $key => $value){
      $req->bindValue(":$key", $value);
    }
    $req->execute();
    $req->closeCursor();
  }

  public function delete($table, $where){
    $this->getBdd();
    $req = self::$_bdd->prepare("DELETE FROM $table WHERE $where");
    $req->execute();
    $req->closeCursor();
  }

  public function readUserEmail($table, $email){
    $this->getBdd();
    $req = self::$_bdd->prepare("SELECT * FROM $table WHERE email = :email");
    $req->bindValue(":email", $email);
    $req->execute();
    if($req->rowCount() > 0){
     return true;
    }
    $req->closeCursor();
  }

  public function getUserEmail($email){
    return $this->readUserEmail('users', $email
    );
  }

  public function sessionInfo(){
    $this->getBdd();
  }

  public function getUser(){
    return $this->readAdmin('users', 'User');
  }

  public function updateUser($data){
    return $this->update('users',array(
      'password'  => $data['password'],
    ), "`id` = 1");
  }

  public function createUser($data){
    return $this->create('users',array(
    'username' => $data['username'],
    'email' => $data['email'],
    'password'  => $data['password'],
    'role'  => 'user'
  ));
  }
}