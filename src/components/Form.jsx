import React from 'react'
import './FormStyle.css'


export default function Form(props) {
    const {name, score } = props.input;

    return (
        <div className='form'>
        <form>
        <div className='input'>
            <label>Name</label>
            <input
            type='text' 
            value={name} 
            id="name" 
            placeholder="Enter your name here"
            onChange={props.handleTextInput}
             />
            <br />
            <label>Score</label>
            <input
            type='number' 
            value={score} 
            id="score" 
            placeholder="Enter your score here" 
            onChange={props.handleNumberInput}
            />
            {/* <br />
            <label>Time</label>
            <input 
            value={time} 
            id="time" 
            placeholder="Enter your time here" 
            onChange={props.handleTextInput}
            /> */}
        </div>
        <button className='buttons' onClick={props.handleSubmit}>Submit</button>
        </form>

        </div>
    )
}
