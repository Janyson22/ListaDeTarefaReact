import React, { useState } from 'react';
import './App.css'
import { v4 as uuid4 } from 'uuid';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TaskDetails from './components/TaskDetails';

import Header from './components/Header';
import Tasks from './components/Tasks';
import Addtask from './components/Addtask'

const App = () => {
  // const message = 'Hello World!!'
  const [tasks, setTasks] = useState([
    {
    id:1, 
    title: 'Estudar Programação',
    completed: false,  
    },
    {
    id: 2,
    title: 'Ler livros',
    completed: false,
    }])

    const handleTaskClick = (taskId) => {
      const newTask = tasks.map((task) => {
        if(task.id === taskId) 
        return{ ...task, completed: !task.completed}
        return task
      } )

      setTasks(newTask)
    }

    const handleTaskAddition = (taskTitle) => {
      const newTask = [
        ...tasks,
         {  
          title: taskTitle,
          id: uuid4(),
          completed: false
        },
      ];

    setTasks(newTask)

    }

    const handleTaskDeletion = (taskId) => {
        const newTask = tasks.filter((task) => {
          return task.id !== taskId
        })
    setTasks(newTask)
    }

  return (
          <Router>
              <div className="container">
                <Routes>
                  <Header/>
                    <Route path="/"  element={
                      () => (
                          <>
                          <Addtask handleTaskAddition={handleTaskAddition}/>
                          <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
                          </>
                      )}
                    />
                </Routes>
              </div>
          </Router>
        )
}

export default App;
