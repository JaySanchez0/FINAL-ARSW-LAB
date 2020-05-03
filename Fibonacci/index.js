var bigInt = require("big-integer");
var redis = require("redis");
var bluebird = require("bluebird");

bluebird.promisifyAll(redis);

var client= redis.createClient(6380,'App-Test.redis.cache.windows.net',{
    auth_pass:'SWs9PZZxb6p4tT3BJQ1ceW4w796iNjUlZ3Z5HzzH+Ms=',
    tls:{
        servername:"App-Test.redis.cache.windows.net"
    }
});

async function fibonacci(nth){
    var aw = null;
    if(nth==1 || nth==2){
        aw =  bigInt.one;
    }else if(await exist("fibonacci:"+String(nth))){
        return (await getValue("fibonacci:"+String(nth)));
    }
    else{
        aw = (await fibonacci(nth-1)).add((await fibonacci(nth-2)));
        await set("fibonacci:"+String(nth),aw.toString());
    }
    return aw;
}
async function exist(key){
    return (await client.existsAsync(key))=== 1;
}
async function getValue(key){
    return bigInt(await client.getAsync(key));
}
async function set(key,value){
    await client.setAsync(key,value);

}
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    let nth = req.body.nth
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;
    if (nth < 0)
        throw 'must be greater than 0'
    else if (nth === 0)
        answer = nth_2
    else if (nth === 1)
        answer = nth_1
    else {
        answer = await fibonacci(nth);
    }
    //console.log("x "+(await getValue("x")));
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: answer.toString()
    };
}