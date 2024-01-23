/*lib*/
import { MoveRightScroll } from './MoveRight'
import { FadeUpScroll } from './FadeUp';
import Universal, { UniversalFrom } from './Universal'

/*Gsap*/
import { gsap, Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const P3Animations = (tl, p3FullImg, p3MainCont, p3MainWord1, p3MainWord2, p3MainWord3, p3Mask, p3Titles, p3GalWord1,  p3GalWord2,
    p3GalImg) => {
    
        Universal(p3FullImg.current, p3FullImg.current, {xPercent: 15, ease: 'none'}, 'left right', 'right left', 
        1, 'play', tl);
        MoveRightScroll(p3MainWord1, p3MainCont, 10, 'none', 'left 70%', 'left -15%', true, tl);
        MoveRightScroll(p3MainWord2, p3MainCont, 15, 'none', 'left 70%', 'left -15%', true, tl);
        MoveRightScroll(p3MainWord3, p3MainCont, 25, 'none', 'left 70%', 'left -15%', true, tl);
        Universal(p3Mask.current, p3MainCont.current, {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.7, ease: Power0.easeIn}, 'right 95%', '', false, 'play none none reverse', tl);
        FadeUpScroll(p3Titles, {delay: 0.3, duration: 1.8 }, 
            p3MainCont, 'right 95%', '', false, 'play none none reverse', tl);

        UniversalFrom(p3GalWord1.current, p3GalWord1.current, { xPercent: 40, ease: 'none'},
        'left right', 'left left', 1, '', tl);
        UniversalFrom(p3GalWord2.current, p3GalWord2.current, { xPercent: 60, ease: 'none'},
        'left right', 'left left', 1, '', tl);
        p3GalImg.current.forEach( el => {
            UniversalFrom(el, el, { xPercent: -20, ease: 'none'}, 'left right', 'right left', 1, '', tl);
        });

    return null
};


export default P3Animations