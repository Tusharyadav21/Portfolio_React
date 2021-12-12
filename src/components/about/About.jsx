import "./about.css"
import code from "../../img/code.jpg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={code} alt="Coding" className="a-pic" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">To learn, work and grow for the betterment of the organization and myself. Seeking for the
                            opportunity to contribute my knowledge, skills, experience and giving the best for the
                            advancement of the organization while making my skills stronger.</p>
                <p className="a-desc">Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            </div>
        </div>
    )
}

export default About
