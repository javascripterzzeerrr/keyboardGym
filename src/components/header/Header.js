import './header.scss';

const Header = () => {
    return (
       <header className="header">
         <div className="header_container">
            <div className="header_content">
                <h1 className="title">
                    Клавиатурный тренажер - прокачай скорость печати
                </h1>
            </div>
         </div>
        </header>
    );
}

export default Header;