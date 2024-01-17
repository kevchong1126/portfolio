import React, { useState, useEffect, useContext } from 'react'
import styles from './Track.module.scss'
import { context } from '../../Context'

/*Components*/
import Hero from '../Hero/Hero'
import Project1 from '../project1/Project1'
import Project2 from '../project2/Project2'
import Project3 from '../project3/Project3'

/*lib*/
import { MoveRightScroll } from '../../lib/MoveRight'
import { FadeUpScroll } from '../../lib/FadeUp';
import Random from '../../lib/Random'
import Universal, { UniversalFrom, UniversalColor } from '../../lib/Universal'

/*Gsap*/
import { gsap, Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);



const Track1 = () => {
    const { track, 
            heroRef, heroContent, heroCols, heroWord1, heroWord2, heroWord3,
            p1Ref, p1Heading, p1Mask, p1Name, p1Img, p1Cols, p1ParContent, p1ParImg, p1ShowImg, p1ShowCol, p1ShowCols,
            p1ShowColImg1, p1ShowColImg2,
            p2FullImg, p2MainCont, p2MainWord1, p2MainWord2, p2MainWord3, p2Titles, p2Mask, p2PinText, p2PinCont, 
            p2PinImgCont,
            p3FullImg, p3MainCont, p3MainWord1, p3MainWord2, p3MainWord3, p3Mask, p3Titles, p3GalWord1,  p3GalWord2,
            p3GalImg,
            fullNav, navbar, burgers
         } = useContext(context);

    useEffect(() => {
        
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();
            
            mm.add('(min-width: 801px)', () => {

                const tl = gsap.to( track.current, {
                    x: `-${track.current.clientWidth - window.innerWidth}`,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: track.current,
                        start: 'top top',
                        end: `+=${track.current.clientWidth - window.innerWidth}`,
                        scrub: 1,
                        pin: true
                    }
                });
    
                /*Navbar*/
                UniversalColor(navbar.current, p1Ref.current, {backgroundColor: '#000', color: '#fff', borderColor: '#fff',
                delay: 0.2, ease: Power0.easeIn}, 'left 95%', '', false, 'play none none reverse', tl);
                UniversalColor(fullNav.current, p1Ref.current, {backgroundColor: '#000', color: '#fff',
                delay: 0.2, ease: Power0.easeIn}, 'left 95%', '', false, 'play none none reverse', tl);
                burgers.current.forEach(el => {
                    UniversalColor(el, p1Ref.current, {backgroundColor: '#fff', delay: 0.2, ease: Power0.easeIn},
                    'left 95%', '', false, 'play none none reverse', tl);
                })
    
                UniversalColor(navbar.current, p3MainCont.current, {backgroundColor: '#CCCCCC', color: '#000', borderColor: 'gray',
                delay: 0.2, ease: Power0.easeIn}, 'right 95%', '', false, 'play none none reverse', tl);
                UniversalColor(fullNav.current, p3MainCont.current, {backgroundColor: '#CCCCCC', color: '#000',
                delay: 0.2, ease: Power0.easeIn}, 'right 95%', '', false, 'play none none reverse', tl);
                burgers.current.forEach(el => {
                    UniversalColor(el, p3MainCont.current, {backgroundColor: '#000', delay: 0.2, ease: Power0.easeIn},
                    'right 95%', '', false, 'play none none reverse', tl);
                });
    
    
                /*Hero*/
                MoveRightScroll(heroContent, heroRef, 100, 'none', 'left left', 'right left', true, tl);
                FadeUpScroll(p1Heading, {delay: 0.3, duration: 1.8 }, 
                            p1Ref, 'left 95%', '', false, 'play none none reverse', tl);
                Universal(p1Mask.current, p1Ref.current, {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 0.7, ease: Power0.easeIn}, 'left 95%', '', false, 'play none none reverse', tl);
                    
                
                Universal(heroWord1.current, heroWord1.current, {opacity: 1, duration: 0.6, ease: Power0.easeIn},
                    '', '', false, 'play', tl);
                UniversalFrom(heroWord1.current, heroWord1.current, {xPercent: 6, duration: 0.6, ease: Power0.easeIn},
                        '', '', false, 'play', tl);
                Universal(heroWord2.current, heroWord2.current, {opacity: 1, duration: 0.6, ease: Power0.easeIn, delay: 0.1},
                    '', '', false, 'play', tl);
                UniversalFrom(heroWord2.current, heroWord2.current, {xPercent: 4, duration: 0.6, ease: Power0.easeIn, delay: 0.1},
                        '', '', false, 'play', tl);
                Universal(heroWord3.current, heroWord3.current, {opacity: 1, duration: 0.6, ease: Power0.easeIn, delay: 0.2},
                    '', '', false, 'play', tl);
                UniversalFrom(heroWord3.current, heroWord3.current, {xPercent: 5, duration: 0.6, ease: Power0.easeIn, delay: 0.2},
                        '', '', false, 'play', tl);
                Universal(heroCols.current, heroCols.current, {opacity: 1, duration: 0.6, ease: Power0.easeOut,
                        stagger: {each: 0.2}, delay: 0.4},'', '', false, 'play', tl);
                UniversalFrom(heroCols.current, heroCols.current, {yPercent: 5, duration: 0.6, ease: Power0.easeOut,
                        stagger: {each: 0.2}, delay: 0.4},    '', '', false, 'play', tl);
                
                /*P1*/
                p1Cols.current.forEach( el => {
                    Universal(el, el, {opacity: 1, duration: 0.6, ease: Power0.easeIn},
                                'right right', '', false, 'play', tl);
                    UniversalFrom(el, el, {yPercent: 3, duration: 0.6, ease: Power0.easeIn},
                            'right right', '', false, 'play', tl);
                });
                Universal(p1Img.current, p1Img.current, {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                        duration: 1.3, ease: Power0.easeOut}, 'center right', '', false, 'play', tl);
                UniversalFrom(p1Name.current, p1Name.current, {yPercent: 15, duration: .6, ease: Power0.easeOut},
                                'right right', '', false, 'play', tl);
                Universal(p1Name.current, p1Name.current, {opacity: 1, duration: 0.6, ease: Power0.easeOut},
                                'right right', '', false, 'play', tl);
                UniversalFrom(p1ParImg.current, p1ParContent.current, {xPercent: -15, ease: 'none'}, 
                                'left right', 'left left', 1, 'play', tl);
                
                const iRec = p1ParImg.current.getBoundingClientRect();
                const cRec = p1ShowImg.current.getBoundingClientRect();
    
                Universal(p1ParImg.current, p1ParContent.current, {ease: 'none', y: cRec.top - iRec.top, 
                    left: cRec.left - iRec.left - (iRec.width*0.15), width: cRec.width, height: cRec.height},
                            'left -10%', 'right 30%', 1, '', tl );
                Universal(p1ShowCol.current, p1ShowCol.current, {opacity: 1, ease: 'none'},
                    'center right', 'right 30%', true, 'play', tl);
                p1ShowCols.current.forEach((el, idx) => {
                    Universal(el, el, {opacity: 1, duration: 0.6, ease: Power0.easeOut},
                    'left center', '', false, 'play', tl);
                });
                UniversalFrom(p1ShowColImg1.current, p1ShowCols.current[0], {scale: 1.15, duration: 1.5, ease: Power0.easeOut},
                    'left center', '', false, 'play', tl);
                UniversalFrom(p1ShowColImg2.current, p1ShowCols.current[1], {scale: 1.15, duration: 1.5, ease: Power0.easeOut},
                    'left center', '', false, 'play', tl);
                
                /*P2*/
                Universal(p2FullImg.current, p2FullImg.current, {xPercent: 15, ease: 'none'}, 'left right', 'right left', 
                                1, 'play', tl);
                MoveRightScroll(p2MainWord1, p2MainCont, 10, 'none', 'left 10%', 'left -15%', true, tl);
                MoveRightScroll(p2MainWord2, p2MainCont, 15, 'none', 'left 10%', 'left -15%', true, tl);
                MoveRightScroll(p2MainWord3, p2MainCont, 25, 'none', 'left 10%', 'left -15%', true, tl);
                Universal(p2Mask.current, p2MainCont.current, {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 0.7, ease: Power0.easeIn}, 'right 95%', '', false, 'play none none reverse', tl);
                FadeUpScroll(p2Titles, {delay: 0.3, duration: 1.8 }, 
                    p2MainCont, 'right 95%', '', false, 'play none none reverse', tl);
                Universal(p2PinText.current, p2PinCont.current, { x: p2PinCont.current.offsetWidth*1.5, ease: 'none'},
                'left left', `+=${p2PinCont.current.offsetWidth*1.5}`, true, '', tl);
                Universal(p2PinImgCont.current, p2PinCont.current, { y: `-${p2PinImgCont.current.offsetHeight*2}`, 
                            x: p2PinCont.current.offsetWidth*1.5, ease: 'none'}, 'left left',
                            `+=${p2PinCont.current.offsetWidth*1.5}`, true, '', tl);
    
                /*P3*/
                Universal(p3FullImg.current, p3FullImg.current, {xPercent: 15, ease: 'none'}, 'left right', 'right left', 
                                1, 'play', tl);
                MoveRightScroll(p3MainWord1, p3MainCont, 10, 'none', 'left 10%', 'left -15%', true, tl);
                MoveRightScroll(p3MainWord2, p3MainCont, 15, 'none', 'left 10%', 'left -15%', true, tl);
                MoveRightScroll(p3MainWord3, p3MainCont, 25, 'none', 'left 10%', 'left -15%', true, tl);
                Universal(p3Mask.current, p3MainCont.current, {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 0.7, ease: Power0.easeIn}, 'right 95%', '', false, 'play none none reverse', tl);
                FadeUpScroll(p3Titles, {delay: 0.3, duration: 1.8 }, 
                    p3MainCont, 'right 95%', '', false, 'play none none reverse', tl);
    
                UniversalFrom(p3GalWord1.current, p3GalWord1.current, { xPercent: 40, ease: 'none'},
                'left right', 'left left', 1, '', tl);
                UniversalFrom(p3GalWord2.current, p3GalWord2.current, { xPercent: 60, ease: 'none'},
                'left right', 'left left', 1, '', tl);
                p3GalImg.current.forEach( el => {
                    UniversalFrom(el, el, { xPercent: -25, ease: 'none'}, 'left right', 'right left', 1, '', tl);
                });
            })
            
                
        });


    
        
        return () => {
            ctx.revert()
        }
        
      }, []);

  return (
    <div className={styles.track} ref={track}>
        <Hero />
        <Project1 />
        <Project2 />
        <Project3 />
    </div>
  )
}

export default Track1