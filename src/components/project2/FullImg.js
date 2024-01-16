import React, { useContext } from 'react'
import styles from './FullImg.module.scss'
import { context } from '../../Context'

/*Image*/
import img1 from '../../images/p2.webp'

const FullImg = () => {
    const { p2FullImg } = useContext(context);
  return (
    <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
            <img src={img1} ref={p2FullImg}></img>
        </div>
    </div>
  )
}

export default FullImg