import React, { useContext } from 'react'
import styles from './Main.module.scss'
import { context } from '../../Context'

/*Icons*/
import { IoIosArrowRoundForward } from "react-icons/io";

/*Components*/
import TitleProject from '../titles/TitleProject';

const Main = () => {
    const { p2MainCont, p2MainWord1, p2MainWord2, p2MainWord3,
            p2Titles, p2Mask 
        } = useContext(context);

  return (
    <div className={styles.container} ref={p2MainCont}>
        <div className={styles.maskContainer} ref={p2Mask}>
            <div className={styles.right}>
                <TitleProject ref={p2Titles} text1={'Pro'} text2={'Ject'} text3={'11'} />
            </div>
        </div>

        <div className={styles.content}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title} ref={p2MainWord1}>Project 11</h2>
                <h2 className={styles.title} ref={p2MainWord2}>Ecommerce</h2>
                <h2 className={styles.title} ref={p2MainWord3}>"Hyped"</h2>
            </div>

            <div className={styles.flex}>
                <div className={styles.col}>
                    <span>1.</span>
                    Hyped is an ecommerce website for sneakers; 
                    it has search, filter and sorting
                    functionalities, as well as a cart and multiple routers.
                </div>
                <div className={styles.col}>
                    <span>2.</span>
                    Website built with React, Sass, Redux,  
                    React Router, Gsap
                </div>

                <div className={styles.col}>
                    <div className={styles.first}>
                        <span>3.</span>
                        Demo and Code:
                    </div>
                    <a href='https://kevchong1126.github.io/ecommerce/' target='_blank' className={styles.btn}>
                        <p>Live Demo </p>
                        <IoIosArrowRoundForward className={styles.icon}/>
                    </a>
                    <a href='https://github.com/kevchong1126/ecommerce' target='_blank' className={styles.btn}>
                        <p>Source code</p>
                        <IoIosArrowRoundForward className={styles.icon}/>
                    </a>
                </div>     
            </div>
        </div>
    </div>
  )
}

export default Main