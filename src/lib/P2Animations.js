/*lib*/
import { MoveRightScroll } from './MoveRight'
import { FadeUpScroll } from './FadeUp';
import Universal, { UniversalFrom } from './Universal'

/*Gsap*/
import { gsap, Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const P2Animations = (tl, p2FullImg, p2MainCont, p2MainWord1, p2MainWord2, p2MainWord3, p2Titles, p2Mask, p2PinText, p2PinCont, 
    p2PinImgCont) => {
    
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
        x: p2PinCont.current.offsetWidth*1.5, ease: 'none'}, 'left left', `+=${p2PinCont.current.offsetWidth*1.5}`, true,
         '', tl);

    return null
};


export default P2Animations