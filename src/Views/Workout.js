import '../Assets/Css/Workout.css';

function Workout() {

    return (
        <div>
            <center>
                <h1>Workout Generator</h1>
            </center>
            <br />
            <div className="container">
                <input type="text" name="valueId" id="myName" placeholder="Enter Name" />
                <input type="button" id="myButton" className="btn" value="Generate" /><br/>
                    <ul id="result">
                        <h4>Are you warmed up?</h4>
                        <img className="workout" src="http://gdurl.com/WfqX" alt="Crunches" />
                        <img className="workout" src="http://gdurl.com/57cs" alt="Pushups" />
                    </ul>
            </div>

        </div>
    )
}

export default Workout;