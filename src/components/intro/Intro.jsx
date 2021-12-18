import "./intro.css";
// import Me from "../../img/Me.png"

const Intro = () => {
    return (
        <div>
            <div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-intro" >Hello, My name is</h2>
                        <h1 className="i-name">Tushar</h1>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item" >ReactJs Developer</div>
                                <div className="i-title-item">Frontend Developer</div>
                                <div className="i-title-item">Full Stack Developer</div>
                                <div className="i-title-item">Web Developer</div>
                                <div className="i-title-item">Photographer</div>
                            </div>
                        </div>
                        <p className="i-desc">
                            To learn, work and grow for the betterment of the organization and myself. Seeking for the
                            opportunity to contribute my knowledge, skills, experience and giving the best for the
                            advancement of the organization while making my skills stronger.
                        </p>
                    </div>
                    {/* SVG */}
                </div>
                <div className="i-right">
                    <div className="i-bg"></div>
                    {/* <img src={Me} alt="My" className="i-img" /> */}
                    <div className="i-right-wrapper">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
