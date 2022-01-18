import api from "../services/apiConfig";
import {useEffect, useState} from 'react';
import React from 'react';
import './ScoreListStyle.css'



export default function ScoreList() {


        const [scores, setScores] = useState([])  
    
        useEffect(() => {
            const fetchScores = async () => {
            let res = await api.get();
            console.log(res.data)
            setScores(res);
        };
        fetchScores();

    }, []);
    
    
        return (
            <div className='score-container'>
                <h1>Scores</h1>
                <div className='scores'>
                <ul> 
                    {scores.data && scores?.data?.records.map((score) => {
                        return (
                            <li key={score.id}>
                                <div className='info'>
                                    <h2>{score.fields.name}</h2>
                                    <h3>{score.fields.score}</h3>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                </div>
            </div>
        );
    }