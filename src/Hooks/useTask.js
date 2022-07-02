import React, { useEffect, useState } from 'react';

const useTask = () => {
    const [tasks, setTask] = useState([]);
    useEffect(() => {
        fetch("https://rocky-peak-14813.herokuapp.com/task/")
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])
    return [tasks, setTask]
};

export default useTask;