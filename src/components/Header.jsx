import imageLogo from '../../public/investment-calculator-logo.png';

export default function Header(){
    return (
        <div id="header">
            <div className="logo">
                <img src={imageLogo} alt="Logo-app"></img>
            </div>
            <div className="header__main-title">
                <h1>React Investment Calculator</h1>
            </div>
        </div>
    );
}