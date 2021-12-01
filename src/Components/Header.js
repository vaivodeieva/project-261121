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
	<nav id="main-navbar" class="navbar navbar-default navbar-fixed-top">
		<div class="container navbar-container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#"></a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav navbar-right">
					<li><a href="#">Random</a></li>
					<li><a href="#about">Happiness</a></li>
					<li><a href="#portfolio">Hacking</a></li>
					<li><a href="#contact">News</a></li>
					<li><a href="#blog">Technology</a></li>
				</ul>
			</div>
			<div class="top-social">
				<ul id="top-social-menu">
					<li><a href="#"><i class="fa fa-twitter"></i></a></li>
					<li><a href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Investors</a></li>
				</ul>
			</div>
		</div>
	</nav>
</header>

{/* <section class="full-width-img">

</section> */}

        </div >
    )
}

export default Header;