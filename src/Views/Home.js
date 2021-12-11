function Home() {

    return (

        <div className="home-container">
            <div className="container">
                <div className="titular">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80" alt="Students gathered around a table, laughing" className="bg" />
                    <button className="btntop">Login</button>
                    <p className="tagline">Discover. Connect. Inspire.</p>
                    <p className="subtitle">Join us to be a part of a community</p>
                    <button className="btn">Get Started</button>
                </div>
                <div className="context">
                    <br /><br />
                    <h1>Discover new things</h1>
                    <center><p className="line"></p></center>
                    <p>Meet new people, explore new skills, and pursue your passions - together. <br />With so much to explore, we help empower you to accomplish real growth.</p>
                </div>

                <div className="area" >
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >

                <div className="gallery">
                    <h1>Explore all possibilities...</h1>
                    <div className="grid">
                        <img src="https://images.unsplash.com/photo-1490187763999-9f273a5b7516?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
                        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
                        <img src="https://images.unsplash.com/photo-1551845811-1539fc1f4812?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" />
                        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" />
                    </div>
                    <footer className="footer_banner">
                    </footer>
                </div>
            </div>

        </div>
    )
}

export default Home;