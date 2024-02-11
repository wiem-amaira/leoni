<?php
    class Product{

        // conn
        private $conn;

        // table
        private $dbTable = "product";

        // col
        public $id;
        public $label;
        public $prix;
        public $image;
        public $status;
      
        // db conn
        public function __construct($db){
            $this->conn = $db;
        }

        // GET Products
        public function getProducts(){
            $sqlQuery = "SELECT *
               FROM " . $this->dbTable . "";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        // CREATE Product
        public function createProduct(){
            $sqlQuery = "INSERT INTO
                        ". $this->dbTable ."
                    SET
                    label = :label, 
                    prix = :prix, 
                    status = 'DISPONIBLE'";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->label=htmlspecialchars(strip_tags($this->label));
            $this->prix=htmlspecialchars(strip_tags($this->prix));
            $this->status=htmlspecialchars(strip_tags($this->status));
                   
            // bind data
            $stmt->bindParam(":label", $this->label);
            $stmt->bindParam(":prix", $this->prix);
            $stmt->bindParam(":status", $this->status);
           
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }     

        // UPDATE Product
        public function updateProduct(){
            $sqlQuery = "UPDATE
                        ". $this->dbTable ."
                    SET
                    label = :label, 
                    prix = :prix, 
                    status = :status
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->label=htmlspecialchars(strip_tags($this->label));
            $this->prix=htmlspecialchars(strip_tags($this->prix));
            $this->status=htmlspecialchars(strip_tags($this->status));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":label", $this->label);
            $stmt->bindParam(":prix", $this->prix);
            $stmt->bindParam(":status", $this->status);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // DELETE Product
        function deleteProduct(){
            $sqlQuery = "DELETE FROM " . $this->dbTable . " WHERE id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(1, $this->id);
        
            if($stmt->execute()){
                return true;
            }
            return false;
        }

    }
?>