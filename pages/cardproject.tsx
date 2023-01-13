import styles from "../styles/cardprojet.module.css";



export default function Cardprojets1() {
  return(
<div className={styles.card}>
    <img className={styles.imgcard} src="testimg.png" alt="" ></img>
    <div className={styles.container}>
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
  </div>
);
}