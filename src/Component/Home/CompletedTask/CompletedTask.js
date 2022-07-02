import React from 'react';
import useTask from '../../../Hooks/useTask';
import dlt from '../../../images/delete.svg'

const CompletedTask = () => {
    const [tasks, setTask] = useTask()
    console.log(tasks)

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            console.log('delete one', id)
            const url = `https://rocky-peak-14813.herokuapp.com/task/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('Deleted')
                        const remaining = tasks.filter(task => task._id !== id)
                        setTask(remaining);
                    }
                })
        }
    }



    return (
        <div>
            <div className="card bg-cyan-900 text-neutral-content mx-auto my-16 w-1/2">
                <div className="card-body items-center text-center">
                    {
                        tasks.map(tasks => <div className='' key={tasks._id}>
                            {
                                tasks?.complete === true ? <ul className=' flex'>
                                    <div className="grid grid-cols-3 gap-2 items-center">
                                        <li className=''>
                                            {/* <input type="checkbox w-5" className="checkbox bg-white" /> */}
                                        </li>
                                        <li><p className='text-xl'>{tasks.name}</p></li>
                                        <img onClick={() => handleDelete(tasks._id)} src={dlt} className="cursor-pointer w-5" alt="" />
                                    </div>
                                </ul> : ""
                            }
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CompletedTask;