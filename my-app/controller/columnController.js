var Column = require('../models/column.js');
var Counter = require('../models/counter.js');
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false); 

exports.getColumn = async(req,res)=>{

    var column = await Column.find({})
    
    res.send(column);
}
  

exports.setColumn = async(req,res)=>{
    
    console.log(req.body);
    
    var newColumn = req.body;
    
    var column = new Column(newColumn);
    
    column.save(function(err){
        if(!err){
            console.log('Column Save');
        }
    })

    var id = mongoose.Types.ObjectId("5f6ee9f927da2ee73e0700b3");  
 
    var counter = await Counter.findOneAndUpdate(
     { "_id" : id},
     {
       $inc: {
         quantity:1
       }
     }
   );
    
    res.send(newColumn);
    
}


exports.getGameRecap = async(req,res)=>{

    // > db.columns.aggregate([{"$group":{"_id":"$status","total":{"$sum":1}}}])
    var master = await Column.aggregate([{"$group":{"_id":"$status","total":{"$sum":1}}},{"$sort":{"_id":-1}}])
    
    res.send(master);

}

exports.getHistorial = async(req,res)=>{

    var column = await Column.find({"status":"win"})
    
    res.send(column);

}

exports.setMasterCounter = async(req,res)=>{
  
    var id = mongoose.Types.ObjectId("5f6ee9f927da2ee73e0700b3");  
 
    var counter = await Counter.findOneAndUpdate(
     { "_id" : id},
     {
       $inc: {
         quantity:1
       }
     }
   ); 
 
   res.send(req.body)
}