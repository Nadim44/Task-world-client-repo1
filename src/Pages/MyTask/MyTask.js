import React from 'react';
import { useQuery } from '@tanstack/react-query'
import Task from './Task';
import { toast } from 'react-hot-toast';


const MyTask = () => {
    const { data: addTask, refetch } = useQuery({
        queryKey: ['addTask'],
        queryFn: async () => {
            try {
                const res = await fetch('https://task1-server.vercel.app/addTask', {
                    headers: {

                    }
                })
                const data = await res.json();
                return data
            }

            catch (error) {

            }
        }
    })
    const handleDeleteTask = task => {
        // console.log(task)
        fetch(`https://task1-server.vercel.app/addTask/${task._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('Task deleted successfully')
                }
            })
    }


    return (
        <div>
            <h3>My Total Task: {addTask?.length}</h3>
            {
                addTask?.map((myTask, i) => <Task
                    index={i} key={myTask._id}
                    myTask={myTask}
                    successAction={handleDeleteTask}
                    modalData={addTask}
                >
                </Task>)
            }
        </div>
    );
};

export default MyTask;