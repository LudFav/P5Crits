<?php 
namespace CritsPortal\models;

require ($_SERVER['DOCUMENT_ROOT']. '/P5Crits/vendor/autoload.php');

class FileManager extends Model implements crud {

    public function create($table, $data){
      $this->getBdd();
      ksort($data);
      $keyFields = implode('`, `', array_keys($data));
      $valueFields = ':' . implode(', :', array_keys($data));
      $req = self::$_bdd->prepare("INSERT INTO $table (`$keyFields`) VALUES ($valueFields)"); 
      foreach ($data as $key => $value){
        $req->bindValue(":$key", $value);
      }
      $req->execute();
      $req->closeCursor();
    }

    public function readAll($table, $obj, $page, $entiteParPage, $userId=null){
      $files = [];
      $this->getBdd();
      $limit = (htmlspecialchars($page) - 1) * $entiteParPage. ', ' .$entiteParPage;
      $req = self::$_bdd->prepare("SELECT * FROM $table WHERE userId=? ORDER BY id DESC LIMIT $limit");
      $req->execute(array($userId));
      while ($data = $req->fetch(\PDO::FETCH_ASSOC)) {
        $file = new File($data);
        $files[] = $file;
      }
      $req->closeCursor();
      return $files;
    }

    function pagemax($table, $nbreEntitesParPage, $UserId){
      $this->getBdd();
      $req = self::$_bdd->prepare("SELECT COUNT(*) from $table WHERE UserId=?");
      $req->execute(array($UserId));
      $nbrEntites = $req->fetchColumn();  
      $max = ceil($nbrEntites/$nbreEntitesParPage);
      return $max;
      $req->closeCursor(); 
    }

    public function readOne($table, $obj, $id){
      $this->getBdd();
      $file = [];
      $req = self::$_bdd->prepare("SELECT id, name, file_url $table WHERE id = ?");
      $req->execute(array($id));
      while ($data = $req->fetch(\PDO::FETCH_ASSOC)) {
        $file[] = new File($data);
      }
    
      return $file;
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
    
    public function createFile($table, $data){
      return $this->create($table, $data);
    }

    public function getFiles($table, $UserId, $page, $entiteParPage){
      return $this->readAll($table, 'File', $page, $entiteParPage, $UserId);
    }
    
    public function getFile($table, $UserId){
      return $this->readOne($table, 'File', $UserId);
    }
    
    public function getPageMax($table, $entiteParPage, $UserId){
      $nbreEntitesParPage = $entiteParPage;
      return $this->pagemax($table, $nbreEntitesParPage, $UserId);
    }

    public function deleteFile($table, $id){
      return $this->delete($table, "`id` = '{$_POST['deleteFile']}'");
    }

}
