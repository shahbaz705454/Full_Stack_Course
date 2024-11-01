import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';




const Blogs = () => {

    const { posts, loading } = useContext(AppContext);
    console.log(posts)
    return (
        <div className='flex flex-col w-full h-full justify-center'>

            {

                loading ? (<Spinner />) : (
                    posts.length === 0 ? (<div>
                        <p>No Post found</p>
                    </div>) :
                        (posts.map((posts) => (

                            <div key={posts.id} className='m-10 px-10 w-[800px] h-full flex justify-center mx-auto flex-col'>
                                <p className='text-xl font-bold '>{posts.title}</p>
                                <p>

                                    By <span>{posts.author}</span> On <span>{posts.category}</span>

                                </p>

                                <p>
                                    posted On <span>{posts.date}</span>
                                </p>

                                <p>
                                    {posts.content}
                                </p>

                                <div className='text-blue-700 underline gap-2 flex mt-3'> 
                                    {posts.tags.map((tag,index)=>{
                                        return <span key={index}>{`#${tag}`}</span>
                                    })}
                                </div>
                            </div>





                        )))
                )
            }




        </div>
    )
}

export default Blogs