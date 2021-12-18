import React from 'react';
import './Skills.css';

const Education = () => {
    return (
        <>
            <div className="skills">
                <div className="skills-bar">
                    <div className="bar">
                        <div className="info">
                            <span>HTML</span>
                        </div>
                        <div className="progress-line">
                            <span className="html"></span></div>
                        <div className="bar">
                            <div className="info">
                                <span>CSS</span>
                            </div>
                            <div className="progress-line">
                                <span className="css"></span></div>
                            <div className="bar">
                                <div className="info">
                                    <span>JAVASCRIPT</span>
                                </div>
                                <div className="progress-line">
                                    <span className="javascript"></span>
                                </div>
                                <div className="bar">
                                    <div className="info">
                                        <span>REACTJS</span>
                                    </div>
                                    <div className="progress-line">
                                        <span className="react"></span>
                                    </div>
                                    <div className="bar">
                                        <div className="info">
                                            <span>Python</span>
                                        </div>
                                        <div className="progress-line">
                                            <span className="python"></span></div>
                                        <div className="bar">
                                            <div className="info">
                                                <span>BOOTSTRAP</span>
                                            </div>
                                            <div className="progress-line">
                                                <span className="bootstrap"></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education
