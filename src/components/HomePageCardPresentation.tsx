import React, { useState, useEffect } from "react";
import Wavinghand from "../assets/waving-hand_1f44b.png";
import "../styles/HomePageCardPresentation.css";
import blobsform from "../assets/blobs/blob.svg";
import blobsform2 from "../assets/blobs/blob (1).svg";
import blobsform3 from "../assets/blobs/blob (2).svg";
import blobsform4 from "../assets/blobs/blob (3).svg";
import Facecheck from "../assets/Facecheck.png";
import devSami from "../assets/devSami.png";

function HomePageCardPresentation() {
  const phrases = [" React", " Angular", " Full Stack"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseVisible, setPhraseVisible] = useState(true);

  useEffect(() => {
    let charIndex = 0;
    let timer: string | number | NodeJS.Timeout | undefined;
    let eraseTimer: string | number | NodeJS.Timeout | undefined;

    const typeOut = () => {
      if (charIndex === 0) {
        setCurrentPhrase("");
      }

      if (charIndex < phrases[currentPhraseIndex].length) {
        setCurrentPhrase((prev) => prev + phrases[currentPhraseIndex].charAt(charIndex));
        charIndex++;
        timer = setTimeout(typeOut, 100);
      } else {
        setTimeout(() => {
          eraseTimer = setInterval(() => {
            if (charIndex > 0) {
              setCurrentPhrase((prev) => prev.slice(0, -1));
              charIndex--;
            } else {
              clearInterval(eraseTimer);
              setTimeout(() => {
                setCurrentPhrase("");
                setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                setPhraseVisible(true);
              }, 1000); // Delay before showing the next phrase
            }
          }, 50); // Adjust the erasing speed (milliseconds)
        }, 1000); // Delay before erasing the phrase
      }
    };

    typeOut();

    return () => {
      clearTimeout(timer);
      clearInterval(eraseTimer);
    };
  }, [currentPhraseIndex]);

  return (
    <div className="page">
      <div className="HomePageCardPresentation">
        <img src={blobsform} className="blobsform" alt="blobsform" />
        <img src={blobsform2} className="blobsform2" alt="blobsform2" />
        <img src={blobsform3} className="blobsform3" alt="blobsform3" />
        <img src={blobsform4} className="blobsform4" alt="blobsform4" />
        <p className="Title">
          <img src={Wavinghand} className="Wavinghand" alt="Wavinghand" />
          <span className="TitleText">
            Hello, World! I'm Touahria Sami,
            <img src={Facecheck} className="Facecheck" alt="Facecheck" />
            a Web Applications Developer
          </span>
        </p>
        <img src={devSami} className="devSami" alt="devSami" />
        <p className="Description">
          Passionate web developer skilled{" "}
          {phraseVisible && <span className="TypewriterText">{currentPhrase}</span>}{" "}
          development. Let's craft exceptional web solutions together!
        </p>
        <button className="Button">Let's Go</button>
      </div>
    </div>
  );
}

export default HomePageCardPresentation;
