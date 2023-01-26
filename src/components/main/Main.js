import Field from '../field/Field';
import Keyboard from '../keyboard/Keyboard';

import './main.scss';

const Main = () => {
    return (
        <main className="main">
         <div className="main_container">
            <div className="text">
            </div>
            <Field/>
            <Keyboard/>
         </div>
        </main>

    );
}

export default Main;