<?php
	/*
	 	接收前端传过来数据并渲染到页面
	 */
	
	//连接数据库
	include 'connect.php';
    
	//sql
	$sql="SELECT * FROM goods LIMIT 0,5";
    $res=$conn->query($sql);
    
    /* 执行 */
    $row=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
	
	
    //关闭数据库
    $res->close();
	$conn->close();
?>