const express  = require('express')
const app = express();
const mysql = require('mysql')
const cors = require('cors');
const { Result } = require('postcss');


app.use(cors())
app.use(express.json())

const db =  mysql.createConnection({
    

})

app.get('/CheckIn-out', (res,req)=> {
    db.query("SELECT * FROM ",(err, result) => {
        if(err){
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

app.listen('3001', () => {
    console.log('Server is running on port : 3001')

})
