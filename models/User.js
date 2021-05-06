const {Schema,model} = require("pg-promise");
const  schema = new Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
})

module.exports = model('User', schema)