import { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, LabelList } from 'recharts';
import axios from 'axios';
import './api';
import './App.css';

const resultColor = {
    correct: '#00e676',
    wrong: '#ff1744',
    skipped: '#00b0ff',
};

const levelTitle = ['', 'Easy', 'Medium', 'Hard', 'Expert'];

function App() {
    const [data, setData] = useState([]);
    const [step, setStep] = useState(0);
    const [selected, setSelected] = useState(0);
    const [result, setResult] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get('/quiz')
            .then((res) => {
                setData(res.data);
                // console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const handleNext = () => {
        setResult([
            ...result,
            {
                index: step + 1,
                ...data[step],
                selected,
                result: data[step].answers[selected] === data[step].correctAnswer ? 'correct' : 'wrong',
            },
        ]);
        setStep(step + 1);
        setSelected(0);
    };

    const handleSkip = () => {
        setResult([
            ...result,
            {
                index: step + 1,
                ...data[step],
                selected: -1,
                result: 'skipped',
            },
        ]);
        setStep(step + 1);
    };

    return (
        <div className="App">
            <h1 className="title">React Quiz</h1>
            <hr />
            {data.length > 0 && step < data.length ? (
                <>
                    <div className="quiz-header">
                        <p className="quiz-counter">Question {step + 1} out of 10</p>
                        <p className="quiz-level">Level: {levelTitle[data[step].level]}</p>
                    </div>
                    <div className="quiz-content">
                        <h2 className="quiz-question">{data[step].question}</h2>
                        <div className="quiz-answer-wrapper">
                            {data[step].answers.length > 0 &&
                                data[step].answers.map((item, index) => (
                                    <p key={index} className="quiz-answer-item" onClick={() => setSelected(index)}>
                                        <input type="radio" checked={index === selected} readOnly />
                                        <span>{item}</span>
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div className="quiz-action">
                        <button onClick={handleSkip}>Skip</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </>
            ) : (
                <div>
                    <h2>Result</h2>
                    <BarChart width={800} height={400} data={result} margin={{ top: 20 }}>
                        <XAxis dataKey="index" />
                        <YAxis tickFormatter={(value) => levelTitle[value]} />
                        <Bar dataKey="level">
                            {result.map((entry, index) => (
                                <>
                                    <Cell key={`cell-${index}`} fill={resultColor[entry.result]} />
                                    <LabelList dataKey="result" position="top" style={{ fontSize: 16 }} />
                                </>
                            ))}
                        </Bar>
                    </BarChart>
                </div>
            )}
        </div>
    );
}

export default App;
