function space(number){
    if(arr.length==0){
        return 0
    }
    else{
        return number
    }
}


let arr=[]
N=arr.length;
function avg(arr){
    sum=0;
    for(let i=0; i<=arr.length-1; i++){
        sum=sum+arr[i]
        avg=sum/N
    }
    console.log(space(avg))
}
avg(arr)




