const mysql=require('mysql')

  const db=  mysql.createConnection({
        host:'localhost',
        user:"root",
        password:"",
        database:"crud"
    })
    db.connect(()=>{
        console.log('connected on mysql db')});
        // return db



module.exports=db