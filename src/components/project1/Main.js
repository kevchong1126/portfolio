import React, { useContext } from 'react'
import styles from './Main.module.scss'
import { context } from '../../Context'

/*Images*/
import img1 from '../../images/p1.png'

/*Icons*/
import { IoIosArrowRoundForward } from "react-icons/io";

const Main = () => {
  const { p1Img, p1Cols, p1Name } = useContext(context);

  return (
    <div className={styles.container}>

        <div className={styles.content}>
             <div className={styles.top}>
                <a href='https://kevchong1126.github.io/realestate/' target='_blank' className={styles.imgContainer} ref={p1Img}>
                  <img src={img1} />
                  <div className={styles.overlay}></div>
                </a>

                <div className={styles.nameContainer} ref={p1Name}>
                  <p className={styles.name}>"Ibiza Real Estate"</p>
                  <p className={styles.desc}>Project #1: Landing page</p>
                </div>
             </div>

             <div className={styles.bottom}>
                    <div className={styles.col} ref={el => p1Cols.current.push(el)}>
                      <div className={styles.heading}> 
                        <h3>Technologies used in</h3>
                        <h3>the project:</h3>
                      </div>
                      
                      <div className={styles.par}>
                        <p>React.js, Sass, React Context,</p>
                        <p>Gsap, ScrollTrigger</p>
                      </div>
                    </div>

                    <div className={styles.col} ref={el => p1Cols.current.push(el)}>
                      <div className={styles.heading}> 
                        <h3>A description of</h3>
                        <h3>the landing page</h3>
                      </div>

                      <div className={styles.par} >
                        <p>Real estate landing page</p>
                        <p>that showcases beautiful apartments</p>
                        <p>in a luxurious area. The website</p>
                        <p>focuses mainly on a smooth experience </p>
                        
                      </div>
                    </div>

                    <div className={styles.col} ref={el => p1Cols.current.push(el)}>
                      <div className={styles.heading}> 
                        <h3>Live demo and source</h3>
                        <h3> code</h3>
                      </div>

                      <div className={styles.btnContainer}>
                        <a href='https://kevchong1126.github.io/realestate/' target='_blank' className={styles.btn}>
                          <p>Live Demo</p>
                          <IoIosArrowRoundForward  className={styles.icon}/>
                        </a>
                        
                        <a href='https://github.com/kevchong1126/realestate' target='_blank' className={styles.btn}>
                          <p>Github Code</p>
                          <IoIosArrowRoundForward  className={styles.icon}/>
                        </a>

                      </div>

                    </div>
             </div>
        </div>
    </div>
  )
}

export default Main