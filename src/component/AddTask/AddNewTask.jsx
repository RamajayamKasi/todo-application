import React, { useState } from 'react';
import InputTag from '../InputTag';
import PrimaryButton from '../PrimaryButton';
import SweetAlert2 from 'react-sweetalert2';
import TaskListView from './TaskListView';

function AddNewTask() {
    const [showAlert, setShowAlert] = useState(false);
    const [taskList, setTaskList] = useState([]); // Initialize as an array
    const addTask = (event) => {
        event.stopPropagation();
        const task_value = document.getElementById('task_value').value.trim();

        if (task_value === '') {
            setShowAlert({
                show: true,
                icon: "error",
                title: "Input Required",
                text: "Please enter a valid task.",
                onConfirm: () => setShowAlert(false),
                onCancel: () => setShowAlert(false),
                allowOutsideClick: false,
            });
        } else {
            console.log('Task Added:', task_value);

            // Add new task to the list, make sure you're using correct key names
            setTaskList(prevTasks => [
                ...prevTasks,
                { task: task_value, status: 'Open' }
            ]);
        }
    };

    return (
        <div className="container w-75">
            <h1 className="text-center">Allote Task</h1>
            <div className="d-flex gap-2">
                <InputTag
                    data={['text', 'Enter the task.', 'task_value', '', 'form-control']}
                />
                <PrimaryButton
                    text="Add Task"
                    onClick={addTask}
                    class="w-25"
                />
            </div>
            <div className="TaskListView w-100 mt-2 mb-2">
                <div className="TaskListRow">
                    <div className="row align-items-baseline text-center">
                        <div className="col-1">S.No.</div>
                        <div className="col-7">Task</div>
                        <div className="col-2">Status</div>
                        <div className="col-2">Action</div>
                    </div>
                    {taskList.map((data, index) => (
                        <TaskListView 
                            key={index} 
                            SNo={index + 1} 
                            task={data.task}  // Use 'task' here
                            statusText={data.status} // Use 'status' here
                        />
                    ))}
                </div>
            </div>
            <SweetAlert2
                {...showAlert}  // This will show the SweetAlert
            />
        </div>
    );
}

export default AddNewTask;
