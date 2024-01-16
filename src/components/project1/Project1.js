import React, { useEffect, useContext } from 'react'
import styles from './Project1.module.scss'
import { context } from '../../Context'

/*Components*/
import Main from './Main'
import Showcase from './Showcase'

const Project1 = () => {
    const { p1Ref } = useContext(context);

    useEffect(() => {
        
    }, [])

  return (
    <div className={styles.wrapper} ref={p1Ref}>
      <Main />
      <Showcase />
    </div>
  )
}

export default Project1