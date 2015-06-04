function isItEven(x) {
  if ((x % 2) === 0 )
    console.log("You are even");
  if ((x % 2) === 1)
    console.log("You are odd");
} 

isItEven(-25);


////////////////////////////// we needed Math.abs to return a positive

function isItEven(x) {
  if ((x % 2) === 0 )
    console.log("You are even");
  if (Math.abs(x % 2) === 1)
    console.log("You are odd");
} 

isItEven(-25);

console.log(-25 % 2);

