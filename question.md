
```javascript
const x = [1,2,3,4]

for(let i=0;i<x.length;i++) {
    console.log(`foor loop output ${i}=${x[i]}`)
}

//forEach
x.forEach((x,i)=>console.log(`forEach output : ${i}=${x}`))

//function
function fun1(x) {
    console.log(this)
    console.log(`From function fun1: ${x}`)
}

const a = function(a){
    console.log(this)
    console.log(`From function a: ${a}`)
}

const b=(a)=> {
    console.log(this)
    console.log(`From function b: ${a}`)
}


//callback
function funX(x,callback) {
    callback(x);
}


fun1(10)
a(10)
b(10)
funX(2,(x)=>{
    console.log(`callback output: ${x}`)
})
```
