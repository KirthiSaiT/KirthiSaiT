const http = require("http");

const port = 3000;

const toDoList = ["learn", "apply things", "succeed"];

http
  .createServer((req, res) => {
    const { method, url } = req;
    if (url === "/todos") {
      if (method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(toDoList.toString());
      } else if(method === "POST"){
        let body ="";
        req.on('error',(err)=>{
            console.log(err);
        }).on('data',(chunk)=>{
            body+=chunk;
        }).on('end',()=>{
            body=JSON.parse(body);
            let newToDo = toDoList;
            newToDo.push(body.name);
            console.log(newToDo)
            // console.log("data: ",body)
        });
      }else if(method === "DELETE"){
        let body='';
        req.on('error',(err)=>{
          console.log(err);
        }).on("data",(chunk)=>{
          body+=chunk;
        }).on("end",(chunk)=>{
          body=JSON.parse(body);
          let deleteitem=body.item;
          // for ( let i =0;i<toDoList.length;i++){
          //   if(toDoList[i]===deleteitem){
          //     toDoList.splice(i,1);
          //     break;
          //   }
          // }
          
        });
      }
      else {
        res.writeHead(501);
      }
    } else {
      res.writeHead(404); // Respond with 404 if the route doesn't match
      res.write("Not Found");
    }

    res.end();
  })
  .listen(port, () => {
    console.log(`NodeJS server started and running on port ${port}`);
  });
