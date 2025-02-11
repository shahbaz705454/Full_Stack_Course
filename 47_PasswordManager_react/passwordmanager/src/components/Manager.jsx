import React, { useState, useEffect } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';



const Manager = () => {
    const [showpass, setShowpass] = useState(false);
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [PasswordArray, setPasswordArray] = useState([]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));




        }
    }, []);


    const onSubmit = (e) => {
        if (!form.site || !form.username || !form.password) {
            alert("Form is empty. Please fill in all fields.");
            return;
        }
        setPasswordArray([...PasswordArray, { ...form, id: uuidv4() }]);
        localStorage.setItem("passwords", JSON.stringify([...PasswordArray, { ...form, id: uuidv4() }]))
        console.log([...PasswordArray, form]);
        setForm({ site: "", username: "", password: "" });
        toast.success("Password Saved Successfully");

    }
    const copyText = (text) => {
        toast.success('Text Copied to Clipboard')
        navigator.clipboard.writeText(text);

    }

    const deleteItem = (id) => {
        setPasswordArray(PasswordArray.filter(item => item.id !== id));
        localStorage.setItem("passwords", JSON.stringify(PasswordArray.filter(item => item.id !== id)))
        toast.error("Item deleted Successfully");

    }
    const editItem = (id) => {
        setForm(PasswordArray.filter(i => i.id === id)[0]);
        setPasswordArray(PasswordArray.filter(item => item.id !== id));



    }



    return (
        <div className='h-[88vh] overflow-auto'>
            <Toaster></Toaster>
            <div class="absolute inset-0 -z-10 lg:h-full lg:w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            </div>


            <div className='text-white lg:h-[200px] mx-auto mt-20 lg:w-[800px] flex flex-col  gap-4'>
                <h1 className='logo font-bold text-3xl text-center'>
                    <span className='text-yellow-400'>&lt;</span>
                    Password
                    <span className='text-yellow-400'>Manager/&gt;</span>
                </h1>
                <p className='text-yellow-500 text-center text-lg font-semibold' >Your Own Password Manager</p>

                <input placeholder='Enter Website URL' onChange={handleChange} type='text' name='site' value={form.site} className='bg-white border-3 px-2 text-black w-3/4 mx-auto border-yellow-500 rounded-full'></input>
                <div className='flex gap-4 justify-center mx-auto flex-col lg:flex-row w-3/4' >
                    <input placeholder='Enter UserName' onChange={handleChange} value={form.username} name='username' type='text' className='bg-white  border-2 w-full px-2 text-black border-green-500  rounded-full'></input>

                    <div className='relative w-full'>
                        <input placeholder='Enter Password' onChange={handleChange} value={form.password} name='password' type={showpass ? "text" : "password"} className='bg-white border-2 w-full px-2 text-black border-green-500 rounded-full' />
                        <span onClick={() => { setShowpass(!showpass) }} className='absolute right-0 top-1.5 text-black px-2 cursor-pointer'>
                            {
                                showpass ? <FaEye /> : <FaEyeSlash />
                            }
                        </span>

                    </div>


                </div>



                <button onClick={onSubmit} className='bg-yellow-600 hover:scale-105 gap-2 font-semibold w-fit mx-auto rounded-md px-2 py-1 cursor-pointer items-center justify-center flex'>
                
                    <IoMdAdd />

                    Add Password</button>

            </div>
            <h2 className='text-white mt-20 text-center text-2xl font-bold'>YOUR PASSWORDS</h2>


            <table className='mb-10 mt-2 mx-auto  items-center w-[95%]  lg:w-[1000px]  rounded-md overflow-hidden '>
                <thead className='lg:text-xl gap-3  text-gray-700 font-bold bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-600  '>
                    <tr >
                        <th>Website Name</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='   bg-gradient-to-r from-green-500 via-green-500
               to-gray-300 text-center'>
                    {PasswordArray.length !== 0 ?
                        PasswordArray.map((item, index) => {
                            return (
                                <tr key={index} className='border-b-1 border-gray-700'>
                                    <td className='text-start px-2 pt-2 flex items-center gap-3'><a href={item.site} target='_blank'>{item.site}</a>
                                        <div onClick={() => { copyText(item.site) }} className=' cursor-pointer font-bold'><IoCopyOutline /></div></td>
                                    <td >
                                        <div className='flex items-center gap-3 justify-center '>
                                            {item.username}
                                            <div onClick={() => { copyText(item.username) }} className=' cursor-pointer font-bold'><IoCopyOutline /></div>

                                        </div>
                                    </td>
                                    <td><div className='flex items-center gap-3 justify-center'>
                                        {item.password}
                                        <div onClick={() => { copyText(item.password) }} className=' cursor-pointer font-bold'><IoCopyOutline /></div>

                                    </div></td>
                                    <td >
                                        <div className='cursor-pointer flex items-center gap-4 justify-center '>
                                            <span onClick={() => { editItem(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/exymduqj.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                            <span onClick={() => { deleteItem(item.id) }} className='py-1'>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/hwjcdycb.json"
                                                    trigger="hover"
                                                    style={{ "width": "30px", "height": "30px" }}>
                                                </lord-icon>
                                            </span>
                                        </div>
                                    </td>
                                </tr>)

                        }) : <div className='text-white bg-red-400 text-center text-xl'>No Password is Available</div>
                    }

                </tbody>




            </table>









        </div>



    )
}

export default Manager