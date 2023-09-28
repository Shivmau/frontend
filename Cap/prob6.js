
lower="abcdefghijklmnopqrstuvwxyz"
upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function chartolower(char){
    bag=""
    for(let i=0; i<=upper.length; i++){
        if(upper[i]==char){
            bag=bag+lower[i]
        }
        if(lower[i]==char){
            bag=bag+upper[i]
        }
        
    } return (bag)
}
function problem(word){
    let bag =""
    for(let i=0; i<word.length; i++){
        bag=bag+chartolower(word[i])
    }
    return bag
}
a=problem("Test")
console.log(a)