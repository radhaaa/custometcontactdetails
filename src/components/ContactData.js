import React from "react";
function ContactData(){
    const person = [
        {
            id: 1,
            name: "anu",
            mobile: "2449999",
            gender: "Female",
            contacttype: "Personal"

        },
        {
            id: 2,
            name: "radha",
            mobile: "33333333",
            gender: "Female",
            contacttype: "Business"
        },
        {
            id: 3,
            name: "abcd",
            mobile: "88889999",
            gender: "Male",
            contacttype: "Personal"
        },
        {
            id: 4,
            name: "anubdhh",
            mobile: "66649999",
            gender: "Male",
            contacttype: "Business"
        }

    ]
 let datalen = [];
 for (let x in person) {
    
    console.log(x)
    console.log("hi")
    console.log(person[x].gender) 
  
    console.log(datalen.length)
    if(person[x].gender=="Male"){
        datalen.push(person[x]);
        console.log(person[x].name)
    }
    else console.log("person not found")
 }

 return(datalen.length)
}

 export default ContactData