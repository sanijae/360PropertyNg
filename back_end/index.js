const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const path = require('path')


const  app  = express()
app.use(cors())
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}))
app.use('/Property/images',express.static(path.join(__dirname,'Images')))

app.use('/Property/user',require('./Route/UserRoute'))
app.use('/Property/post',require('./Route/PostRoute'))
app.use('/Admin',require('./Route/AdminRoute'))
app.use('/Blog',require('./Route/BlogRoute'))
app.use('/Contact',require('./Route/ContactRoute'))

const port= process.env.port || 5000
const dbUrl = process.env.dbUrl || 'mongodb://localhost:27017/Zimo'
mongoose.connect(dbUrl)
.then(()=>app.listen(port,()=>console.log('server started on port: '+port)))
.catch((err)=>console.log(err))

