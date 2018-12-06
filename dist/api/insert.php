<?php
	
	include 'connect.php';
    $urlimg=isset($_GET['urlimg']) ? $_GET['urlimg'] : '53';
    $title=isset($_GET['title']) ? $_GET['title'] : '56';
    $newprice=isset($_GET['newprice']) ? $_GET['newprice'] : '60';
    $store=isset($_GET['store']) ? $_GET['store'] : '80';
    // var_dump($gid) ;
        
    //sql
    $sql="INSERT INTO cart(urlimg,title,newprice,store) VALUES ('$urlimg','$title','$newprice','$store');";
    
    /* 执行 */
    $res=$conn->query($sql);


	//关闭结果集和数据库
    $res->close();
	$conn->close();
	
?>