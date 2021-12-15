import '../Assets/Css/Header.css';
function Header() {
    return (
        <div>
            <div className="containers header-container">
                <ul className="list">
                    <li className="item-list">
                        <a className="item-link l6" href="#">
                            <div className="item-icon-6"><i className="fas fa-home icon"></i></div>
                            <p className="item-text-6">Home</p>
                        </a>
                    </li>
                    <li className="item-list">
                        <a className="item-link l6" href="#">
                            <div className="item-icon-6"><i className="fas fa-search icon"></i></div>
                            <p className="item-text-6">Search</p>
                        </a>
                    </li>
                    <li className="item-list">
                        <a className="item-link l6" href="#">
                            <div className="item-icon-6"><i className="fas fa-fire icon"></i></div>
                            <p className="item-text-6">Workout</p>
                        </a>
                    </li>
                    <li className="item-list">
                        <a className="item-link l6" href="#">
                            <div className="item-icon-6"><i className="fas fa-bell icon"></i></div>
                            <p className="item-text-6">Notification</p>
                        </a>
                    </li>
                    <li className="item-list">
                        <a className="item-link l6" href="#">
                            <div className="item-icon-6"><i className="fas fa-cog icon"></i></div>
                            <p className="item-text-6">Settings</p>
                        </a>
                    </li>
                    </ul>
            </div>
            </div>
            )
}
            export default Header;