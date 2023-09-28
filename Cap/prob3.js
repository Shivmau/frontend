function isodd(num){
    if(num%2==1){
        return true
    } else{
        return false
    }
}
limit=13
function print(limit){
    for (let i=0; i<=limit; i++){
        if(isodd(i)){
            console.log(i)
        }
    }
}
print(limit)