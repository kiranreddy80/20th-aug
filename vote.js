var a=[{
    name:"kiran",
    age:21,
},{
    name:"anil",
    age:17,
},{
    name:"kamesh",
    age:26,
},{
    name:"surya",
    age:16,
},{
    name:"karthi",
    age:25,
},{
    name:"venkat",
    age:6,
},]
// create an empty array to push the eligible voters
var arr=[];
for(var g of a){
    if(g.age>=18){
        arr.push(g.name)
}
}
console.log(arr)