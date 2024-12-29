const express = require('express');
const { resolve } = require('path');
let {getAllEmployee,getEmployeeById,addNewEmployee}=require('./movie.js');
const app = express();
const port = 3000;


app.get('/api/employee',(req,res)=>{
  let result=getAllEmployee();
  res.json(result);
});

app.get('/api/employee/:id',(req,res)=>{
  let id=parseInt(req.params.id);
  let result=getEmployeeById(id);
  res.json(result);
});

app.post('/employee/add',(req,res)=>{
  let employee=req.body;
  res.json(addNewEmployee(employee));
});
