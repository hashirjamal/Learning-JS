// QUESTION 1
function outer(x){
    return function (y){
        return x+y;
    }
}
let data=outer(5);
console.log(data(6));
console.log(data(9));
console.log(data(12));


// QUESTION 2
let list = [5,7,9,2,1,3,40,10,4]
function search(i,target,arr){
    if (arr[i]==target){
        return true;
    }
    if (arr.indexOf(arr[i])===(arr.length)-1){
        return false
    }
    return search(i+1,target,arr);
}

console.log(search(0,33,list));

// ALTERNATE ANS FOR Q2
function search2(arr,target){
    if (arr[0]===target){
        return true;
    }
    if (arr.length===0){
        return false;
    }
    arr.shift();
    return search2(arr,target);
    
}
console.log(search2(list,4));


// QUESTION 3
function domManip(text){
let elem=document.createElement("p");

elem.innerHTML=text;
document.body.appendChild(elem);

 }
 domManip("WELCOME TO KARACHI!!!")
console.log(document.getElementById("para").innerText="kkk");

// QUESTION 4
function itemAdder(text){
let tag = document.getElementById("list");
let child = document.createElement("li");
child.innerText=text;
tag.appendChild(child);
console.log(tag);

document.body.appendChild(tag);
}

itemAdder("Banana");
itemAdder("Peach");

// QUESTION 5
function bgColor(element,color){
    let data = document.getElementById(element);
    data.style.backgroundColor=color;
    document.body.appendChild(data);
}

bgColor("head","yellow");

// QUESTION 6
obj =[{name:"John",EmpNo:9224,Designation:"Manager",Salary:12000},{name:"David",EmpNo:9220,Designation:"Clerk",Salary:1000},{name:"Micheal",EmpNo:9229,Designation:"Senior Manager",Salary:19000}];
function Save(key,value){
    let data = JSON.stringify(value);
    console.log(key,value);
    localStorage.setItem(key,data);
}
Save("bio",obj);

// ***QUESTION 7

function retrieveObj(key){
    let data1 = localStorage.getItem(key);
    let data2 = JSON.parse(data1);
    console.log(data2)
}

retrieveObj("bio")


// QUESTION 8

obj =[{name:"John",EmpNo:9224,Designation:"Manager",Salary:12000},{name:"David",EmpNo:9220,Designation:"Clerk",Salary:1000},{name:"Micheal",EmpNo:9229,Designation:"Senior Manager",Salary:19000}];


// QUESTION 9

function store(object){
    let len  = Object.keys(object).length;
    let value ="";
    let retValue="";
    newObj={};
    for (i=0;i<len;i++){
        value =JSON.stringify(Object.values(object)[i])
        localStorage.setItem(Object.keys(object)[i],value);
    }
    for (i=0;i<len;i++){
        retValue=localStorage.getItem(Object.keys(object)[i]);
        newObj[Object.keys(object)[i]] =JSON.parse(retValue);
    }
    return newObj;
}
obj2 ={name:"Ahmed",EmpNo:9224,Designation:"Manager",Salary:1200};

console.log(store(obj2));