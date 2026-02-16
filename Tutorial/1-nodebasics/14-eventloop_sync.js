const { readFile } = require('fs')

console.log('started a first taks')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')

})
console.log('starting a new task')

console.log('first')
setTimeout(()=>{
    console.log('second')
},0)
console.log('third')

setInterval(()=>{
    console.log('test')
},1000)//Ici c'est l'interval auquel on va le lancer

const http = require('http')

const server= http.createServer((req,res)=>
{
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000,()=>{
    console.log('Server listening on port : 5000...')
})