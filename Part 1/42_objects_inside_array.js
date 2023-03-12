//  objects inside array
//very useful in real world applications 

const users = [
    {userId: 1, firstName: 'Nayan', gender:'male'},
    {userId: 2, firstName: 'Ruchi', gender:'female'},
    {userId: 3, firstName: 'Aryan', gender:'male'}
]

// for iterating into array of objects
// we can use for in , for of 

for(let user of users){
    console.log(users.firstName);
}