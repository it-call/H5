<?php
	
	include 'connect.php';
	$gid=isset($_GET['gid']) ? $_GET['gid'] : '20';
    // var_dump($gid) ;
        
    //sql
    $sql="SELECT * FROM goods WHERE gid='$gid'";
    
    /* 执行 */
    $res=$conn->query($sql);
    $data=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
	//关闭结果集和数据库
    $res->close();
	$conn->close();
	
?>