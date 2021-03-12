const express = require('express')
const sha1 = require('sha1')
const app = express()

app.get('/', (req, res) => {
    var token = "xxxx";
    var signature = req.query.signature;
    var timestamp = req.query.timestamp;
    var echostr = req.query.echostr;
    var nonce = req.query.nonce;

    var oriArray = [token, timestamp, nonce].sort().join('')

    var sha = sha1(oriArray)
     console.log(sha,signature)
    if (signature === sha) {
        //验证成功
        res.send(true)
    } else {
        //验证失败
        res.send({ "message": "error" })
    }})

const server = app.listen(3000, function(){
    console.log(1)
})