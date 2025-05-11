// const message = "This is my first method";
// const anotherString = new String();

// console.log(message);
// console.log(anotherString);

// let hour =19;

// if(hour>=6&& hour<12)
//     console.log('Good Morning')

// else if(hour>=12 && hour<17)
// console.log('Good after Noon');

// else
//     console.log('Good evening');

//     for(let i=0;i<=10;i++)
//        if(i%2==0) {
//         console.log('Hello world '+i);
//     }
//Factory fuction
function circle(radius){
    return{
        radius,
        draw(){
            console.log("The radius is "+radius);
        }
    };
}
let c1 = circle(23);
console.log(c1);
let c2 =circle(45);
console.log(c2);
// Constructor Fuction 
function MyCircle(radius){
    this.radius = radius;
    this.draw =function(){
        console.log()
    }
}
const m1 = new MyCircle(12);
console.log(m1);

