// nested destructuring

const users = [
    {userId: 1, firstName: 'Nayan', gender:'male'},
    {userId: 2, firstName: 'Ruchi', gender:'female'},
    {userId: 3, firstName: 'Aryan', gender:'male'}
]
// destructuring from array
const [user1, user2, user3] = users;
console.log(user1);

// suppose we want firstName of user1 and gender of user3 
// for that we will destructure the objects which is inside of array
// for that we need key inside {}
// leaving 2nd position blank bcoz we just need user1 and user2
const [{firstName}, , {gender}] = users;
// by default variable name is key
console.log(firstName,gender);

//  if we want to change name of variable 
// we can do like this we have done in object and array destructuring
const [{firstName:user1_firstName}, user2_Id , {gender:user3_gender}] = users;
console.log(user1_firstName, user2_Id,user3_gender);