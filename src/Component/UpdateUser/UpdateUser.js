import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
    const { id } = useParams()
    const [user, setuser] = useState({});
    useEffect(() => {
        const url = `https://rocky-peak-14813.herokuapp.com/task/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setuser(data))
    }, [])

    const handleUpdateTask = event => {
        event.preventDefault();
        const name = event.target.name.value;

        const updatedUser = { name };

        // send data to the server
        const url = `https://rocky-peak-14813.herokuapp.com/task/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Task name changed successfully!!!');
                event.target.reset();
            })
    }


    return (
        <div>
            <div className="card bg-cyan-900 text-neutral-content mx-auto my-16 w-1/2">
                <div className="card-body items-center text-center">
                    <h2>{user.name}</h2>
                    <form onSubmit={handleUpdateTask}>
                        {/* <input type="text" name="name" placeholder='Name' required /> */}
                        <input type="text" name="name" placeholder="Task title" className="input input-bordered input-lg w-full text-black" required />
                        <br />
                        <input type="submit" value="Update Task" className='btn bg-white w-full text-cyan-900 my-4' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;