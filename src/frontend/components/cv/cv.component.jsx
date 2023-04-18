import React from "react";
import '../../stylesheets/cv.stylesheet.css';

import CVimg_ENG from '../../assets/CVdocs/CV_MarkHarvey_ENG.jpg';
import CVpdf_ENG from '../../assets/CVdocs/CV_MarkHarvey_ENG.pdf';
import CVimg_SWE from '../../assets/CVdocs/CV_MarkHarvey_SWE.jpg';
import CVpdf_SWE from '../../assets/CVdocs/CV_MarkHarvey_SWE.pdf';

const CV = () => {

    // const [CVimg, setCVimg] = useState(CVimg_SWE);
    // const [CVpdf, setCVpdf] = useState(CVpdf_SWE);
    // const [language, setLanguage] = useState("english");

    // const handleLanguageChange = (event) => {
    //     setLanguage(event.target.value);
    //     if (event.target.value === "english") {
    //         setCVimg(CVimg_ENG)
    //         setCVpdf(CVpdf_ENG)
    //     } else if (event.target.value === "swedish") {
    //         setCVimg(CVimg_SWE)
    //         setCVpdf(CVpdf_SWE)
    //     }
    // };

    return (
        <div>
            {/* <div>
                <h1>CV</h1>
                <label>
                    <input
                    type="radio"
                    value="english"
                    checked={language === "english"}
                    onChange={handleLanguageChange}
                    />
                    English
                </label>
                <label>
                    <input
                    type="radio"
                    value="swedish"
                    checked={language === "swedish"}
                    onChange={handleLanguageChange}
                    />
                    Swedish
                </label>
            </div> */}
            <div className= "CVContainer">
                <div className= "wrapper">
                    <div class="marquee">
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                    </div>
                </div>
                <a href={CVpdf} name="CV_MarkHarvey"><img src={CVimg} /></a>
                <div className= "wrapper">
                    <div class="marquee">
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CV