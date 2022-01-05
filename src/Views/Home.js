import '../Assets/Css/Home.css';

function Home() {

    return (
        <div className='home-container'>
                <div className="container">
                    <form action="">
                        <h1>Boost your Performance</h1>
                        <p>9 weeks program, I'll Teach You 9 Proven Ways to Increase Your Lift </p>
                        <div className="email-box">
                            <i className="fas fa-envelope"></i>
                            <input className="tbox" type="email" name="" value="" placeholder="Enter your email"/>
                                <button className="btn" type="button" name="button">Subscribe</button>
                        </div>
                    </form>
                </div>
            
        </div>
    )
}
export default Home;