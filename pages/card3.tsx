import styles from "../styles/card.module.css";



export default function Card3() {
  return(
<div className={styles.card}>
<div className={styles.comp} id="comp">
          <div className={styles.barre}>
            <p className={styles.titrecard}>Autres :</p>
            <p className={styles.react}>
              <img className={styles.reactimg} src="react.svg"></img>Figma
            </p>
            <div className={styles.capa}>
              <div title="compt" className={styles.progressbar30}>
                30%
              </div>
            </div>
          </div>
          <div className={styles.barre}>
            <p className={styles.react}>
              <img className={styles.reactimg} src="react.svg"></img>MySQL
            </p>
            <div className={styles.capa}>
              <div title="compt" className={styles.progressbar60}>
                60%
              </div>
            </div>
          </div>
          <div className={styles.barre}>
            <p className={styles.react}>
              <img className={styles.reactimg} src="react.svg"></img>Bash
            </p>
            <div className={styles.capa}>
              <div title="compt" className={styles.progressbar40}>
                40%
              </div>
            </div>
          </div>
          <div className={styles.barre}>
            <p className={styles.react}>
              <img className={styles.reactimg} src="react.svg"></img>Axios
            </p>
            <div className={styles.capa}>
              <div title="compt" className={styles.progressbar50}>
                50%
              </div>
            </div>
          </div>
  </div>
</div>
);
}