<?php
	/*
	 	接收前端传过来数据并插入到数据表
	
	 */
	
	//连接数据库
	include 'connect.php';
	
	$name=isset($_POST['name']) ? $_POST['name'] : 'name';
    $psw=isset($_POST['psw']) ? $_POST['psw'] : 'mima';
    $email=isset($_POST['email']) ? $_POST['email'] : 'youxiang';
    // echo $email;
    
	//sql
	$sql="INSERT INTO user(name,password,email) VALUES('$name','$psw','$email')";
	$res=$conn->query($sql);
    // var_dump( $res);
    
	if($res){
		echo 'yes';
	}else{
		echo 'no';
	}
	
    //关闭数据库
	$conn->close();
?>