import "./about.css"
import code from "../../img/code.jpg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card">
                    <img src={code} alt="Coding" className="a-pic" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">Hey, My name is <b>Tushar</b>. Currently I'm pursuing my B.Tech from KIIT UNIVERSITY with Mechanical Engineering as my Major and Computer Science and Engineering as my Minor.</p>
                <p className="a-desc">I'm a Frontend Developer with hands on experience of ReactJS, NextJS, JavaScript and HTML/CSS. I'm aiming for a Full Stack Web Developer, Learning NodeJS and I'm looking for opportuinities which suits best for my profile.</p>
            </div>
        </div>
    )
}

export default About
