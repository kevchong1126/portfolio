/*lib*/
import { UniversalColor } from './Universal'

/*Gsap*/
import { gsap, Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const NavAnimations = (tl, fullNav, navbar, burgers, p3MainCont, p1Ref, footerMainCont) => {
    
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

        UniversalColor(navbar.current, footerMainCont.current, {backgroundColor: '#D91616', color: '#390000', borderColor: '#390000',
        delay: 0.2, ease: Power0.easeIn}, 'left 95%', '', false, 'play none none reverse', tl);
        UniversalColor(fullNav.current, footerMainCont.current, {backgroundColor: '#D91616', color: '#390000',
        delay: 0.2, ease: Power0.easeIn}, 'left 95%', '', false, 'play none none reverse', tl);
        burgers.current.forEach(el => {
            UniversalColor(el, footerMainCont.current, {backgroundColor: '#390000', delay: 0.2, ease: Power0.easeIn},
            'left 95%', '', false, 'play none none reverse', tl);
        });

    return null
};


export default NavAnimations