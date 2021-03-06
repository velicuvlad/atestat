import React from 'react'

class TopBar extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="menu-placeholder">
                        <div className="menu-desktop">
                            <div className="menu--text desktop">
                                <ul className="navigation">
                                    <li><a href="index.php">Home</a></li>
                                    <li><a href="content_newest.php">Articles</a></li>
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