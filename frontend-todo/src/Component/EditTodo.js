import React, { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


function EditTodo() {
    const [data, setData] = useState({
        description: "",
        responsibility: "",
        task: "",
        priority: "",
        complete: false
    });
    const navigate=useNavigate();
    const params = useParams();

    useEffect(() => {
        function fetch() {
             axios.get('https://shivtodo.onrender.com/todo/' + params.id)
                .then(response => {setData({description: response.data[0].description, responsibility: response.data[0].responsibility, task: response.data[0].task, priority: response.data[0].priority, complete: response.data[0].complete})
                    console.log(response.data)}
                )
                .catch((err => console.log(err)));

        }

        fetch();
    }, [])

    // console.log(data)


    const handleRadioChange = (value) => {
        setData(prev => ({ ...prev, priority: value }));
    };

    const handleComplete = (value) => {
        setData(prev => ({ ...prev, complete: value }));

    };

    const handleDescription = (value) => {
        setData(prev => ({ ...prev, description: value }));

    }

    const handleResponsibility = (value) => {
        setData(prev => ({ ...prev, responsibility: value }));

    }

    const handleTask = (value) => {
        setData(prev => ({ ...prev, task: value }));

    }



    const onSubmit = async (e) => {
        e.preventDefault();
            console.log(data);
          const resp = axios.patch("https://shivtodo.onrender.com/todo/update/" + params.id , data);
          console.log(resp);
            navigate('/');
    }
    return (
        <>
            <h1 className='Heading' style={{ textAlign: 'center', marginTop: '2rem', }}>UPDATE YOUR TODO</h1>
            <div style={{ padding: '2.5rem' }} >
                <Form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Task"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Specify Your Task" value={data.task} onChange={(e) => { handleTask(e.target.value) }} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Responsibility(In one word)"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Specify Your Responsibility" value={data.responsibility} onChange={(e) => { handleResponsibility(e.target.value) }} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Description(In Short)"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Describe your Task" value={data.description} onChange={(e) => { handleDescription(e.target.value) }} />
                    </FloatingLabel>

                    <Form.Check
                        inline
                        label="low"

                        name="group1"
                        type="radio"
                        id="inline-radio-low"
                        checked={data.priority === 'low'}
                        onChange={() => handleRadioChange('low')}
                    />

                    <Form.Check
                        inline
                        label="medium"
                        // value="medium"
                        name="group1"
                        type="radio"
                        id="inline-radio-medium"
                        checked={data.priority === 'medium'}
                        onChange={() => handleRadioChange('medium')}
                    />

                    <Form.Check
                        inline
                        label="high"
                        // value="high"
                        name="group1"
                        type="radio"
                        id="inline-radio-high"
                        checked={data.priority === 'high'}
                        onChange={() => handleRadioChange('high')}
                    />

                    <Form.Check
                       
                        label="complete"
                        id="complete"
                        checked={data.complete === true}
                        onChange={() => handleComplete(!data.complete)}
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

export default EditTodo