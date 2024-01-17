import React, { useState, useEffect, useContext } from 'react'
import styles from './Navbar.module.scss'
import { context } from '../../Context'

/*gsap*/
import { gsap, Power0 } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    const [ active, setActive ] = useState(false);
    const { navbar, burgers, fullNav, heroRef,
            p1Ref, p2MainCont, p3MainCont, p2FullImg, p3FullImg
            } = useContext(context);

    useEffect(() => {
        if (active){
            gsap.to(fullNav.current, {
                xPercent: 100,
                duration: 0.5,
                delay: 0.2, 
                ease: Power0.easeIn
            });
        }else{
            gsap.to(fullNav.current, {
                xPercent: 0,
                duration: 0.7,
                delay: 0.8, 
                ease: Power0.easeIn
            });
        }
    }, [active]); 

    const openNav = () => {
        setActive(prev => !prev);
    };

    const scroll = (idx) => {

        gsap.to(window, {
            duration: 0,
            scrollTo: {
                y:  Math.max(idx.offsetLeft, idx.offsetTop)
            }
        });

        setActive(false);
    };

  return (
    <div className={styles.container}>
        <div className={styles.content} ref={navbar}>

            <div className={styles.burgerContainer} onClick={openNav}>
                <div className={styles.line1} ref={el => burgers.current.push(el)}></div>
                <div className={styles.line2} ref={el => burgers.current.push(el)}></div>
                <div className={styles.line3} ref={el => burgers.current.push(el)}></div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.col}>
                    Frontend Developer
                </div>
                <div className={styles.col}>
                    <p className={styles.name}>Kevin Chong</p>
                </div>
                <div className={styles.col}>
                    Web Developer
                </div>
            </div>
        </div>

        <div className={styles.full} ref={fullNav}>
            <p onClick={openNav}> X </p>

            <div className={styles.fullContent}>
                <h2 onClick={el => scroll(heroRef.current)}>Home</h2>
                <h2 onClick={el => scroll(p1Ref.current)}>Project 1</h2>
                <h2 onClick={el => scroll(p2FullImg.current)}>Project 2</h2>
                <h2 onClick={el => scroll(p3FullImg.current)}>Project 3</h2>
            </div>
        </div>  
    </div>
  )
}

export default Navbar