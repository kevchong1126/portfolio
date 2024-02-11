import React, { useContext } from 'react'
import styles from './Mentions.module.scss'
import { context } from '../../Context'

const Mentions = () => {
    const { mentionsTitle, mentionsText, mentionsLine } = useContext(context);

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.title} ref={mentionsTitle}>
                <h2>NoteWorthy</h2>
                <h2 className={styles.padding}>Mentions</h2>
            </div>

            <div className={styles.box}>
                <p className={styles.header}>Experience</p>
                <ul className={styles.list}>
                    <li>
                        <div className={styles.hide}>
                            <p ref={el => mentionsText.current.push(el)}>+4 years of freelancing</p>
                        </div>
                        <div className={styles.line} ref={el => mentionsLine.current.push(el)}></div>
                    </li>
                    <li>
                        <div className={styles.hide}>
                            <p ref={el => mentionsText.current.push(el)}>+20 successful projects</p>
                        </div>
                        <div className={styles.line} ref={el => mentionsLine.current.push(el)}></div>
                    </li>
                    <li>
                        <div className={styles.hide}>
                            <p ref={el => mentionsText.current.push(el)}>+4 years of professional coding</p>
                        </div>
                        <div className={styles.line} ref={el => mentionsLine.current.push(el)}></div>
                    </li>
                    <li>
                        <div className={styles.hide}>
                            <p ref={el => mentionsText.current.push(el)}>+1000 hours of practice</p>
                        </div>
                        <div className={styles.line} ref={el => mentionsLine.current.push(el)}></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Mentions