const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

const toDoList = ["learn", "apply things", "succeed"];
app.get("/todos",(req,res)=>{
  res.status(200).send(toDoList)
});

app.post('/todos',(req,res)=>{
  let newToDoItem = req.body.name;
  toDoList.push(newToDoItem);
  res.status(201).send({message:"Task Added Succesfully"});
});

app.delete('/todos',(req,res)=>{
  const deletethisitem=req.body.name;
  toDoList.find((elem,index)=>{
    if(elem===deletethisitem){
      toDoList.splice(index,1);
    }
  });
  res.status(201).send({"message":`Deleted Successfully"${req.body.name}`});
});

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
});