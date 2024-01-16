import React from 'react'
import styles from './Project3.module.scss'

/*Components*/
import FullImg from './FullImg'
import Main from './Main'
import Gallery from './Gallery'

const Project3 = () => {
  return (
    <div className={styles.wrapper}>
        <FullImg />
        <Main />
        <Gallery />
    </div>
  )
}

export default Project3