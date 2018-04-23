import React from "react";

class Middle extends React.Component {
    render() {
        return (
            <div className="faq-middle">
                <div className="main-upper-noFlex">
                    <h1>Common questions</h1>
                    <div className="black">
                        <p>Why us?</p>
                        <span>We share our everyday experience online and help others to make their day better.</span>
                    </div>
                    <div className="white">
                        <p>Why are we different?</p>
                        <span>Like Facebook, we have our news so i can be up-to-date with everything new. Moreover, its user friendly.</span>
                    </div>
                    <div className="black">
                        <p>How can u start?</p>
                        <span>It's simple. Create an account <a
                            href="register.php"
                            target="_blank">here</a>
                .</span>
                    </div>
                    <div className="white">
                        <p>I don't know how to add a memo.</p>
                        <span>After you log in,in the top right corner you will see Admin Articles button
                <a href="content.php" target="_blank"> Admin Articles</a>
</span>
                    </div>
                    <div className="black">
                        <p>I'm on the page <a href="content.php" target="_blank">Admin Articles </a>and i can't add any.</p>
                        <span>Check if you are logged in again.</span>
                    </div>
                    <div className="white">
                        <p>The page is not loading</p>
                        <span>Please try to reload. It may be caused by your browser if it doesn't support either Javascript or localStorage.</span>
                    </div>
                    <div className="black">
                        <p>Picture not shown.</p>
                        <span>Try to download the picture and upload it on
                <a href="http://imgur.com/" target="_blank"> http://imgur.com </a>
                ( is free ).
                </span>
                    </div>
                    <div className="black">
                        <p>I can't see my name in the post.</p>
                        <span>We know about that. The fix coming soon.</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Middle