import { useEffect } from "react";

import './keyboard.scss';

const Keyboard = ({ letter }) => {

    console.log("LETTER => ", letter);

    if (letter === "" || letter === " ") {
        letter = "space"
    } else if (letter === ".") {
        letter = "dot"
    } else if (letter === ",") {
        letter = "comma"
    }

    useEffect(() => {
        const allKeyboard = document.querySelectorAll(`[data-key]`);
        const fillKeyboard = document.querySelector(`[data-key=${letter.toLowerCase()}]`);

        console.log("allKeyboard ", allKeyboard);
        console.log("fillKeyboard ", fillKeyboard);

        allKeyboard.forEach(item => {
            item.classList.remove('active');
        });
        fillKeyboard.classList.add('active');
    }, [letter]);
    
    useEffect(() => {
        const handleClick = e => {
            const liKeyBoard = document.querySelector(`[data-keyboardvalue=${e.code}]`);

            liKeyBoard.classList.add('activeYellow');
            setTimeout(() => {
                liKeyBoard.classList.remove('activeYellow');
            }, 300);
        }

        window.addEventListener('keydown', handleClick);

        return () => window.removeEventListener('keydown', handleClick);
    }, []);

    return (
        <div className="main__content">
            <div className="main__content__keyboard">
                <ul id="keyboard">
                    <li className="symbol" data-keyboardvalue="Backquote"><span className="off">`</span><span className="on">~</span></li>
                    <li className="symbol" data-key="1" data-keyboardvalue="Digit1"><span className="off">1</span><span className="on">!</span></li>
                    <li className="symbol" data-key="2" data-keyboardvalue="Digit2"><span className="off">2</span><span className="on">@</span></li>
                    <li className="symbol" data-key="3" data-keyboardvalue="Digit3"><span className="off">3</span><span className="on">#</span></li>
                    <li className="symbol" data-key="4" data-keyboardvalue="Digit4"><span className="off">4</span><span className="on">$</span></li>
                    <li className="symbol" data-key="5" data-keyboardvalue="Digit5"><span className="off">5</span><span className="on">%</span></li>
                    <li className="symbol" data-key="6" data-keyboardvalue="Digit6"><span className="off">6</span><span className="on">^</span></li>
                    <li className="symbol" data-key="7" data-keyboardvalue="Digit7"><span className="off">7</span><span className="on">&amp;</span></li>
                    <li className="symbol" data-key="8" data-keyboardvalue="Digit8"><span className="off">8</span><span className="on">*</span></li>
                    <li className="symbol" data-key="9" data-keyboardvalue="Digit9"><span className="off">9</span><span className="on">(</span></li>
                    <li className="symbol" data-key="0" data-keyboardvalue="Digit0"><span className="off">0</span><span className="on">)</span></li>
                    <li className="symbol" data-key="-" data-keyboardvalue="Minus"><span className="off">-</span><span className="on">_</span></li>
                    <li className="symbol" data-key="=" data-keyboardvalue="Equal"><span className="off">=</span><span className="on">+</span></li>
                    <li className="delete lastitem" data-keyboardvalue="Backspace">delete</li>
                    <li className="tab" data-keyboardvalue="Tab">tab</li>
                    <li className="letter" data-key="q" data-keyboardvalue="KeyQ">q</li>
                    <li className="letter" data-key="w" data-keyboardvalue="KeyW">w</li>
                    <li className="letter" data-key="e" data-keyboardvalue="KeyE">e</li>
                    <li className="letter" data-key="r" data-keyboardvalue="KeyR">r</li>
                    <li className="letter" data-key="t" data-keyboardvalue="KeyT">t</li>
                    <li className="letter" data-key="y" data-keyboardvalue="KeyY">y</li>
                    <li className="letter" data-key="u" data-keyboardvalue="KeyU">u</li>
                    <li className="letter" data-key="i" data-keyboardvalue="KeyI">i</li>
                    <li className="letter" data-key="o" data-keyboardvalue="KeyO">o</li>
                    <li className="letter" data-key="p" data-keyboardvalue="KeyP">p</li>
                    <li className="symbol" data-key="[" data-keyboardvalue="BracketLeft"><span className="off">{"["}</span><span data-keyboardvalue="{" className="on">{"{"}</span></li>
                    <li className="symbol" data-key="]" data-keyboardvalue="BracketRight"><span className="off">{"]"}</span><span data-keyboardvalue="}" className="on">{"}"}</span></li>
                    <li className="symbol lastitem" data-keyboardvalue="Backslash"><span className="off">\</span><span data-keyboardvalue="=" className="on">|</span></li>
                    <li className="capslock" data-keyboardvalue="CapsLock" >caps</li>
                    <li className="letter" data-key="a" data-keyboardvalue="KeyA">a</li>
                    <li className="letter" data-key="s" data-keyboardvalue="KeyS">s</li>
                    <li className="letter" data-key="d" data-keyboardvalue="KeyD">d</li>
                    <li className="letter" data-key="f" data-keyboardvalue="KeyF">f</li>
                    <li className="letter" data-key="g" data-keyboardvalue="KeyG">g</li>
                    <li className="letter" data-key="h" data-keyboardvalue="KeyH">h</li>
                    <li className="letter" data-key="j" data-keyboardvalue="KeyJ">j</li>
                    <li className="letter" data-key="k" data-keyboardvalue="KeyK">k</li>
                    <li className="letter" data-key="l" data-keyboardvalue="KeyL">l</li>
                    <li className="symbol" data-key=";" data-keyboardvalue="Semicolon"><span className="off">;</span><span className="on">:</span></li>
                    <li className="symbol" data-key="'" data-keyboardvalue="Quote"><span className="off">'</span><span className="on">&quot;</span></li>
                    <li className="return lastitem" data-keyboardvalue="Enter">return</li>
                    <li className="left-shift" data-keyboardvalue="ShiftLeft">shift</li>
                    <li className="letter" data-key="z" data-keyboardvalue="KeyZ">z</li>
                    <li className="letter" data-key="x" data-keyboardvalue="KeyX">x</li>
                    <li className="letter" data-key="c" data-keyboardvalue="KeyC">c</li>
                    <li className="letter" data-key="v" data-keyboardvalue="KeyV">v</li>
                    <li className="letter" data-key="b" data-keyboardvalue="KeyB">b</li>
                    <li className="letter" data-key="n" data-keyboardvalue="KeyN">n</li>
                    <li className="letter" data-key="m" data-keyboardvalue="KeyM">m</li>
                    <li className="symbol" data-key="comma" data-keyboardvalue="Comma"><span className="off">,</span><span className="on" data-keyboardvalue="=" >&lt;</span></li>
                    <li className="symbol" data-key="dot" data-keyboardvalue="Period"><span className="off">.</span><span className="on" data-keyboardvalue="=" >&gt;</span></li>
                    <li className="symbol" data-key="/" data-keyboardvalue="Slash"><span className="off">/</span><span className="on">?</span></li>
                    <li className="right-shift lastitem" data-keyboardvalue="ShiftRight" >shift</li>
                    <li className="space lastitem" data-key="space" data-keyboardvalue="Space" >&nbsp;</li>
                </ul>
            </div>
        </div>
    );
}

export default Keyboard;