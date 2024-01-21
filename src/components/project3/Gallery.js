import React, { useContext } from 'react'
import styles from './Gallery.module.scss'
import { context } from '../../Context'

/*Images*/
import img1 from '../../images/show7.jpg'
import img2 from '../../images/show8.jpg'
import img3 from '../../images/show9.jpg'

const Gallery = () => {
    const { p3GalImg, p3GalWord1, p3GalWord2 } = useContext(context);

  return (
    <div className={styles.container}>

        <div className={styles.content}>

            <div className={styles.titleContainer}>

                <div className={styles.line} ref={p3GalWord1}>
                    <h2>Downloaded</h2>
                    <span>From</span>
                </div>
                
                <h2 ref={p3GalWord2}>"Instapic"</h2>
            </div>
            
            <div className={styles.slider}>
                <div className={styles.cardS}>
                    <div className={styles.imgContainer}>
                        <img src={img1} ref={el => p3GalImg.current.push(el)} />
                    </div>

                    <div className={styles.textContainer}>
                        <p className={styles.number}>01</p>
                        <div className={styles.desc}>
                            "Greek Statue"
                            <br/>
                            From Instapic
                        </div>
                    </div>
                </div>
                <div className={styles.cardL}>
                    <div className={styles.imgContainer}>
                        <img src={img2} />
                    </div>

                    <div className={styles.textContainer}>
                        <p className={styles.number}>02</p>
                        <div className={styles.desc}>
                            "Showcase Statue"
                            <br/>
                            From Instapic
                        </div>
                    </div>
                </div>
                <div className={styles.cardS}>
                    <div className={styles.imgContainer}>
                        <img src={img3} ref={el => p3GalImg.current.push(el)}/>
                    </div>

                    <div className={styles.textContainer}>
                        <p className={styles.number}>03</p>
                        <div className={styles.desc}>
                           "Statue Face"
                            <br/>
                            From Instapic
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery