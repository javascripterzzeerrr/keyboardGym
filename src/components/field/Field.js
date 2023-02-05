import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as fieldSelectors from "../../selectors/index";
import {
    updateCurrentText,
    changeCarriage,
    changeWrongCounter,
    updatePressCounter,
    updateCntLetter
} from '../../actions/index';

import Statistic from '../statistic/Statistic';

import './field.scss';

const initText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam saepe quisquam beatae eum impedit laudantium dolores laborum fuga voluptatum, asperiores libero temporibus voluptates consequuntur dolor quia iure, nostrum obcaecati numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit".split("");

const Field = () => {
    const carriage = useSelector(fieldSelectors.carriage);
    const wrongCounter = useSelector(fieldSelectors.wrongCounter);
    const pressCounter = useSelector(fieldSelectors.pressCounter);

    const dispatch = useDispatch();

    const textInputRef = useRef();

    useEffect(() => {
        focusInput();
    }, []);

    const focusInput = () => {
        textInputRef.current.focus();
    }

    const onChangeInput = (e) => {
        const inputString = e.target.value;
        dispatch(updateCurrentText(inputString))
        compareString(inputString.split(""), initText);
    }

    const compareString = (inputString, stateString) => {
        if (inputString.at(-1) === stateString[carriage]) {
            dispatch(changeCarriage())
            dispatch(updateCntLetter(initText[carriage + 1]))
        } else {
            dispatch(changeWrongCounter())
        }
        dispatch(updatePressCounter())
    }

    // добавить useMemo или useCallback
    const renderLetters = () => {
        const res = [];

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