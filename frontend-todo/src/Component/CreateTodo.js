import React from 'react'
import { Form, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function CreateTodo() {

    const [todo, setTodo] = useState({
        "description": "",
        "responsibility": "",
        "task": "",
        "priority": "",
        "complete": false
    });

    const handleRadioChange = (value) => {
        setTodo(prev => ({ ...prev, priority: value }));
    };

    const handleDescription = (value) => {
        setTodo(prev => ({ ...prev, description: value }));
    }

    const handleResponsibility = (value) => {
        setTodo(prev => ({ ...prev, responsibility: value }));
    }

    const handleTask = (value) => {
        setTodo(prev => ({ ...prev, task: value }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const data=await axios.post("http://localhost:8080/todo/add", todo)
        setTodo({
            "description": "",
            "responsibility": "",
            "task": "",
            "priority": "",
            "complete": false
        });
        console.log(data);
    }

    return (
        <>
            <h1 className='Heading' style={{ textAlign: 'center', marginTop: '2rem', }}>CREATE YOUR TODO</h1>
            <div style={{ padding: '2.5rem' }} >
                <Form method='post'>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Task"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Specify Your Task" value={todo.task} onChange={(e) => { handleTask(e.target.value) }} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Responsibility(In one word)"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Specify Your Responsibility" value={todo.responsibility} onChange={(e) => { handleResponsibility(e.target.value) }} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Description(In Short)"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Describe your Task" value={todo.description} onChange={(e) => { handleDescription(e.target.value) }} />
                    </FloatingLabel>

                    <Form.Check
                        inline
                        label="low"
                        
                        name="group1"
                        type="radio"
                        id="inline-radio-low"
                        checked={todo.priority === 'low'}
                        onChange={() => handleRadioChange('low')}
                    />

                    <Form.Check
                        inline
                        label="medium"
                        // value="medium"
                        name="group1"
                        type="radio"
                        id="inline-radio-medium"
                        checked={todo.priority === 'medium'}
                        onChange={() => handleRadioChange('medium')}
                    />

                    <Form.Check
                        inline
                        label="high"
                        // value="high"
                        name="group1"
                        type="radio"
                        id="inline-radio-high"
                        checked={todo.priority === 'high'}
                        onChange={() => handleRadioChange('high')}
                    />
                    <button class="submitBtn" onClick={(e) => { onSubmit(e) }}>
                        Submit
                        <svg fill="white" viewBox="0 0 448 512" height="1em" class="arrow"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                    </button>
                </Form>
            </div>
        </>
    )
}

export default CreateTodo;