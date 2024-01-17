import React, { useContext } from 'react'
import styles from './Footer.module.scss'
import { context } from '../../Context'

const Footer = () => {
    const { FMainCont } = useContext(context);

  return (
    <div className={styles.container} ref={FMainCont}>
        <div className={styles.content}>
            <div className={styles.titleContainer}>
                <div className={styles.titles}>
                    <h2>Hope</h2>
                    <h2>You</h2>
                    <h2>Enjoyed!</h2>
                </div>
                
            </div>

            <div className={styles.work}>
                <a href='https://github.com/kevchong1126' target='_blank'> 
                    <h4>
                        Github
                    </h4>
                </a>
                <a href='https://www.linkedin.com/in/kevin-chong-ng-49478526a/' target='_blank'> 
                    <h4>
                        LinkedIn
                    </h4>
                </a>
                <h4>
                    kechng123@xgmail.com
                </h4>
            </div>
        </div>
    </div>
  )
}

export default Footer