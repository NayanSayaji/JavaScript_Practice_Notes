// object destructuring

const band = {
    bandName : "DJ snake",
    famousSong : "let me love you",
    year : "2013",
    city : "algeria"
};

// typical way 
const bandName = band.bandName;
const famousSong = band.famousSong;
console.log(bandName, famousSong);
// these are constants so we cant change it's value
const varr1 = band.bandName;
const varr2 = band.famousSong;
console.log(varr1,varr2);

// using destructuring
// variables will created with name 
// bydefault key name will be the variable name 
//     key         key        
const {bandNamee, famousSongg} = band;
// if we want to set variable name then 
// key : varianble_name key : varianble_name 
const {bandName :var1, famousSong:var2} = band;
console.log(var1,var2);

// if want to create a new aobject of remaining properties then it can be written as using spread operator
const {bandName :var10, famousSong:var20, ...restProperties} = band;
console.log(restProperties);