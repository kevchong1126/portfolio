/*lib*/
import { FadeUpScroll } from './FadeUp';
import Universal, { UniversalFrom } from './Universal'

/*Gsap*/
import { gsap, Power0, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const FooterAnimations = (tl, footerMainCont, footerTitles, footerMask, footerMainTitle, footerMainLinks, 
    mentionsTitle, mentionsText, mentionsLine) => {
    
    Universal(footerMask.current, footerMainCont.current, {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    duration: 1.2, ease: Power0.easeIn}, 'left 90%', '', false, 'play none none reverse', tl);
    FadeUpScroll(footerTitles, {delay: 0.3, duration: 1.8 }, 
    footerMainCont, 'left 90%', '', false, 'play none none reverse', tl);
    Universal(footerMainTitle.current, footerMainTitle.current, {opacity: 1, duration: 1}, 'center right', 
    '', false, 'play', tl);
    Universal(footerMainLinks.current, footerMainLinks.current, {opacity: 1, duration: 1}, 'right right', 
    '', false, 'play', tl);
    Universal(mentionsTitle.current, mentionsTitle.current, {opacity: 1, duration: 1}, 'bottom bottom', '', false,
    'play', '');
    mentionsText.current.forEach( (el, idx) => {
        UniversalFrom(el, el, {yPercent: 100, duration: 0.8, ease: Power0.easeOut, delay: idx*0.05}, 'bottom bottom', '', 
        false, 'play', '' );
    })
    mentionsLine.current.forEach( (el, idx) => {
        UniversalFrom(el, el, {width: '0%', duration: 1, ease: Power0.easeOut, delay: idx*0.05}, 'bottom bottom', '', 
        false, 'play', '' );
    })

    return null
};


export default FooterAnimations