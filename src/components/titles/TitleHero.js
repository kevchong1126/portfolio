import React, { useContext } from 'react'
import styles from './TitleHero.module.scss'
import { context } from '../../Context';

const TitleHero = () => {
  const { heroWord1, heroWord2, heroWord3 } = useContext(context);  

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>

        <div className={styles.line} ref={heroWord1}>
          <h2 className={styles.title1} >KEvin,</h2>
        </div>

        <div className={styles.line} ref={heroWord2}>
          <p className={styles.decor1}>A</p>
          <h2 className={styles.title2}>Frontend</h2>
        </div>

        <div className={styles.line} ref={heroWord3}>
          <h2 className={styles.title3}>Developer</h2>
        </div>
      </div>
    </div>
  )
}

export default TitleHero