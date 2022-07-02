import React, { useState } from 'react';
import useTask from '../../Hooks/useTask';
import edit from '../../images/edit.svg'
import EditModal from '../EditModal/EditModal';
import { Link } from 'react-router-dom'

const Home = () => {
    const [tasks, setTask] = useTask()


    const handleSubmit = event => {
        event.preventDefault()
        const title = event.target.title.value
        const detail = event.target.detail.value
        const calendar = event.target.calendar.value
        console.log(title)
        const data = {
            name: title,
            detail: detail,
            calendar: calendar,
            complete: false
        }
        console.log(data)
        const url = `https://rocky-peak-14813.herokuapp.com/task/`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                window.location.reload();
                console.log(data);
            });
    }

    const handleSuccess = (id) => {
        console.log(id)
        const data = {
            complete: true,
        };
        console.log(data);
        const url = `https://rocky-peak-14813.herokuapp.com/task/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                window.location.reload();
                console.log(data);
            });
    }


    return (
        <div className='w-1/2 mx-auto text-center mt-4'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Task title" className="input input-bordered input-lg w-full" />
                <br />
                <input type="text" name="detail" placeholder="Task description" className="input input-bordered input-lg w-full mt-2" />
                <input type="date" name="calendar" placeholder="Task description" className="input input-bordered input-lg w-full mt-2" />
                <br />
                <input type="submit" value="Add Task" className='cursor-pointer bg-cyan-900 w-full py-4 rounded-md mt-2 text-white' />
            </form>
            <div className="card bg-cyan-900 text-neutral-content mx-auto my-16">
                <div className="card-body items-center text-center">
                    {
                        tasks.map(tasks => <div className='' key={tasks._id}>
                            {
                                tasks?.complete === true ? '' : <ul className=' flex'>
                                    <div className="grid items-center gap-2 grid-cols-3">
                                        <li>
                                            <input onClick={() => handleSuccess(tasks._id)} type="checkbox" className="checkbox bg-white" />
                                        </li>
                                        <li><p className='text-xl'>{tasks.name}</p></li>
                                        <Link to={`/update/${tasks._id}`}><button className='btn bg-white w-full text-cyan-900'>Update</button></Link>
                                    </div>
                                </ul>
                            }
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;