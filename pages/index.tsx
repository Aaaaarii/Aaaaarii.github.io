import styles from "../styles/Home.module.css";
import Navbar from "./navbar";
import Card from "./card"
import Card2 from "./card2"
import Card3 from "./card3"
import Cardprojets1 from "./cardproject";


export default function Home() {
  return (
    <>
      <div className={styles.fond}>
        <div className={styles.back}>
        <div className={styles.fondmobile}></div>
        <Navbar />
        <div className={styles.top}>
          <img
            className={styles.moi}
            src="imagemoi.png"
            alt="Touahriasami"
          ></img>          
          <div className={styles.top1} id="scroll_to_top">
          <a href="#top">
          <img className={styles.topimg} src="flech.png"/>
          </a>
          </div>
          <div className={styles.ts}>
            <h4 className={styles.df}>Devellopeur Fullstack</h4>
            <h2>TOUAHRIA Sami</h2>
            <h6 className={styles.descrip}>
              Etudient a l'ETNA, je suis développeur fullstack depuis 2022 en
              alternance,
              <br /> je suis polyvalent et je sais m'adapter a différentes types
              de situations
            </h6>
           <a href="#project"><button  className={styles.button1}>
              Mes projets
            </button></a> 
            <a href="https://drive.google.com/u/0/uc?id=1YvPI2LPaSMnU0A_9CT3qGDSzfyv6e-3I&export=download"><button  className={styles.button2}>
              Mon CV 
            </button></a>
            </div>
          </div>
        </div>
        <div className={styles.aboutme} id="apropos">
          <a className={styles.titre1}>A PROPOS DE MOI</a>
          <h2 className={styles.title2}>Mon Histoire</h2>
          <h3 className={styles.txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lacus orci, rutrum a mollis vel, pellentesque eget nibh. Etiam erat
            tortor, malesuada a neque sed, aliquet auctor nunc. Etiam
            condimentum at est quis aliquet. Ut facilisis turpis nec urna
            faucibus consequat. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla sagittis nulla sem,
            tincidunt condimentum ante tristique id. Nunc hendrerit elit leo,
            non cursus nulla lacinia ut. Morbi dictum sagittis viverra. Aenean
            elit sapien, fermentum at risus nec, elementum elementum nunc. Sed
            at risus facilisis enim sollicitudin facilisis. Sed hendrerit, erat
            quis faucibus rutrum, nibh neque dapibus mi, iaculis elementum magna
            diam quis augue.
          </h3>
          <h2 className={styles.title3}>Ma passion</h2>
          <h3 className={styles.txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lacus orci, rutrum a mollis vel, pellentesque eget nibh. Etiam erat
            tortor, malesuada a neque sed, aliquet auctor nunc. Etiam
            condimentum at est quis aliquet. Ut facilisis turpis nec urna
            faucibus consequat. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nulla sagittis nulla sem,
            tincidunt condimentum ante tristique id. Nunc hendrerit elit leo,
            non cursus nulla lacinia ut. Morbi dictum sagittis viverra. Aenean
            elit sapien, fermentum at risus nec, elementum elementum nunc. Sed
            at risus facilisis enim sollicitudin facilisis. Sed hendrerit, erat
            quis faucibus rutrum, nibh neque dapibus mi, iaculis elementum magna
            diam quis augue.
          </h3>
        </div>
        <div className={styles.comp} id="comp">
          <a className={styles.titre2}>COMPETENCE</a>
        </div>
        <div className={styles.cardall}>
        <Card/>
        <Card2/>
        <Card3/>
        </div>
        <div className={styles.comp} id="project">
          <a className={styles.titre3}>Mes Projets</a>
          </div>

          <div className={styles.cardall}>
          <Cardprojets1/>
          <Cardprojets1/>
          <Cardprojets1/>
          
          </div>
        <div className={styles.vag}>
        <div className={styles.comp} id="contact">
          <div className={styles.cach}>dfdsf</div>
          <h2 className={styles.txt4}>Sami Touahria</h2>
          <h3 className={styles.txt5}>Site entièrement designé par moi même, développé en React</h3>
          <a className={styles.titre4}>Me Contacter :</a>
          <div className={styles.footlink}>
          <a href="mailto:votreadresse@mail.fr" className={styles.mail}><a><br /><br />Mail ! → <br /></a></a>
          <a href="tel:+33652102320"  className={styles.mail}><br /><br /> Numero ! → <br /><br /> <br /><br /></a> 
          <a href="https://www.linkedin.com/in/sami-touahria/"><img className={styles.lkn} src="lkn.svg"></img></a>
          <a href="https://github.com/Aaaaarii"><img className={styles.git} src="git.svg"></img></a>
          <a href="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1"><img className={styles.git} src="titok.svg"></img></a>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
