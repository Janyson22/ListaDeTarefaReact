import React, {useState} from "react";
import './Addtask.css'
import Button from "./button";


const Addtask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value)
        
    }
    const handleTaskClic = () => {
        handleTaskAddition(inputData)
        setInputData("")
        
    }
    return (
        <div className="add-task-container">
            <input onChange={handleInputChange}
            value= {inputData}
             className ="add-task-input" type="text" />
            <div className="add-task-button-container">
                <Button onClick={handleTaskClic}>Adicionar</Button>
            </div>
        </div>
    )
}

export default Addtask;