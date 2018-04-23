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
                                    <li><a href="indexlogged.php">Acasa</a></li>
                                    <li><a href="content_newest.php">Articole</a></li>
                                    <li><a href="content.php">Articolele mele</a></li>
                                    <li><a href="includes/logout.php">Logout</a></li>
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