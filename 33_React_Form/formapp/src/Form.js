import React, { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        comment: false,
        candidate: false,
        offers: false,
        pushNotifications: ""



    });

    // console.log(formData);

    function clickHandler(event) {
        const { name, type, checked, value } = event.target;

        setFormData((prev) => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }

        });

        // console.log(formData);




    }

    function submitHandler(event) {
        event.preventDefault();
        // console.log("submit pr Click hua hai")
        console.log(formData);

    }

    return (
        <div className='w-full md:max-w-[50%] mx-auto shadow p-8'>

            <form className=' flex flex-col gap-2  mt-4 main'>
                <label htmlFor='firstName'>First Name</label>
                <input className='basic' onChange={clickHandler} type='text'
                    name='firstName' value={formData.firstName} id='firstName' placeholder='Mohd'
                />


                <label htmlFor='lastName'>Last Name</label>
                <input className='basic' onChange={clickHandler} type='text'
                    name='lastName' value={formData.lastName} id='lastName' placeholder='Shahbaz'
                />

                <label htmlFor='email'>Email Address</label>
                <input className='basic' onChange={clickHandler} type='email'
                    name='email' value={formData.email} id='email' placeholder='Shahbaz454@gmail.com'
                />

                <label htmlFor='country'>Country</label>
                <select onChange={clickHandler} name='country' id='country' value={formData.value}>
                    <option value='India'>India</option>
                    <option value='Pakistan'>Pakistan</option>
                    <option value='United State'>United State</option>
                    <option value='Canada'>Canada</option>
                    <option value='Germany'>Germany</option>
                    <option value='Russian'>Russia</option>
                </select>

                <label htmlFor='street'>Street Address</label>
                <input className='basic' onChange={clickHandler} type='street'
                    name='street' value={formData.street} id='street' placeholder='1234 choti gali'
                />

                <label htmlFor='city'>City</label>
                <input className='basic' onChange={clickHandler} type='city'
                    name='city' value={formData.city} id='city' placeholder='Manali'
                />

                <label htmlFor='state'>State</label>
                <input className='basic' onChange={clickHandler} type='state'
                    name='state' value={formData.state} id='state' placeholder='UK'
                />

                <label htmlFor='zip'>Zip Code</label>
                <input className='basic' onChange={clickHandler} type='zip'
                    name='zip' value={formData.zip} id='zip' placeholder='112244'

                />

                {/* checkBox */}


                <fieldset className='mt-2' >
                    <legend className='font-semibold'>
                        By Email
                    </legend>
                    <div className='flex mt-5 gap-2 '>
                        <input className='checkbox' id='comments' type="checkbox" onChange={clickHandler} name='comment' checked={formData.comment} />
                        <div>
                            <label htmlFor='comments'>Comments</label>
                            <p className=' opacity-60 '>Get notified when someones posts a comment on a posting.</p>
                        </div>
                    </div>


                    <div className='flex mt-5 gap-2 '>
                        <input className='checkbox' id='candidate' type="checkbox" onChange={clickHandler} name='candidate' checked={formData.candidate} />
                        <div>
                            <label htmlFor='candidate'>Candidates</label>
                            <p className=' opacity-60 '>Get notified when a candidate applies for a job.</p>
                        </div>
                    </div>

                    <div className='flex mt-5 gap-2 '>
                        <input className='checkbox' id='offers' type="checkbox" onChange={clickHandler} name='offers' checked={formData.offers} />
                        <div>
                            <label htmlFor='offers'>Offers</label>
                            <p className=' opacity-60 '>Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                    </div>



                </fieldset>



                <fieldset className='flex  flex-col gap-4'>
                    <legend className='font-semibold'>
                        Push Notifications
                    </legend>
                    <p className='font-extralight text-sm opacity-60'>These are delivered via SMS to your mobile phones.</p>

                    <div className='flex gap-2'>
                        <input type='radio' id='everything' name='pushNotifications' value="everything" onChange={clickHandler}></input>
                        <label htmlFor='everything'>Everything</label>
                    </div>

                    <div className='flex gap-2'>



                        <input className='' type='radio' id='same' name='pushNotifications' value="Same as email" onChange={clickHandler}></input>
                        <label htmlFor='same'>Same as Email</label>

                    </div>


                    <div className='flex gap-2'>
                        <input type='radio' id='push' name='pushNotifications' value="No Push Notifications" onChange={clickHandler}></input>
                        <label htmlFor='push'>No Push Notifications</label>
                    </div>


                </fieldset>
                <div className='mt-3'>
                    <button onClick={submitHandler}
                        className='border-black bg-blue-500 py-2 px-4 rounded-md text-white hover:bg-blue-700' >Save</button>

                </div>













            </form>






        </div>
    )
}

export default Form