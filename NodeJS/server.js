const http=require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    switch(req.url){
        case '/home':
            res.end('首页');
            break;
        case '/list':
            res.end('列表页');
            break;
        default:
            res.end(`你访问的的页面${req.url}不存在`);
    }
}).listen(2222,function(){
     console.log("succeed");
     console.log(db.coll);
});

