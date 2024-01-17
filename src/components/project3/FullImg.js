import React, { useContext } from 'react'
import styles from './FullImg.module.scss'
import { context } from '../../Context'

/*Image*/
import img1 from '../../images/p3.png'

const FullImg = () => {
    const { p3FullImg } = useContext(context);

  return (
    <div className={styles.wrapper}>
        <a href='https://kevchong1126.github.io/instapic/' target='_blank' className={styles.imgContainer}>
            <img src={img1} ref={p3FullImg}></img>
        </a>
    </div>
  )
}

export default FullImg