import React from 'react'
import TopBar from './TopBar'

var Content = React.createClass({
    postCategory: function (category_id) {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("category_id", category_id);
        } else {
            alert("Please use a browser that supports LocalStorage.");
        }
    },
    render() {
        return (
            <div className="DOM">
                <TopBar/>
                <div className="Title">
                    <p>Personal Blog</p>
                </div>

                <div className="container">
                    <div className="content">
                        <p >Bine ai venit!</p>
                        <p className="p-text">Bine ai venit pe site-ul nostru. Daca nu esti inregistrat deja, te rugam
                            sa o faci. Poti
                            incepe chiar acum sa
                            cauti articole care te-ar interesa</p>
                        <button type="button" className="btn btn-primary">
                          <a href="content_newest.php"
                          className="link-on-button">Vezi toate articolele</a>
                        </button>
                    </div>
                    <div className="categories">
                        <div className="categories_content"><p>Categorii de articole</p>
                            <ul>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('1')}}><li>Places</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('2')}}><li>Food</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('3')}}><li>News</li></a>
                                <a href="content_filtered.php" onClick={()=> {this.postCategory('4')}}><li>Culture</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="newest">
                    <p>Cele mai noi articole</p></div>
                <div className="">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default Content