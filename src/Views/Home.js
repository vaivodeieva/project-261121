import '../Assets/Css/Home.css';
import $ from 'jquery';

function Home() {
    $("#main-section").slider({
        type: "columns",
        count: 1
    });

    return (

        <div>
            <div id='main-section' class='' data-title='Sports Fields'>
                <div class='field soccer' data-title="Soccer">
                    <div class='inner'>
                        <div class='lines'>
                            <div class='corners'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class='middle-line'>
                                <span></span>
                            </div>
                            <div class='left-side'>
                                <div class='penalty-area'>
                                    <span class='penalty-ring'></span>
                                </div>

                            </div>
                            <div class='right-side'>
                                <div class='penalty-area'>
                                    <span class='penalty-ring'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='field futsal' data-title="Futsal">
                    <div class='inner'>
                        <div class='lines'>
                            <div class='corners'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class='middle-line'>
                                <span></span>
                            </div>
                            <div class='left-side'>
                                <div class='penalty-area'></div>
                                <span class='middle-dots'></span>
                            </div>
                            <div class='right-side'>
                                <div class='penalty-area'> </div>
                                <span class='middle-dots'></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='field basketball' data-title="Basketball">
                    <div class='inner'>
                        <div class='lines'>
                            <div class='middle-line'>
                                <span></span>
                            </div>
                            <div class='left-side'>
                                <div class='penalty-area'>
                                    <div class='external-curve'></div>
                                    <div class='internal'></div>
                                    <div class='pentalty-ring'></div>
                                </div>
                            </div>
                            <div class='right-side'>
                                <div class='penalty-area'>
                                    <div class='external-curve'></div>
                                    <div class='internal'></div>
                                    <div class='pentalty-ring'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='field handball' data-title="Handball">
                    <div class='inner'>
                        <div class='lines'>
                            <div class='middle-line'></div>
                            <div class='left-side'>
                                <div class='penalty-area'>
                                    <div class='external-curve'></div>
                                    <div class='internal-curve'></div>
                                </div>
                            </div>
                            <div class='right-side'>
                                <div class='penalty-area'>
                                    <div class='external-curve'></div>
                                    <div class='internal-curve'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='field tennis' data-title="Tennis">
                    <div class='inner'>
                        <div class='lines'>
                            <div class='middle-line'></div>
                            <div class='left-side'>
                            </div>
                            <div class='right-side'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;