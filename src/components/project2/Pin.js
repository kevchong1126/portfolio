import React, { useContext } from 'react'
import styles from './Pin.module.scss'
import { context } from '../../Context'

/*Images*/
import img1 from '../../images/show4.png'
import img2 from '../../images/show5.png'
import img3 from '../../images/show6.png'

const Pin = () => {
    const { p2PinText, p2PinCont, p2PinImgCont } = useContext(context);

  return (
    <div className={styles.container} ref={p2PinCont}>
        <div className={styles.content} >
            <div className={styles.titleContainer} ref={p2PinText}>
                <div className={styles.line1}>
                    <h2 className={styles.title1}>Features</h2>
                </div>
                <div className={styles.line2}>
                    <h2 className={styles.title1}>Of</h2>
                </div>
                <div className={styles.line3}>
                    <h2 className={styles.title1}>"Hyped"</h2>
                </div>
            </div>
        </div>

        <div className={styles.imgContainers} ref={p2PinImgCont}>
            <div className={styles.card}>
                <div className={styles.imgContainer1}>
                    <img src={img1} />
                </div>

                <div className={styles.textContainer}>
                    <span>1.</span>
                    Users can search, order, and filter products by selecting from the 'Shop All' page.
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.imgContainer2}>
                    <img src={img2} />
                </div>

                <div className={styles.textContainer}>
                    <span>2.</span>
                    Customers can select the size of the item, and add it to the cart.
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.imgContainer3}>
                    <img src={img3} />
                </div>

                <div className={styles.textContainer}>
                    <span>3.</span>
                    Responsive design for web and mobile devices.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pin