import "./intro.css";

const Intro = () => {

    const handleResume = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null

    }

    return (
        <div>
            <div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-intro" >Hello, My name is</h2>
                        <h1 className="i-name">Tushar</h1>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">JavaScript Developer</div>
                                <div className="i-title-item">ReactJs Developer</div>
                                <div className="i-title-item">Frontend Developer</div>
                                <div className="i-title-item">Full Stack Developer</div>
                            </div>
                        </div>
                        <p className="i-desc">
                            To learn, work and grow for the betterment of the organization and myself. Seeking for the
                            opportunity to contribute my knowledge, skills, experience and giving the best for the
                            advancement of the organization while making my skills stronger.
                        </p>
                        <button type="button" className="btn-resume" onClick={() => handleResume("https://drive.google.com/file/d/1aXdreM-51p-dY2HfcoO5_dhU6lwrXuj5/view")}>Resume&nbsp;
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="nome" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.46967 11.8603C0.176777 12.1532 0.176777 12.6281 0.46967 12.921C0.762564 13.2139 1.23744 13.2139 1.53033 12.921L0.46967 11.8603ZM12.5314 1.60925C12.5314 1.19504 12.1956 0.859253 11.7814 0.859253L5.0314 0.859258C4.61719 0.859258 4.2814 1.19504 4.2814 1.60926C4.2814 2.02347 4.61719 2.35926 5.0314 2.35926L11.0314 2.35925L11.0314 8.35925C11.0314 8.77347 11.3672 9.10925 11.7814 9.10925C12.1956 9.10925 12.5314 8.77347 12.5314 8.35925L12.5314 1.60925ZM1.53033 12.921L12.3117 2.13958L11.2511 1.07892L0.46967 11.8603L1.53033 12.921Z" fill="white" />
                            </svg>
                        </button>
                    </div>
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
