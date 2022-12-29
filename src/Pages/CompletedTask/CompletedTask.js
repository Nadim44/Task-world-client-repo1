import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-hot-toast';
import AllTask from './AllTask';

const CompletedTask = () => {
    const { data: addTask, refetch } = useQuery({
        queryKey: ['addTask'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/addTask', {
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
        fetch(`http://localhost:5000/addTask/${task._id}`, {
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
            {
                addTask?.map((myTask, i) =>
                    <AllTask
                        index={i} key={myTask._id}
                        myTask={myTask}
                        successAction={handleDeleteTask}
                        modalData={addTask}
                    ></AllTask>
                )
            }
        </div>
    );
};

export default CompletedTask;