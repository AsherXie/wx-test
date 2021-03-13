const express = require('express')
const sha1 = require('sha1')
const app = express()
const appid = 'wxcdf4700e364758bf';
const appsecret = 'b9f35993bbcfe9eb7e84769e5cfc62b3';
app.get('/code', (req,res) => { 
    var router = 'coto';
    var return_uri = '47.108.194.232:3000'; 
    var scope = 'snsapi_base'; //网页
    var state = 'STATE';
    res.redirect('https://open.weixin.qq.com/connect/oauth2/authorize?appid='+appid+'&redirect_uri='+return_uri+'&response_type=code&scope='+scope+'&state='+state+'#wechat_redirect');
});
 
app.get('/', (req, res) => {
    res.send('1111');
    return;
    var token = "xxxx";
    var signature = req.query.signature;
    var timestamp = req.query.timestamp;
    var echostr = req.query.echostr;
    var nonce = req.query.nonce;

    var oriArray = [token, timestamp, nonce].sort().join('')

    var sha = sha1(oriArray)
    console.log(sha, signature)
    if (signature === sha) {
        //验证成功
        res.send(true)
    } else {
        //验证失败
        res.send({ "message": "error" })
    }
})

const server = app.listen(3000, function () {
    console.log(1)
})