<?php
require_once 'index.php';

class ProductDb extends Product{


public function Create(){   
    require_once 'db.php';
    $con = new dbConnect();
    $con->connect();
    $pre = mysqli_prepare($con->con, "INSERT INTO product(sku, name, price, productype, attribute) VALUES (?,?,?,?,?)");
    $pre->bind_param("sssss", $this->sku, $this->name, $this->price, $this->productype, $this->attribute);
    $pre->execute();
    
}

public function getproductsku($sku){
    require_once 'db.php';
    $con = new dbConnect();
    $con->connect();
    $pre = mysqli_prepare($con->con, "SELECT * FROM product WHERE sku = ?");
    $pre->bind_param("s", $sku);
    $pre->execute();
    $result = $pre->get_result();
    if($result->num_rows === 0){
        return true;
    }else{
        return null; 
    }
    }

    public function getallproducts(){
        require_once 'db.php';
        $con = new dbConnect();
        $con->connect();
        $pre = mysqli_prepare($con->con, "SELECT * FROM product");
        $pre->execute();
        $result = $pre->get_result();
        $products = [];
        while($row = $result->fetch_assoc()){
      $products[] = $row;
        }
        return $products;   
    }



}