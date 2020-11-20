//Import Necessary Packages and Files
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "../css/UserQuizPortal.css";
import { UserContext } from "../context/global";
import { Link } from "react-router-dom";

//Main Function
export default function UserQuizPortal() {
    //Importing Global States
    const {
        score,
        setScore,
        questions,
        setQuestions,
        answer,
        quizId,
        setAnswer,
        setQuizId,
        setUserName,
    } = useContext(UserContext);

    //Local State
    const [resultEnable, setResultEnable] = useState(false);
    const [result, setResult] = useState(false);
    const [yourAnswer, setYourAnswer] = useState("");
    const [buttonClick, setButtonClick] = useState("false");
    const [dataquestion, setdataquestion] = useState([]);

    //Server GET Method ****Request Data to Database****
    useEffect(() => {
        readDataAxios();
        return () => {};
    }, []);
    const readDataAxios = (e) => {
        axios
            .get(
                `https://mohan-test-press.herokuapp.com/Quiz/getData/${quizId}`
            )
            .then((res) => {
                setdataquestion([...res.data]);
            })
            .catch((err) => {
                console.log("Data Not Found" + err);
            });
    };

    //Increase Score recording and Next Question
    const scoreAndNext = (e) => {
        setAnswer(dataquestion[questions].correct);
        setButtonClick("none");
        if (dataquestion[questions].correct == e.target.value) {
            setScore(score + 1);
            setYourAnswer(e.target.value);
        } else setScore(score + 0);
        setYourAnswer(e.target.value);
        setTimeout(() => {
            if (questions < dataquestion.length - 1) {
                setButtonClick("false");
                setQuestions(questions + 1);
            } else setResultEnable(true);
        }, 1000);
    };

    //Clear States
    const clear = () => {
        setScore(0);
        setQuestions(0);
        setAnswer("");
        setUserName("Enter Your Name");
        setQuizId("Enter your Quiz Title or Code or Id");
    };

    //Questions and Options Display
    const QuestionsAnOptions = () => {
        return (
            <div className="pt-2">
                {/* Score Display */}
                {score > (questions + 1) / 2
                    ? setResult("Well Done You are passed")
                    : setResult("Sorry You are Failed")}

                {/* Result Display */}
                {resultEnable ? (
                    <div>
                        <div className="mr-4 result-container-css">
                            <button
                                className="col-12 btn text-left p-2 m-2 btn-overlay text-center result-button-css"
                                onClick={scoreAndNext}
                            >
                                {result} - Your Score is {score}/{questions + 1}
                            </button>
                        </div>
                        <div className="mr-4 result-container-css">
                            <Link to="/">
                                <button
                                    onClick={() => {
                                        clear();
                                    }}
                                    className="col-12 btn text-left p-2 m-2 btn-overlay text-center result-button-css"
                                >
                                    Home Page
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    ""
                )}

                {/* Question And Option Display */}
                {dataquestion.length > 0 ? (
                    <div>
                        <div className="d-flex row text-left">
                            <div className="col-12">
                                <div className="question-css">
                                    {questions + 1}.{" "}
                                    {dataquestion[questions].question}
                                </div>
                            </div>
                        </div>
                        <div className="mr-4 option-css">
                            <button
                                value={dataquestion[questions].option1}
                                className="col-12 btn text-left p-2 m-2 btn-overlay quiz-button"
                                onClick={scoreAndNext}
                                style={{ pointerEvents: buttonClick }}
                            >
                                {dataquestion[questions].option1}
                            </button>
                            <button
                                value={dataquestion[questions].option2}
                                className="col-12 btn text-left p-2 m-2 btn-overlay quiz-button"
                                onClick={scoreAndNext}
                                style={{ pointerEvents: buttonClick }}
                            >
                                {dataquestion[questions].option2}
                            </button>
                            <button
                                value={dataquestion[questions].option3}
                                className="col-12 btn text-left p-2 m-2 btn-overlay quiz-button"
                                onClick={scoreAndNext}
                                style={{ pointerEvents: buttonClick }}
                            >
                                {dataquestion[questions].option3}
                            </button>
                            <button
                                value={dataquestion[questions].option4}
                                className="col-12 btn text-left p-2 m-2 btn-overlay quiz-button"
                                onClick={scoreAndNext}
                                style={{ pointerEvents: buttonClick }}
                            >
                                {dataquestion[questions].option4}
                            </button>
                        </div>
                    </div>
                ) : (
                    ""
                )}

                {/* Instant Display */}
                <div className="mr-4 option-css">
                    <button
                        className="col-12 btn text-left m-2 btn-overlay result-button-css"
                        onClick={scoreAndNext}
                    >
                        Your Answer is
                        <p className="p-display-css">{yourAnswer}</p>
                        Currect Answer is
                        <p className="p-display-css">{answer}</p>
                        Your Score
                        <p className="p-display-css">{score}</p>
                    </button>
                </div>
            </div>
        );
    };

    //Main Return Statement
    return (
        <div className="container-fluid container-css">
            <p className="p-2 p-css">Welcome to Quiz Assesment</p>
            <p className="p-2 p-css">
                Total Questions is {dataquestion.length}
            </p>
            <QuestionsAnOptions />
        </div>
    );
}
