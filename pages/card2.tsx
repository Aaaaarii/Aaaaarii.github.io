import styles from "../styles/card.module.css";



export default function Card2() {
  return(
<div className={styles.card}>
<div className={styles.comp} id="comp">
          <div className={styles.barre}>
            <p className={styles.titrecard2}>Langages de programmation :</p>
            <p className={styles.react}>
              <img className={styles.reactimg} src="react.svg"></img>Typescript
            </p>
            <div className={styles.capa}>
              <div title="compt" className={styles.progressbar60}>
                60%
              </div>
            </div>
          </div>
          <div className={styles.barre}>
            <p className={styles.react}>
              <img className={styles.reactimg} src="react.svg"></img>C++
            </p>
            <div className={styles.capa}>
              <div title="compt" className={styles.progressbar40}>
                40%
              </div>
            </div>
          </div>
          <div className={styles.barre}>
            <p className={styles.react}>
              <img className={styles.reactimg} src="react.svg"></img>Php
            </p>
            <div className={styles.capa}>
              <div title="compt" className={styles.progressbar40}>
                40%
              </div>
            </div>
          </div>
  </div>
</div>
);
}