import '../Assets/Css/Home.css';

function Home() {

    return (
        <div className='home-container'>
                <div className="container-inner">
                    <form action="">
                        <h1>Boost your Performance</h1>
                        <p>9 weeks program, I'll Teach You 9 Proven Ways to Increase Your Lift </p>
                        <div className="email-box-home">
                            <span className="fas fa-envelope"></span>
                            <input className="tbox-home" type="email" name="" placeholder="Enter your email"/>
                            <button className="btn-home" type="button" name="button-home">Subscribe</button>
                        </div>
                    </form>
                </div>
            
        </div>
    )
}
export default Home;