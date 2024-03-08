function getName(){
    return 'Roni Hossain';
}
const getAge = ()=>{
    return 24;
}
const phone = '01518904071'
//exports.phone = '01518904071';

// exports.getAge = getAge;
// exports.getName = getName;
// exports.phone = phone;
module.exports = {
    getName,
    getAge,
    phone
}