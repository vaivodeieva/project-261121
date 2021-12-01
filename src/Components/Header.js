import '../Assets/Css/Header.css';
import $ from 'jquery';

function Header() {

    $(window).scroll(function () {
        var sc = $(window).scrollTop()
        if (sc > 150) {
            $("#main-navbar").addClass("navbar-scroll")
        }
        else {
            $("#main-navbar").removeClass("navbar-scroll")
        }
    });

    return (

        <div>
            <header>
                <nav id="main-navbar" className="navbar navbar-default navbar-fixed-top">
                    <div className="container navbar-container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#"></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">Random</a></li>
                                <li><a href="#about">Happiness</a></li>
                                <li><a href="#portfolio">Hacking</a></li>
                                <li><a href="#contact">News</a></li>
                                <li><a href="#blog">Technology</a></li>
                            </ul>
                        </div>
                        <div className="top-social">
                            <ul id="top-social-menu">
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Investors</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* <section className="full-width-img">

</section> */}

        </div >
    )
}

export default Header;