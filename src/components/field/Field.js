import { useState, useRef, useEffect } from "react";

import Statistic from '../statistic/Statistic';

import './field.scss';

const initText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam saepe quisquam beatae eum impedit laudantium dolores laborum fuga voluptatum, asperiores libero temporibus voluptates consequuntur dolor quia iure, nostrum obcaecati numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit".split("");

const Field = ({ updatePressCounter, updateWrongCounter, updateCntLetter }) => {
    const [currentText, setCurrentText] = useState("");
    const textInputRef = useRef();
    const [carriage, setCarriage] = useState(0);
    const [wrongCounter, setWrongCounter] = useState(0);
    const [pressCounter, setPressCounter] = useState(0);
    const [cntLetter, setCntLetter] = useState(initText[0]);

    console.log("initText[0] ", initText[0]);

    useEffect(() => {
        focusInput();
        updateCntLetter(cntLetter);
    }, []);

    const focusInput = () => {
        textInputRef.current.focus();
    }

    const onChangeInput = (e) => {
        const inputString = e.target.value;
        setCurrentText(inputString);
        compareString(inputString.split(""), initText);
    }

    const compareString = (inputString, stateString) => {
        if (inputString.at(-1) === stateString[carriage]) {
            setCarriage(carriage => carriage + 1);
            updateCntLetter(initText[carriage + 1]);
        } else {
            setWrongCounter(wrongCounter => wrongCounter + 1);
            updateWrongCounter();
        }

        setPressCounter(pressCounter => pressCounter + 1);
        updatePressCounter();
    }

    // добавить useMemo или useCallback
    const renderLetters = () => {
        const res = [];

        console.log('carriage ', carriage);

        for (let i = 0; i < initText.length; i++) {
            if (i === 0) {
                res.push(<span style={{"background-color":"white", "color":"green"}}>{initText[i]}</span>)
            } 
            else {
                res.push(<span style={i < carriage && carriage !== 0 ? {"background-color": "white", "color": "green"} : null}>{initText[i]}</span>)
            }  
        }
        return res;
    }

    let letters = renderLetters();

    return (
        <div className="field">
            <Statistic pressCounter={pressCounter} wrongCounter={wrongCounter} />
            <div type="text" className="input_text">
                {letters}
            </div>
            <input onBlur={focusInput} ref={textInputRef} onChange={e => onChangeInput(e)} autocomplete="off" name="playerInput" />
        </div>
    );
}

export default Field;