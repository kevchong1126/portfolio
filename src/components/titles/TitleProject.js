import React, { useContext } from 'react'
import styles from './TitleProject.module.scss'
import { context } from '../../Context'

const TitleProject = ({text1, text2, text3, color} , ref) => {

  return (
    <div className={styles.wrapper} style={{ color : color ? color : ''}}>
        <div className={styles.titleContainer}>
            <div className={styles.line1}>
                <p className={styles.heading} ref={ el => ref.current.push(el)}>{text1}</p>
            </div>
            <div className={styles.line2}>
                <p className={styles.heading} ref={ el => ref.current.push(el)}>{text2}</p>
            </div>
            <div className={styles.line3}>
                <p className={styles.heading} ref={ el => ref.current.push(el)}>{text3}</p>
            </div>
        </div>
    </div>
  )
}

export default React.forwardRef(TitleProject)