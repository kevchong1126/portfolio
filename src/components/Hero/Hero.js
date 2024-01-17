import React, { useContext } from 'react'
import styles from './Hero.module.scss'
import { context } from '../../Context';

/*Icons*/
import { IoIosArrowRoundForward } from "react-icons/io";

/*Components*/
import TitleHero from '../titles/TitleHero'
import TitleProject from '../titles/TitleProject';

const Hero = () => {
    const { heroRef, heroContent, heroCols, p1Mask, p1Heading } = useContext(context);
    
  return (
    <div className={styles.container} ref={heroRef}>

        <div className={styles.maskContainer} ref={p1Mask}> 
            <div className={styles.titleContainer}>
                <TitleProject text1={'Pro'} text2={'Ject'} text3={'1'} ref={p1Heading}/>
            </div>
        </div>

        <div className={styles.content} ref={heroContent}>
            <TitleHero />
            
            <div className={styles.flex}>

                <div className={styles.col} ref={el => heroCols.current.push(el)}>
                    <div className={styles.first}>
                        <p className={styles.number}>1.</p>
                        <p className={styles.heading}>My skills:</p>
                    </div>
                    <div className={styles.line}>
                        <p>Html, Css, Javascript,</p>
                    </div>
                    <div className={styles.line}>
                        <p>React.js, Redux, Gsap, Sass, React Router,</p>
                    </div>
                    <div className={styles.line}>
                        <p>Express.js and Node.js</p>
                    </div>
                </div>

                <div className={styles.col} ref={el => heroCols.current.push(el)}>
                    <div className={styles.first}>
                        <p className={styles.number}>2.</p>
                        <p className={styles.heading}>Proficiency in</p>
                    </div>
                    <div className={styles.line}>
                        <p>crafting websites for performance,</p>
                    </div>
                    <div className={styles.line}>
                        <p>ensuring smooth user experiences across </p>
                    </div>
                    <div className={styles.line}>
                        <p>different devices and browsers.</p>
                    </div>
                </div>

                <div className={styles.col} ref={el => heroCols.current.push(el)}>
                    <div className={styles.first}>
                        <p className={styles.number}>3.</p>
                        <p className={styles.heading}>Check out my</p>
                    </div>
                    <div className={styles.line}>
                        <p>my profile from 
                            <a href='https://www.linkedin.com/in/kevin-chong-ng-49478526a/' target='_blank'>
                                LinkedIn
                            </a>
                        </p>
                    </div>
                    <div className={styles.line}>
                        <p>my source code:
                            <a href='https://github.com/kevchong1126' target='_blank'>
                                Github
                            </a>,
                            
                        </p>
                    </div>
                    <div className={styles.line}>
                        <p> 
                        and email: kechg123x@gmail.com
                        </p>
                    </div>
                </div>

                <div className={styles.scrollContainer} ref={el => heroCols.current.push(el)}>
                    <p>Scroll</p>
                    <IoIosArrowRoundForward className={styles.icon}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero