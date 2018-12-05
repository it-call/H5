<?php
	
	include 'connect.php';
	$page=isset($_GET['page']) ? $_GET['page'] : '1';
    $qty=isset($_GET['qty']) ? $_GET['qty'] : '5';
    $rank=isset($_GET['rank']) ? $_GET['rank'] : '8';
        // var_dump($name) ;
        
    $index=($page-1)*$qty;
    //sql
    $sql="SELECT * FROM goods LIMIT $index,$qty";
    if($rank==1){
        $sql="SELECT * FROM goods ORDER BY sales DESC LIMIT $index,$qty";
    }
    if($rank==2){
        $sql="SELECT * FROM goods ORDER BY store LIMIT $index,$qty";
    }
    if($rank==3){
        $sql="SELECT * FROM goods ORDER BY newprice LIMIT $index,$qty";
    }
    if($rank==4){
        $sql="SELECT * FROM goods ORDER BY newprice DESC LIMIT $index,$qty";
    }

    $res=$conn->query($sql);
    
    /* 执行 */
    $data=$res->fetch_all(MYSQLI_ASSOC);
    $sql2="SELECT * FROM goods";
    $res2=$conn->query($sql2);////执行语句：得到结果集
    $row=$res2->num_rows;//获取结果集里面的num_rows属性，记录的条数
    $goodlist=array(
        'total'=>$row,//总条数
        'datalist'=>$data,//查询到的数据
        'page'=>$page,//第几页
        'qty'=>$qty//每页显示多少条
    );
    echo json_encode($goodlist,JSON_UNESCAPED_UNICODE);
	
	//关闭结果集和数据库
	
	$res->close();
	$conn->close();
	
?>