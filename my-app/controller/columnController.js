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