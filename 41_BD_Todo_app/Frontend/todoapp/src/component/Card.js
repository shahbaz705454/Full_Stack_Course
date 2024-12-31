import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import axios from "axios";
import { toast } from 'react-toastify';
import { motion } from "motion/react"
const Card = ({ Data, refreshTodos,refrence }) => {
    const { title, description, _id } = Data;

    const deleteHandler = async () => {
        try {
            await axios.delete(`http://localhost:7000/api/v1/deleteTodo/${_id}`);
            toast.error("Todo Item Deleted");
            refreshTodos();
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}} className="bg-gradient-to-r  p-6 rounded-xl shadow-lg shadow-teal-500/50 w-[14rem] m-5 flex flex-col justify-between">
            <div className="flex flex-col h-full">
                <h2 className="font-bold text-center text-2xl text-cyan-600  mb-1">{title}</h2>
                <p className="text-white opacity-80 text-sm mb-5">{description}</p>
                <div className="flex-grow"></div>
                <button
                    onClick={deleteHandler}
                    className="self-center p-3 opacity-60 hover:opacity-100 rounded-full bg-red-600 text-white cursor-pointer hover:bg-red-700 transition-all duration-100 ease-in-out transform hover:scale-110 shadow-md"
                >
                    <MdOutlineDelete size={24} />
                </button>
            </div>
        </motion.div>
    );
};

export default Card;
