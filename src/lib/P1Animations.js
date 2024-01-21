/*lib*/
import { MoveRightScroll } from './MoveRight'
import { FadeUpScroll } from './FadeUp';
import Universal, { UniversalFrom } from './Universal'

/*Gsap*/
import { gsap, Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const P1Animations = (tl, p1Name, p1Img, p1Cols, p1ParContent, p1ParImg, p1ShowImg, p1ShowCol, p1ShowCols,
                    p1ShowColImg1, p1ShowColImg2) => {
    
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

    return null
};


export default P1Animations