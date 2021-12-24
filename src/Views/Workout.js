import '../Assets/Css/Workout.css';

function Workout() {
    return (
        <div className='workout-container'>
            <center>
                <h1>Workout Generator</h1>
            </center>
            <br/>
            <div className="workout-container-inner">
                <input type="text-workout" name="valueId" id="myName" placeholder="Enter Name" />
                <input type="button" id="btn-workout" className="btn" value="Generate" /><br/>
                    <ul id="result-workout">
                        <h4 className='li-h4'>Are you warmed up?</h4>
                        <img className="li-workout" src="http://gdurl.com/WfqX" alt="Crunches" />
                        <img className="li-workout" src="http://gdurl.com/57cs" alt="Pushups" />
                    </ul>
            </div>
        </div>
    )
}
export default Workout;