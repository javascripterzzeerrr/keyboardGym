import { useState } from "react";

import Field from '../field/Field';
import Keyboard from '../keyboard/Keyboard';
import Timer from '../timer/Timer';
import Result from '../result/Result';

import './main.scss';

const Main = () => {
    const [finishGame, setFinishGame] = useState(false);

    const updateGameProgress = () => {
        setFinishGame(true);
    }

    const renderGame = () => {
        return (
            <>
                <Timer updateGameProgress={updateGameProgress} />
                <Field/>
                <Keyboard/>
            </>
        );
    };

    const content = !finishGame ? renderGame() : <Result/>;

    return (
        <main className="main">
            <div className="main_container">
                {content}
            </div>
        </main>
    );
};

export default Main;