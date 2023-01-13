import styles from "../styles/card.module.css";



export default function Card() {
  return(
<div className={styles.card}>
<div className={styles.comp} id="comp">
          <div className={styles.barre}>
            <p className={styles.titrecard}>Développement Web :</p>
            <p className={styles.react}>
              <img className={styles.reactimg} src="react.svg"></img>ReactJs
            </p>
            <div className={styles.capa}>
              <div title="compt" className={styles.progressbar60}>
                60%
              </div>
            </div>
          </div>
          <div className={styles.barre}>
            <p className={styles.react}>
              <img className={styles.reactimg} src="react.svg"></img>NextJS
            </p>
            <div className={styles.capa}>
              <div title="compt" className={styles.progressbar40}>
                40%
              </div>
            </div>
          </div>
          <div className={styles.barre}>
            <p className={styles.react}>
              <img className={styles.reactimg} src="react.svg"></img>Strapi
            </p>
            <div className={styles.capa}>
              <div title="compt" className={styles.progressbar50}>
                50%
              </div>
            </div>
          </div>
          <div className={styles.barre}>
            <p className={styles.react}>
              <img className={styles.reactimg} src="react.svg"></img>CSS
            </p>
            <div className={styles.capa}>
              <div title="compt" className={styles.progressbar70}>
                70%
              </div>
            </div>
          </div>
  </div>
</div>
);
}