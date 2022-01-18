import Form from './Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './NewScoreStyle.css'
import  api  from '../services/apiConfig';


const default_input = {
    name: "",
    score: "",
}

export default function NewScore() {


    const [input, setInput] = useState(default_input)

    const navigate = useNavigate();

    const handleTextInput = (e) => {
        
        setInput((prevInput) => ({
            ...prevInput,
            name: e.target.value,
        }))
    }

    const handleNumberInput = (e) => {
      
        setInput((prevInput) => ({
          ...prevInput,
          score: `${+e.target.value}`,
        }));
      };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input);
        const fields = input;
        const res = await api.post("", {fields} );
        console.log(res.data)
        navigate('/scores')
    };

    return (
        <div className='form'>
            Add your score
            <Form 
            input={input} 
            handleTextInput={handleTextInput}
            handleNumberInput={handleNumberInput}
            handleSubmit={handleSubmit}
            />
        </div>
    )
}

