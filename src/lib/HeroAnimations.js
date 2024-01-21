/*lib*/
import { MoveRightScroll } from './MoveRight'
import { FadeUpScroll } from './FadeUp';
import Universal, { UniversalFrom } from './Universal'

/*Gsap*/
import { gsap, Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const HeroAnimations = (tl, heroRef, heroContent, heroCols, heroWord1, heroWord2, heroWord3,
                        p1Ref, p1Heading, p1Mask) => {
    
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

    return null
};


export default HeroAnimations