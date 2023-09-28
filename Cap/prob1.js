function addNumbers(num1,num2){
       sum=num1+num2;
       return sum
}
num1=3;
num2=5;
num3=6;

calculate=addNumbers(addNumbers(num1,num2),num3)
console.log(calculate)