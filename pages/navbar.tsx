/* eslint-disable @next/next/no-sync-scripts */
import styles from "../styles/navbar.module.css";



export default function Navbar() {
  return (
    <>
    <nav>
      <div className={styles.navbar} id="myTopnav">
        
        <a className={styles.name}>Touahria Sami</a>
        <a href="#apropos" className={styles.list}>A propos</a>
        <a href="#comp" className={styles.list}>Competence</a>
        <a href="#project" className={styles.list}>Projet</a>
        <a href="#contact" className={styles.list}>Me contacter</a>

      </div>
    
    </nav>
    </>
  );
}
