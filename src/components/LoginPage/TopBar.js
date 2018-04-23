import React from "react";

class TopBar extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="menu-placeholder">
                        <div className="menu-desktop">
                            <div className="menu--text desktop">
                                <ul className="navigation">
                                    <li><a href="index.php">Acasa</a></li>
                                    <li><a href="content.php">Jocuri</a></li>
                                    <li><a href="faq.php">Despre noi</a></li>
                                    <li><a href="login.php">Login</a></li>
                                    <li><a href="register.php">Signup</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBar