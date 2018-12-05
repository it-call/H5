<?php
	
	include 'connect.php';
        
    $store=isset($_GET['store']) ? $_GET['store'] : '666';
	$newprice=isset($_GET['newprice']) ? $_GET['newprice'] : '888';
    //sql
    $sql="UPDATE cart SET store=$store WHERE newprice=$newprice";
    
    /* 执行 */
    $res=$conn->query($sql);
    

	//关闭数据库
	$conn->close();
	
?>