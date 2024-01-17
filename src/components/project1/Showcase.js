import React, { useContext } from 'react'
import styles from './Showcase.module.scss'
import { context } from '../../Context'

/*Images*/
import img1 from '../../images/show1.webp'
import img2 from '../../images/show2.webp'
import img3 from '../../images/show3.png'

const Showcase = () => {
    const { p1ParImg, p1ParContent, p1ShowImg, p1ShowCol, p1ShowCols,
            p1ShowColImg1, p1ShowColImg2 } = useContext(context);

  return (
    <div className={styles.container}>
        <section className={styles.section} ref={p1ParContent}>
            <img src={img1} className={styles.parallax} ref={p1ParImg}/>
        </section>

        <section className={styles.cards}>
            <div className={styles.card} ref={p1ShowCol}>
                <p className={styles.top}>Amazing</p>
                <div className={styles.imgContainer} ref={p1ShowImg}>
                    <img src={img1} className={styles.disappear}></img>
                </div>
                <div className={styles.textContainer}>
                    <span className={styles.cinzel}>Showcase</span>
                    <span className={styles.quicksand}>OF</span>
                </div>
                <p className={styles.bottomText}>Properties</p>
            </div>
            <div className={styles.card} ref={el => p1ShowCols.current.push(el)}>
                <p className={styles.top}>Smooth</p>
                <div className={styles.imgContainer}>
                    <img src={img2} ref={p1ShowColImg1}></img>
                </div>
                <div className={styles.textContainer2}>
                    <span className={styles.cinzel}>Animations</span>
                    <span className={styles.quicksand}>AND</span>
                    
                </div>
                <span className={styles.bottomText}>Scroll</span>
            </div>
            <div className={styles.card} ref={el => p1ShowCols.current.push(el)}>
                <p className={styles.top}>Stunning</p>
                <div className={styles.imgContainer}>
                    <img src={img3} ref={p1ShowColImg2}></img>
                </div>
                <div className={styles.textContainer}>
                    <span className={styles.cinzel}>Scenery</span>
                    <span className={styles.quicksand}>And</span>
                </div>
                <p className={styles.bottomText}>Location</p>
            </div>
        </section>
    </div>
  )
}

export default Showcase