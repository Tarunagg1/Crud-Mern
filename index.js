const express = require('express')
const body_parser = require('body-parser')
const mongoose = require('mongoose')
const crudmodal  = require('./crudmodel')
const { body, validationResult } = require('express-validator');
const { findByIdAndUpdate } = require('./crudmodel');
const { response } = require('express');


const app = express();

mongoose.connect("mongodb://localhost/tarun",{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true},(err,link)=>{
    if(err)
        throw err;
    else{
        console.log("database connected");
    }
})


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//////////////// get all user data
app.get('/user',(req,res)=>{
    crudmodal.find({},(err,result)=>{
        if(err){
            res.json({
                status:false,
                error:err,
                message:"database error"
            })
        }else{
            res.json({
                status:true,
                data:result,
                message:"Data found"
            })
        }
    })
})

///////// add data
app.post('/adduser',[
    body("name").not().isEmpty(),
    body("username").not().isEmpty(),
    body("email").not().isEmpty().isEmail(),
    body("number").not().isEmpty().isNumeric(),
    body("website").not().isEmpty(),
    ],(req,res)=>{
    let error = validationResult(req);
    if(!error.isEmpty()){
        res.json({
            status:false,
            error:error,
            message:"Validation Fail"
        })
    }else{
        let crud = new crudmodal({
            name:req.body.name,
            email:req.body.email,
            username:req.body.username,
            number:req.body.number,
            website:req.body.website,
        })
        crud.save((err,result)=>{
            if(err){
                res.json({
                    status:false,
                    error:err,
                    message:"database err accure",
                })
            }else{
                res.json({
                    status:true,
                    success:result,
                    message:"data inserted successful"
                })
            }
        })
    }
})


////////////// get specific user data
app.get('/user/:id',(req,res)=>{
    crudmodal.findOne({_id:req.params.id},(err,result)=>{
        if(err){
            res.json({
                status:false,
                data:result,
                message:"user not found"
            })
        }else{
            if(result){
                res.json({
                    status:true,
                    data:result,
                    message:"Data found"
                })
            }
        }
    })
})

////////////////////// delete data
app.get('/user/delete/:id',(req,res)=>{
    crudmodal.findByIdAndDelete(req.params.id,(err,response)=>{
        if(err){
            res.json({
                status:false,
                error:err,
                message:"database err accure",
            })
        }else{
            if(response != null){
                res.json({
                    status:true,
                    data:response,
                    message:"Data Deleted"
                })
            }else{
                res.json({
                    status:false,
                    data:response,
                    message:"Data allready Deleted"
                })
            }
        }
    })
})



app.post('/user/update/:id',(req,res)=>{
   crudmodal.findByIdAndUpdate(req.params.id,{name:req.body.name,username:req.body.username,email:req.body.email,number:req.body.number,website:req.body.website},(err,response)=>{
        if(err){
            res.json({
                status:false,
                error:err,
                message:"database err accure",
            })
        }else{
            res.json({
                status:true,
                data:response,
                message:"Data Updated"
            })
        }
    })
})





app.listen("5000",(err,succ)=>{
    if(err)
        throw err;
    else{
        console.log("listening on 5000");
    }
})

