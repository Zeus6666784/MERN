let arr=[1,2,3,4,5];

let a=arr.map(n=>n*2);

console.log("Map",a);

let b=arr.filter(n=>n%2==0);

console.log("filter",b);

let c=arr.reduce((sum,n)=>sum+n,0);

console.log("reduce",c);