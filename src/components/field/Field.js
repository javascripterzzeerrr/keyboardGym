import { useState, useRef, useEffect } from "react";

import Statistic from '../statistic/Statistic';

import './field.scss';

const Field = () => {
    const [currentText, setCurrentText] = useState("");
    const textInputRef = useRef();
    const [carriage, setCarriage] = useState(0);
    const [wrongCounter, setWrongCounter] = useState(0);
    const [pressCounter, setPressCounter] = useState(0);

    const initText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam saepe quisquam beatae eum impedit laudantium dolores laborum fuga voluptatum, asperiores libero temporibus voluptates consequuntur dolor quia iure, nostrum obcaecati numquam".split("");

    useEffect(() => {
        focusInput();
    }, []);

    const focusInput = () => {
        textInputRef.current.focus();
    }

    const onChangeInput = (e) => {
        const inputString = e.target.value
        console.log(inputString);
        setCurrentText(inputString);
        compareString(inputString.split(""), initText);
    }

    const compareString = (inputString, stateString) => {
        if (inputString.at(-1) === stateString[carriage]) {
            setCarriage(carriage => carriage + 1);
        } else {
            setWrongCounter(wrongCounter => wrongCounter + 1);
        }

        setPressCounter(pressCounter => pressCounter + 1);
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