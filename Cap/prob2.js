function abs(num){
    if(num<0){
        return -num
    }
}


function diff(num1,num2){
    let diff=num1-num2;
    console.log(abs(diff))
}
diff(2,3)