<?php
	
	include 'connect.php';
        
    //sql
    $sql="SELECT * FROM cart";
    
    /* 执行 */
    $res=$conn->query($sql);
    
    $row=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($row,JSON_UNESCAPED_UNICODE);

	//关闭结果集和数据库
    $res->close();
	$conn->close();
	
?>