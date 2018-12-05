<?php
	
	//删除数据
	
	//连接数据库
	
	include 'connect.php';
	$newprice=isset($_GET['newprice']) ? $_GET['newprice'] : '';
	//接收参数
	if($newprice){
        //写删除语句
        $sql="DELETE FROM cart WHERE newprice=$newprice";
    }else{
        $sql="DELETE FROM cart";
    }
	//执行查询语句
	$res=$conn->query($sql);
	if($res){
		echo '删除成功';
	}
	
	//关闭连接数据库
    $conn->close();//关闭数据库的链接
?>