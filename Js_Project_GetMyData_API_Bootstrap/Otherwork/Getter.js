
Person ={
firstName:'Mesh',
lastName:'Sharma',
get fullName(){
    console.log(`${Person.firstName} ${Person.lastName}`);
},
set fullName(value){
    const parts = value.split('');
    this.value = parts[0];
    this.value = parts[1];
}
};
Person.fullName='Ram Lala';
console.log(Person.fullName);

//console.log(`${Person.tname} ${Person.sName}`)