import './welcome.scss';

const Welcome = () => {

    return (
        <div class="welcome">
            <div class="content">
                <div class="hello">
                    <h1>Добро пожаловать в клавиатурный тренажёр</h1>
                    <p>Здесь можно прокачать скорость своей печати</p>
                </div>
                <div class="planning">
                    <p>Чтобы начать нажмите на любую кнопку</p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;