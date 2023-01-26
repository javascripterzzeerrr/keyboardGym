import { useEffect } from "react";

import './keyboard.scss';

const Keyboard = () => {
    
    useEffect(() => {
        const handleClick = e => {
            const liKeyBoard = document.querySelector(`[data-keyboardvalue=${e.code}]`);
            liKeyBoard.classList.add('active');
            setTimeout(() => {
                liKeyBoard.classList.remove('active');
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
                    <li className="symbol" data-keyboardvalue="Digit1"><span className="off">1</span><span className="on">!</span></li>
                    <li className="symbol" data-keyboardvalue="Digit2"><span className="off">2</span><span className="on">@</span></li>
                    <li className="symbol" data-keyboardvalue="Digit3"><span className="off">3</span><span className="on">#</span></li>
                    <li className="symbol" data-keyboardvalue="Digit4"><span className="off">4</span><span className="on">$</span></li>
                    <li className="symbol" data-keyboardvalue="Digit5"><span className="off">5</span><span className="on">%</span></li>
                    <li className="symbol" data-keyboardvalue="Digit6"><span className="off">6</span><span className="on">^</span></li>
                    <li className="symbol" data-keyboardvalue="Digit7"><span className="off">7</span><span className="on">&amp;</span></li>
                    <li className="symbol" data-keyboardvalue="Digit8"><span className="off">8</span><span className="on">*</span></li>
                    <li className="symbol" data-keyboardvalue="Digit9"><span className="off">9</span><span className="on">(</span></li>
                    <li className="symbol" data-keyboardvalue="Digit0"><span className="off">0</span><span className="on">)</span></li>
                    <li className="symbol" data-keyboardvalue="Minus"><span className="off">-</span><span className="on">_</span></li>
                    <li className="symbol" data-keyboardvalue="Equal"><span className="off">=</span><span className="on">+</span></li>
                    <li className="delete lastitem" data-keyboardvalue="Backspace">delete</li>
                    <li className="tab" data-keyboardvalue="Tab">tab</li>
                    <li className="letter" data-keyboardvalue="KeyQ">q</li>
                    <li className="letter" data-keyboardvalue="KeyW">w</li>
                    <li className="letter" data-keyboardvalue="KeyE">e</li>
                    <li className="letter" data-keyboardvalue="KeyR">r</li>
                    <li className="letter" data-keyboardvalue="KeyT">t</li>
                    <li className="letter" data-keyboardvalue="KeyY">y</li>
                    <li className="letter" data-keyboardvalue="KeyU">u</li>
                    <li className="letter" data-keyboardvalue="KeyI">i</li>
                    <li className="letter" data-keyboardvalue="KeyO">o</li>
                    <li className="letter" data-keyboardvalue="KeyP">p</li>
                    <li className="symbol" data-keyboardvalue="BracketLeft"><span className="off">{"["}</span><span data-keyboardvalue="{" className="on">{"{"}</span></li>
                    <li className="symbol" data-keyboardvalue="BracketRight"><span className="off">{"]"}</span><span data-keyboardvalue="}" className="on">{"}"}</span></li>
                    <li className="symbol lastitem" data-keyboardvalue="Backslash"><span className="off">\</span><span data-keyboardvalue="=" className="on">|</span></li>
                    <li className="capslock" data-keyboardvalue="CapsLock" >caps</li>
                    <li className="letter" data-keyboardvalue="KeyA">a</li>
                    <li className="letter" data-keyboardvalue="KeyS">s</li>
                    <li className="letter" data-keyboardvalue="KeyD">d</li>
                    <li className="letter" data-keyboardvalue="KeyF">f</li>
                    <li className="letter" data-keyboardvalue="KeyG">g</li>
                    <li className="letter" data-keyboardvalue="KeyH">h</li>
                    <li className="letter" data-keyboardvalue="KeyJ">j</li>
                    <li className="letter" data-keyboardvalue="KeyK">k</li>
                    <li className="letter" data-keyboardvalue="KeyL">l</li>
                    <li className="symbol" data-keyboardvalue="Semicolon"><span className="off">;</span><span className="on">:</span></li>
                    <li className="symbol" data-keyboardvalue="Quote"><span className="off">'</span><span className="on">&quot;</span></li>
                    <li className="return lastitem" data-keyboardvalue="Enter">return</li>
                    <li className="left-shift" data-keyboardvalue="ShiftLeft">shift</li>
                    <li className="letter" data-keyboardvalue="KeyZ">z</li>
                    <li className="letter" data-keyboardvalue="KeyX">x</li>
                    <li className="letter" data-keyboardvalue="KeyC">c</li>
                    <li className="letter" data-keyboardvalue="KeyV">v</li>
                    <li className="letter" data-keyboardvalue="KeyB">b</li>
                    <li className="letter" data-keyboardvalue="KeyN">n</li>
                    <li className="letter" data-keyboardvalue="KeyM">m</li>
                    <li className="symbol" data-keyboardvalue="Comma"><span className="off">,</span><span className="on" data-keyboardvalue="=" >&lt;</span></li>
                    <li className="symbol" data-keyboardvalue="Period"><span className="off">.</span><span className="on" data-keyboardvalue="=" >&gt;</span></li>
                    <li className="symbol" data-keyboardvalue="Slash"><span className="off">/</span><span className="on">?</span></li>
                    <li className="right-shift lastitem" data-keyboardvalue="ShiftRight" >shift</li>
                    <li className="space lastitem" data-keyboardvalue="Space" >&nbsp;</li>
                </ul>
            </div>
        </div>
    );
}

export default Keyboard;