let person = {
    firstName : 'Indra',
    lastName : "pas",
    age : 24,
    fullName : function()
    {
        console.log(this.firstName+this.lastName)
    }

}
console.log(person.fullName())
console.log(person.firstName)
console.log(person['lastName']);
person.firstName = "INDRA THEJA";
console.log(person.firstName)
person.gender = 'male';
console.log(person)

console.log('gender' in person)

for(let key in person)
{
    console.log(key, person[key])
}