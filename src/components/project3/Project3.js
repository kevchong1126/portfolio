import React from 'react'
import styles from './Project3.module.scss'

/*Components*/
import FullImg from './FullImg'
import Main from './Main'
import Gallery from './Gallery'
import Footer from '../Footer/Footer'

const Project3 = () => {
  return (
    <div className={styles.wrapper}>
        <FullImg />
        <Main />
        <Gallery />
        <Footer />
    </div>
  )
}

export default Project3