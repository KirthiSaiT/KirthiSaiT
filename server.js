const http=require("http");

const port=3000;

const toDoList = ["learn","apply things","succed"];



http
.createServer((req,res)=>{
    const {method,url}=req;
    if(url==="/todos"){
        if(method==="GET"){
            res.writeHead(200);
            res.write(toDoList.toString);
        }
    }

    // console.log(method,url);
    res.end();

    // res.writeHead(200,{"Content-Type":"text/html"});
    // res.write("<h2>hey server started</h2> 1 2 3 ");
    // res.end();
})
.listen(port,()=>{
    console.log(`NodeJS server started Running on port ${port}`);
})