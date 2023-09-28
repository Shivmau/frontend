
lower="abcdefghijklmnopqrstuvwxyz"
upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let char="Q"
function chartolower(char){
    bag=""
    for(let i=0; i<=upper.length; i++){
        if(upper[i]==char){
            bag=bag+lower[i]
        }
        
    } return (bag)
}

// a=chartolower("Z")
// console.log(a)

// word="SHIVAM"
function wordtolower(word){
    bag=""
    for(let i=0; i<=word.length-1; i++){
    bag=bag+chartolower(word[i])
    }
return bag
}

// a=wordtolower("")
// console.log(a)

function arraytolower(array){
     let bag=[]
    for(let i=0; i<array.length; i++){
        bag.push(wordtolower(array[i]));
    }
    return bag
}
array= ["MA", "SA", "I", "SCH", "OOL"]
a=arraytolower(array)
console.log(a)