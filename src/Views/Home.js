import '../Assets/Css/Home.css';

function Home() {
    TweenMax.to(".title-1", 2, {
        x: 30,
        opacity: 1,
        ease: Expo.easeInOut
      });
      TweenMax.to(".title-2", 2, {
        delay: 0.2,
        x: -80,
        opacity: 1,
        ease: Expo.easeInOut
      });
      TweenMax.from(".runner", 2, {
        delay: 1.6,
        x: -80,
        opacity: 0,
        ease: Expo.easeInOut
      });
      TweenMax.from(".box-1", 4, {
        delay: 1,
        rotation: 200,
        transformOrigin: "50% 50%",
        opacity: 0,
        x: -180,
        ease: Expo.easeInOut
      });
      
      TweenMax.from(".box-2", 4, {
        delay: 1.2,
        rotation: 90,
        transformOrigin: "50% 50%",
        opacity: 0,
        x: -180,
        ease: Expo.easeInOut
      });
      TweenMax.from(".box-3", 4, {
        delay: 1,
        rotation: 180,
        transformOrigin: "50% 50%",
        opacity: 0,
        x: -180,
        ease: Expo.easeInOut
      });
      TweenMax.from(".pattern", 2, {
        delay: 0.8,
        opacity: 0,
        width: 0,
        ease: Expo.easeInOut
      });
      TweenMax.from(".logo", 2, {
        delay: 1.6,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut
      });
      
      TweenMax.staggerFrom(
        ".menu ul li",
        2,
        {
          opacity: 0,
          delay: 1.6,
          y: 20,
          ease: Expo.easeInOut
        },
        0.1
      );
      
      TweenMax.from(".cart", 2, {
        delay: 1.7,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut
      });
      TweenMax.staggerFrom(
        ".media ul li",
        2,
        {
          delay: 2,
          y: 20,
          opacity: 0,
          ease: Expo.easeInOut
        },
        0.1
      );
      
      TweenMax.from(".content", 2, {
        delay: 2.4,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
      });
      TweenMax.from(".content button", 2, {
        delay: 2.6,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
      });
      

    return (

        <div>
            <div class="wrapper">
                <div class="pattern"></div>
                <div class="nav">
                    <div class="logo">
                        <ion-icon name="heart-half"></ion-icon>
                    </div>
                    <div class="menu">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Products</li>
                        </ul>
                    </div>
                    <div class="cart">
                        <ion-icon name="cart"></ion-icon>
                    </div>

                </div>
                <div class="box-1"></div>
                <div class="box-2"></div>
                <div class="box-3"></div>
                <div class="title-2">EVERYTHING</div>
                <div class="runner">
                    <img src="https://i.postimg.cc/XqWC1HHL/runner.png" alt="" />
                </div>
                <div class="title-1">FAST</div>
                <div class="content">
                    <p>Hello, Everyone this shop will provide you with the latest brands products of healt care.
                        Hope everyone will visit our site, and be healthy. </p>

                    <button>SHOP NOW</button>
                </div>
                <div class="media">
                    <ul>
                        <li>
                            <ion-icon name="logo-facebook"></ion-icon>
                        </li>
                        <li>
                            <ion-icon name="logo-instagram"></ion-icon>
                        </li>
                        <li>
                            <ion-icon name="logo-twitter"></ion-icon>
                        </li>
                        <li>
                            <ion-icon name="logo-youtube"></ion-icon>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;