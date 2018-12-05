<?php
	
	//接收前端传过来的用户名及密码，并验证
	
	include 'connect.php';
	
    $name=isset($_GET['username']) ? $_GET['username'] : 'name';
    $psw=isset($_GET['psw']) ? $_GET['psw'] : 'mima';
    	// var_dump($name) ;

    $sql="select * from user where name='$name'and password='$psw'";
	$res=$conn->query($sql);	
    	// var_dump($res);
	
	if($res->num_rows>0){//超过0，存在
		echo 0;
	}else{
		echo 1;
	}
	
	//关闭结果集和数据库
	
	$res->close();
	$conn->close();
	
?>