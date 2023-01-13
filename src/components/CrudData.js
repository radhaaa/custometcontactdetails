import React, { useRef, useState } from "react";
import ReactDOM from 'react-dom';
import './Crud.css';
function CrudData(){
    const List = [
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
        },
        {
            id: 5,
            name: "sreekanth",
            mobile: "66649999",
            gender: "Male",
            contacttype: "Business"
        }

    ]
    const [lists, setList] = useState(List)
    const [updateState, setupdateState] = useState(-1)
    function getid(){
        let id = 0;
        for (let x in lists) {
            if (x.id > id) {
                id= x.id
            }
        }
        console.log("id value"+id)
        return id
        
    }
        
    return(
        <div className='ui main'>
            <div className="con-dtn-fema">
                <div><ul>
                    <li>
                        <h6>FemaleContacts:</h6>

                        {(() => {

                            let datalen = [];
                            for (let x in List) {

                                console.log(x)
                                console.log("hi")
                                console.log(List[x].gender)

                                console.log(datalen.length)
                                if (List[x].gender == "Female") {
                                    datalen.push(List[x]);
                                    console.log(List[x].name)
                                }
                                else console.log("Female not found")
                            }

                            return (datalen.length)
                        }


                        )()}
                    </li>
                    <li>
                        <h6>MaleContacts:</h6>

                        {(() => {

                            let datalen = [];
                            for (let x in List) {

                                console.log(x)
                                console.log("hi")
                                console.log(List[x].gender)

                                console.log(datalen.length)
                                if (List[x].gender == "Male") {
                                    datalen.push(List[x]);
                                    console.log(List[x].name)
                                }
                                else console.log("Male not found")
                            }

                            return (datalen.length)
                        }
                        )()}
                    </li>
                    <li>
                        <h6>PersonalContacts:</h6>

                        {(() => {

                            let datalen = [];
                            for (let x in List) {

                                console.log(x)
                                console.log("hi")
                                console.log(List[x].contacttype)

                                console.log(datalen.length)
                                if (List[x].contacttype == "Personal") {
                                    datalen.push(List[x]);
                                    console.log(List[x].contacttype)
                                }
                                else console.log("personal contact not found")
                            }

                            return (datalen.length)
                        }
                        )()}
                    </li>
                    <li>
                        <h6>BusinessContacts:</h6>

                        {(() => {

                            let datalen = [];
                            for (let x in List) {

                                console.log(x)
                                console.log("hi")
                                console.log(List[x].contacttype)

                                console.log(datalen.length)
                                if (List[x].gender == "Male") {
                                    datalen.push(List[x]);
                                    console.log(List[x].contacttype)
                                }
                                else console.log("Businee contact not found")
                            }

                            return (datalen.length)
                        }
                        )()}
                    </li>

                </ul>
                </div>
            </div>

        <AddList  id= { getid()} setList={setList} />
        <form onSubmit={handleSubmit}>
        <table>
            {
                lists.map((current) =>(
                    updateState === current.id ? <EditList current={current} lists={lists} setList={setList} /> :

                    <tr>
                        <td>{current.name}</td>
                        <td>{current.mobile}</td>
                        <td>{current.gender}</td>
                        <td>{current.contacttype}</td>
                        <td>
                            <button className="edit" onClick={() => handleEdit(current.id)}>Edit</button>
                            <button className="delete" onClick={() => handleDelete(current.id)}>Delete</button>
                        </td>
                    </tr>
                )                
                )
            }
        </table>
        </form>
        </div>

  )

function handleEdit(id) {
    setupdateState(id)

}
function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id)
    setList(newlist)

}
function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const mobile = event.target.elements.mobile.value;
    const gender = event.target.elements.gender.value;
    const contacttype = event.target.elements.contacttype.value
    const newlist = lists.map((li) => (
        li.id === updateState ? { ...li, name: name, mobile: mobile, gender: gender, contacttype: contacttype } : li
    ))
    setList(newlist)
    setupdateState(-1)


}



}
function EditList({current,lists, setList}) {
    function handleInputid(event) {
        const name = event.target.id;
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? { ...li, name: value } : li
        ))
        setList(newlist)

    }
    function handleInputName(event) {
        const name = event.target.name;
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? { ...li, name: value } : li
        ))
        setList(newlist)

    }
    function handleInputMoile(event) {

        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? { ...li, mobile: value } : li
        ))
        setList(newlist)

    }
    function handleInputGender(event) {

        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? { ...li, gender: value } : li
        ))
        setList(newlist)

    }
    function handleInputContactType(event) {

        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? { ...li, contacttype: value } : li
        ))
        setList(newlist)

    }

    return(
      
            <tr>
                <td><input type="text"  onChange={handleInputid} name="id" value={current.id} /></td>
                <td><input type="text"  onChange={handleInputName} name="name" value={current.name} /></td>
                <td><input type="text"  onChange={handleInputMoile} name="mobile" value={current.mobile}/></td>
                <td><input type="text" onChange={handleInputGender} name="gender" value={current.gender} /></td>
                <td><input type="text"   onChange={handleInputContactType} name="contacttype" value={current.contacttype} /></td>
                <td><button type="submit">Update</button></td>
                        
                    </tr>
           
      
    )
}


function AddList({ id,setList }) {
    const idRef = useRef();
    const nameRef = useRef();
    const mobileRef = useRef();
    const genderRef = useRef();
    const contactRef = useRef();
    function handleSubmit(event) {
        event.preventDefault();
        const id = event.target.elements.id.value;
        const name = event.target.elements.name.value;
        const mobile = event.target.elements.mobile.value;
        const gender = event.target.elements.gender.value;
        const contacttype = event.target.elements.contacttype.value
        const newlist = {
            id:id,
            name,
            mobile,
            gender,
            contacttype
            
        }
        
        setList((preList) => {
            
            return (preList.concat(newlist))
        })
        idRef.current.value = ""
        nameRef.current.value = ""
        mobileRef.current.value = ""
        genderRef.current.value = ""
        contactRef.current.value = ""

    }
    return(

            <form onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder="Enter id" ref={idRef} />
                
                    <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
                
                
                    
                    <input type="text" name="mobile" placeholder="Enter Mobile" ref={mobileRef} />
                
                
                    
                    <input type="text" name="gender" placeholder="Male/Female" ref={genderRef} />
                
                
                    
                    <input type="text" name="contacttype" placeholder="Personal/Business" ref={contactRef} />
                
    
                <button type="submit">Add</button>
            </form>
    )
}

export default CrudData