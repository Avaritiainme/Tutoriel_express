const {createReadStream}= require('fs')

const stream= createReadStream('./content/first.txt')

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(err)=>{
    console.log(err)
})