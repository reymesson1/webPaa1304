var Column = require('../models/column.js');
var jwt = require('jwt-simple');

exports.getColumn = async(req,res)=>{

    var column = await Column.find({})
    
    res.send(column);
}
  

exports.setColumn = async(req,res)=>{
    
    var decode = jwt.decode(req.body.creator,'123');

    var data = req.body;

    data['creator'] = decode.sub;
    
    var newColumn = data;
    
    var column = new Column(newColumn);
    
    column.save(function(err){
        if(!err){
            console.log('Column Save');
        }
    })
    
    res.send(newColumn);
    
}


exports.getGameRecap = async(req,res)=>{

    var userObj = req.body    
    var decode = jwt.decode(req.body.token,'123')

    // > db.columns.aggregate([{"$group":{"_id":"$status","total":{"$sum":1}}}])
    var master = await Column.aggregate([{"$match":{"creator":decode.sub}},{"$group":{"_id":"$status","total":{"$sum":1}}},{"$sort":{"_id":-1}}])
    
    res.send(master);

}

exports.getHistorial = async(req,res)=>{
    
    var userObj = req.body    
    var decode = jwt.decode(req.body.token,'123')

    var column = await Column.find({"creator":decode.sub})
    
    res.send(column);

}