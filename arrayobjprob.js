//program that prints all the even numbers in the array
const ages=[21,22,23,34,25]
for(let i=0;i<ages.length;i++)
{
    if (ages[i]%2==0){
        console.log(ages[i])
    }
}
//print only male first name in given obj
const personArray=["eren","mikasa","armin"]
const genderArray=["male","female","male"]
for (i=0;i<personArray.length;i++){
    if (genderArray[i]=="male"){
        console.log(personArray[i])
    }
}
//objects in an array
const allUsers=[{'name':'eren','age':26,'gender':'male'},{'name':'mikasa','age':23,'gender':'female'},{'name':'armin','age':25,'gender':'male'}]
for(let arrIndex=0;arrIndex<allUsers.length;arrIndex++){
    if(allUsers[arrIndex]['gender']=='male'){
        console.log(allUsers[arrIndex]['name'])
    }
}

//obj in obj in arr
const obj=[{'name':'siddu','country':'india','metadata':{'kills':2,'age':19}},{'name':'shiba yuuichi','country':'japan','metadata':{'kills':3,'age':20}},{'name':'johan liebert','country':'france','metadata':{'kills':116,'age':25}}]
for(let z=0;z<obj.length;z++){
    if(obj[z]['metadata']['kills']>2){
        console.log(obj[z]['name'])
    }
}