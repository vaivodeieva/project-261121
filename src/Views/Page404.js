import '../Assets/Css/Page404.css';

function Page404() {
    return (
        <div>

            <div className="page-wrapper">
                <div className="circles-layer">
                    <div className="circle -white"></div>
                    <div className="circle -red"></div>
                    <div className="circle -white"></div>
                    <div className="circle -red"></div>
                </div>
                <div className="numbers-layer">
                    <div className="number">4</div>
                    <div className="number">4</div>
                    <div className="number">4</div>
                    <div className="number">4</div>
                    <div className="number">4</div>
                    <div className="number">4</div>
                    <div className="number">4</div>
                    <div className="number">4</div>
                    <div className="number -with-shadow">0</div>
                    <div className="number -with-shadow">0</div>
                    <div className="number -with-shadow">0</div>
                    <div className="number -with-shadow">0</div>
                </div>
                <div className="oops-message">
                    <div className="test">Opps... looks like You got lost</div><a className="button" href="/">Home</a>
                </div>
            </div>

        </div>
    )
}
export default Page404;