import React from 'react';

const Home = () => {
    return (
        <div className='w-1/2 mx-auto text-center h-screen'>
            <form>
                <input type="text" placeholder="Create Your Task" class="input input-bordered input-lg w-full" />
                <br />
                <input type="submit" value="Add Task" className='bg-cyan-900 w-full py-4 rounded-md mt-2 text-white' />
            </form>
        </div>
    );
};

export default Home;