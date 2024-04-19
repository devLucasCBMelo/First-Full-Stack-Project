import styles from './header.module.css'
import beybladeDrigger from '../../images/beyblade_drigger.jpg';
import beybladeDraciel from '../../images/beyblade_draciel.jpg';
import beybladeDragoon from '../../images/beyblade_dragoon.jpg';

function Header() {
  return (
    <header className={ styles.header }>
      <img src={beybladeDrigger} alt="Beyblade Drigger animada" className={styles.beyblade_animation_reverse} />
      <img src={beybladeDraciel} alt="Beyblade Draciel animada" className={styles.beyblade_animation_reverse} />
      <img src={beybladeDragoon} alt="Beyblade Draciel animada" className={styles.beyblade_animation} />
      <h1>Beyblade - Let it rip</h1>
    </header>
  )
}

export default Header;