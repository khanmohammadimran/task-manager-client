import React from 'react';
import useTask from '../../Hooks/useTask';
import { Link } from 'react-router-dom'

const ToDo = () => {
    const [tasks, setTask] = useTask()
    console.log(tasks)
    return (
        <div className='flex justify-center py-16'>
            <div className="card bg-cyan-900 text-neutral-content mx-auto w-1/2">
                <div className="card-body items-center text-center">
                    <h2 className="card-title py-4 text-2xl">See your upcoming task</h2>

                    {
                        tasks.map(tasks => <div className='flex' key={tasks._id}>
                            <div className='pr-4'>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <p className='text-xl'>{tasks.name}</p>
                                <Link to={`/update/${tasks._id}`}><button className='btn bg-white w-full text-cyan-900'>Update</button></Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ToDo;