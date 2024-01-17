import React, { useContext } from 'react'
import styles from './Main.module.scss'
import { context } from '../../Context';

/*Icons*/
import { IoIosArrowRoundForward } from "react-icons/io";

/*Components*/
import TitleProject from '../titles/TitleProject';

const Main = () => {
    const { p3MainCont, p3Titles, p3Mask, p3MainWord1, p3MainWord2, p3MainWord3 } = useContext(context);

  return (
    <div className={styles.container} ref={p3MainCont}>

        <div className={styles.maskContainer} ref={p3Mask}>
            <div className={styles.right}>
                
                 <TitleProject ref={p3Titles} text1={'Pro'} text2={'Ject'} text3={'111'} />
            
            </div>
        </div>

        <div className={styles.content}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title} ref={p3MainWord1}>Project 111</h2>
                <h2 className={styles.title} ref={p3MainWord2}>Social Media</h2>
                <h2 className={styles.title} ref={p3MainWord3}> "Instapic"</h2>
            </div>

            <div className={styles.flex}>
                <div className={styles.col}>
                    <span>1.</span>
                    Instapic is a social media application with infinite scrolling, where you can download images and
                    videos. Users can also watch reels like on tiktok.
                </div>
                <div className={styles.col}>
                    <span>2.</span>
                    Website build with React, Sass, Intersection Observer, API calls, Context
                
                </div>
                <div className={styles.col}>
                    <span>3.</span>
                    Demo and Code:

                    <a href='https://kevchong1126.github.io/instapic/' target='_blank' className={styles.btn}>
                        <p>Live Demo </p>
                        <IoIosArrowRoundForward className={styles.icon}/>
                    </a>
                    <a href='https://github.com/kevchong1126/instapic' target='_blank' className={styles.btn}>
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