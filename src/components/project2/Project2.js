import React from 'react'
import styles from './Project2.module.scss'

/*Components*/
import FullImg from './FullImg'
import Main from './Main'
import Pin from './Pin'
import Empty from './Empty'

const Project2 = () => {
  return (
    <div className={styles.wrapper}>
        <FullImg />
        <Main />
        <Pin />
        <Empty />
    </div>
  )
}

export default Project2