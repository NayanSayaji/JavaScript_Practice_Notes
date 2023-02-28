
const person1 = {
    id: 1,
    fname:'r'
}

//make new map
const extraInfo = new Map();
//to add extra info and preveious object in map
//make object as key and extra new info as value
extraInfo.set(person1,{age:8 , gender:"f"});

//console.log(extraInfo);
console.log(person1.id);   //1
console.log(extraInfo.get(person1).gender);

