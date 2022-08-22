// const square=function(x){
//     return x*x;
// }
// const square=(x)=>{
//     return x*x;
// }
// const square=(x)=>x*x
// console.log(square(3));

const event={
    name:'Birthday party',
    guestList:['Naveen','Aniket','Anu'],
    printguestList(){
        console.log('Guest list for', this.name)
        this.guestList.forEach((data)=>{
            console.log(data+' is attending '+this.name)
        })
    }
}
event.printguestList();