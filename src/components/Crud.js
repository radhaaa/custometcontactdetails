import React, { useRef, useState } from "react";
import ReactDOM from 'react-dom';
import './Crud.css';

function Crud() {
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
        }

    ]
    const [lists, setList] = useState(List)
    const [updateList, setupdateList] = useState(-1)


    return (


        <div className='ui main'>
            <div className="con-dtn-fema">
                <div><ul>
                    <li>
                        <h6>FemaleContacts:</h6>

                        {(() => {

                            let datalen = [];
                            let text = "";

                            for (let i = 0; i <= lists.length; i = +1) {


                                if (lists[i].gender == "Female") {
                                    datalen.push(lists);
                                    console.log("hello");
                                    console.log(datalen.length);
                                    console.log(lists[i].gender);
                                    console.log(datalen[0].gender)

                                }
                                else {
                                    console.log("male not found")
                                }

                                return datalen.length
                            }
                        }

                        )()}
                    </li>
                    <li>
                        <h6>MaleContacts:</h6>

                        {(() => {

                            let datalen = [];
                            let text = "";

                            for (let i = 0; i <= lists.length; i = +1) {
                                if (lists[i].gender == "Male") {
                                    datalen.push(lists);
                                    console.log("hello");
                                    console.log(datalen.length);
                                    console.log(lists[i].gender);
                                    console.log(datalen[0].gender)

                                }
                                else {
                                    console.log("male not found")
                                }

                                return datalen.length
                            }
                        }
                        )()}
                    </li>
                    <li>
                        <h6>PersonalContacts:</h6>

                        {(() => {

                            let datalen = [];
                            let text = "";

                            for (let i = 0; i <= lists.length; i = +1) {
                                if (lists[i].contacttype == "Personal") {
                                    datalen.push(lists);
                                    console.log("hello");
                                    console.log(datalen.length);
                                    console.log(lists[i].contacttype);
                                    console.log(datalen[0].contacttype)

                                }
                                else {
                                    console.log("personal not found")
                                }

                                return datalen.length
                            }
                        }
                        )()}
                    </li>
                    <li>
                        <h6>BusinessContacts:</h6>

                        {(() => {

                            let datalen = [];
                            let text = "";

                            for (let i = 0; i <= lists.length; i = +1) {
                                if (lists[i].contacttype == "Business") {
                                    datalen.push(lists);
                                    console.log("hello");
                                    console.log(datalen.length);
                                    console.log(lists[i].contacttype);
                                    console.log(datalen[0].contacttype)

                                }
                                else {
                                    console.log("Business not found")
                                }

                                return datalen.length
                            }
                        }
                        )()}
                    </li>

                </ul>
                </div>
            </div>

            <div><AddList setList={setList} /></div>
            <form onSubmit={handleSubmit}>

                {
                    lists.map(current => {
                        return (
                            updateList === current.id ? <EditList current={current} lists={lists} setList={setList} /> :



                                <div className='add-box'>
                                    <div className='con-name'>
                                        <label>
                                            <div><h6>Name:</h6></div><div>{current.name}</div>
                                        </label>
                                    </div>
                                    <label>
                                        <div className='con-mobile'><div><h6>Mobile:</h6></div><div>{current.mobile}</div></div>
                                    </label>
                                    <label>
                                        <div className='con-gender'><div><h6>Gender:</h6></div><div>{current.gender}</div></div>
                                    </label>
                                    <label>
                                        <div className='con-contype'><div><h6>ContactType:</h6></div><div>{current.contacttype}</div></div>
                                    </label>
                                    <label>
                                        <div className="btn-btn">
                                            <button onClick={() => handleEdit(current.id)}>Edit</button>
                                            <button type="button" onClick={() => handleDelete(current.id)}>Delete</button>
                                        </div>
                                    </label>
                                </div>
                        )
                    }
                    )
                }
            </form>

        </div>
    )
    function handleEdit(id) {
        setupdateList(id)

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
            li.id === updateList ? { ...li, name: name, mobile: mobile, gender: gender, contacttype: contacttype } : li
        ))
        setList(newlist)
        setupdateList(-1)


    }


}
function AddList({ setList }) {
    const nameRef = useRef();
    const mobileRef = useRef();
    const genderRef = useRef();
    const contactRef = useRef();
    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const mobile = event.target.elements.mobile.value;
        const gender = event.target.elements.gender.value;
        const contacttype = event.target.elements.contacttype.value
        const newlist = {
            id: 5,
            name,
            mobile,
            gender,
            contacttype
        }
        setList((preList) => {
            return (preList.concat(newlist))
        })
        nameRef.current.value = ""
        mobileRef.current.value = ""
        genderRef.current.value = ""
        contactRef.current.value = ""

    }



    return (

        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
            </label>
            <label>
                Mobile:
                <input type="text" name="mobile" placeholder="Enter Mobbile" ref={mobileRef} />
            </label>
            <label>
                Gender:
                <input type="text" name="gender" placeholder="Male/Female" ref={genderRef} />
            </label>
            <label>
                ContactType:
                <input type="text" name="contacttype" placeholder="Personal/Business" ref={contactRef} />
            </label>

            <button type="submit">Add</button>
        </form>
    )
}
function EditList({ current, lists, setList }) {

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

    return (

        <form>
            <label>

                <input type="text" onChange={handleInputName} name="name" value={current.name} />
            </label>
            <label>

                <input type="text" onChange={handleInputMoile} name="mobile" value={current.mobile} />
            </label>
            <label>

                <input type="text" onChange={handleInputGender} name="gender" value={current.gender} />
            </label>
            <label>

                <input type="text" onChange={handleInputContactType} name="contacttype" value={current.contacttype} />
            </label>

            <button type="submit">update</button>
        </form>

    )
}
export default Crud
