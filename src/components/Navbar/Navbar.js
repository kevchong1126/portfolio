import React, { useState, useEffect, useContext } from 'react'
import styles from './Navbar.module.scss'
import { context } from '../../Context'

/*gsap*/
import { gsap, Power1, Power2 } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    const [ active, setActive ] = useState(false);
    const { navbar, burgers, fullNav, heroRef,
            p1Ref, p2FullImg, p3FullImg,
            navLinks
            } = useContext(context);

    useEffect(() => {

        if (active){
            const mm = gsap.matchMedia();

            gsap.to(fullNav.current, {
                xPercent: 100,
                duration: 1,
                delay: 0.2, 
                ease: Power1.easeOut
            });

            mm.add('(min-width: 801px)', () => {
                
                gsap.to(navLinks.current, {
                    yPercent: -100,
                    opacity: 1,
                    duration: 1,
                    stagger: {
                        amount: 1
                    },
                    delay: 0.5,
                    ease: Power2.easeOut
                });
            });
            

        }else{
            const mm = gsap.matchMedia();

            gsap.to(fullNav.current, {
                xPercent: 0,
                duration: 1.2,
                delay: 0.8, 
                ease: Power1.easeOut
            });
            
            mm.add('(min-width: 801px)', () => {
        
                gsap.to(navLinks.current, {
                    yPercent: 100,
                    opacity: 0,
                    duration: 1,
                    stagger: {
                        amount: 1
                    },
                    ease: Power2.easeOut,
                    delay: 0.3,
                    
                });
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

        setActive(false)
    };

  return (
    <div className={styles.container}>
        <div className={styles.content} ref={navbar}>

            <div className={styles.burgerContainer} onClick={() => openNav()}>
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
                <div className={styles.line}>
                    <h2 onClick={el => scroll(heroRef.current)} ref={el => navLinks.current.push(el)}>Home</h2>
                </div>
                <div className={styles.line}>
                    <h2 onClick={el => scroll(p1Ref.current)} ref={el => navLinks.current.push(el)}>Project 1</h2>
                </div>
                <div className={styles.line}>
                    <h2 onClick={el => scroll(p2FullImg.current)} ref={el => navLinks.current.push(el)}>Project 2</h2>
                </div>
                <div className={styles.line}>
                    <h2 onClick={el => scroll(p3FullImg.current)} ref={el => navLinks.current.push(el)}>Project 3</h2>
                </div>
                
            </div>
        </div>  
    </div>
  )
}

export default Navbar