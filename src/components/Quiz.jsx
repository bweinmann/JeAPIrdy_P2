import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FinalScreen from './FinalScreen';
import './QuizStyle.css';



const Quiz = () => {

    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [score, setScore] = useState(0);

    const randomize = (content) => content.sort(() => Math.random() - 0.5);

    const choice = (event) => {

        let userAnswer = event.target.outerText;

        if (quiz[number].answer === userAnswer) setScore(score + 1);
        setNumber(number + 1);
    }

    useEffect(() => {

        axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
            .then(res => {
                setQuiz(res.data.results.map(item => (

                    {
                        question: item.question,
                        options: randomize([...item.incorrect_answers, item.correct_answer]),
                        answer: item.correct_answer
                    }

                )));
            })
            .catch(err => console.error(err))

    }, []);


    return (
        <div className='window'>
            { quiz[number] &&

                <>
                    <div className='question' dangerouslySetInnerHTML={{ __html: quiz[number].question }}></div>

                    <div className='options'>
                        {quiz[number].options.map((item, index) => (
                            < div className='type' key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={choice}></div>
                        ))}
                    </div>
                </>

            }
            {
                number === 10 && <FinalScreen score={score} />
            }
        </div>
    )
}

export default Quiz