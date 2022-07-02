import React, { useRef, useState } from 'react';

const EditModal = ({ tasks }) => {
    const { name, detail, calendar, _id } = tasks
    const title = useRef('')
    const description = useRef('')
    const showDate = useRef('')
    const [updateId, setUpdateId] = useState('');


    const handleSubmit = event => {
        event.preventDefault()
        console.log(updateId)



        const data = {
            name: title.current.value,
            detail: description.current.value,
            calendar: showDate.current.value,
            complete: false
        }

        console.log(data)

        const id = updateId._id
        // const url = `https://rocky-peak-14813.herokuapp.com/task//${updateId._id}`;
        // fetch(url, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         window.location.reload();
        //         console.log(data);
        //     });
    }


    return (
        <div>
            <input type="checkbox" id="imran" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="imran" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="title" ref={title} defaultValue={name} placeholder="Task title" className="input input-bordered input-lg w-full text-black" />
                        <br />
                        <input type="text" name="detail" ref={description} defaultValue={detail} placeholder="Task description" className="input input-bordered input-lg w-full mt-2 text-black" />
                        <input type="date" name="calendar" ref={showDate} defaultValue={calendar} placeholder="Task description" className="input input-bordered input-lg w-full mt-2 text-black" />
                        <br />
                        <input onClick={() => setUpdateId(_id)} type="submit" defaultValue="Add Task" className='cursor-pointer bg-cyan-900 w-full py-4 rounded-md mt-2 text-white' />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default EditModal;