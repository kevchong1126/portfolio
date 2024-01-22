import React, { useEffect, useContext } from 'react'
import styles from './Track.module.scss'
import { context } from '../../Context'

/*Components*/
import Hero from '../Hero/Hero'
import Project1 from '../project1/Project1'
import Project2 from '../project2/Project2'
import Project3 from '../project3/Project3'


/*lib*/
import NavAnimations from '../../lib/NavAnimations'
import HeroAnimations from '../../lib/HeroAnimations'
import P1Animations from '../../lib/P1Animations'
import P2Animations from '../../lib/P2Animations'
import P3Animations from '../../lib/P3Animations'

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
                
                NavAnimations(tl, fullNav, navbar, burgers, p3MainCont, p1Ref)
    
    
                HeroAnimations(tl, heroRef, heroContent, heroCols, heroWord1, heroWord2, heroWord3,
                p1Ref, p1Heading, p1Mask);
                
                
                P1Animations(tl, p1Name, p1Img, p1Cols, p1ParContent, p1ParImg, p1ShowImg, p1ShowCol, p1ShowCols,
                p1ShowColImg1, p1ShowColImg2);
                
                P2Animations(tl, p2FullImg, p2MainCont, p2MainWord1, p2MainWord2, p2MainWord3, p2Titles, p2Mask, p2PinText, 
                p2PinCont, p2PinImgCont);
                    
                P3Animations(tl,  p3FullImg, p3MainCont, p3MainWord1, p3MainWord2, p3MainWord3, p3Mask, p3Titles, p3GalWord1, 
                p3GalWord2, p3GalImg);

                
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