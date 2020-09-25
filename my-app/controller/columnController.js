var Column = require('../models/column.js');

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
    
    res.send(newColumn);
    
}


exports.getGameRecap = async(req,res)=>{

    // > db.columns.aggregate([{"$group":{"_id":"$status","total":{"$sum":1}}}])
    var master = await Column.aggregate([{"$group":{"_id":"$status","total":{"$sum":1}}},{"$sort":{"_id":-1}}])
    
    res.send(master);

}