import React, { useContext } from 'react'
import styles from './FullImg.module.scss'
import { context } from '../../Context'

/*Image*/
import img1 from '../../images/p3.png'

const FullImg = () => {
    const { p3FullImg } = useContext(context);

  return (
    <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
            <img src={img1} ref={p3FullImg}></img>
        </div>
    </div>
  )
}

export default FullImg