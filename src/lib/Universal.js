import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const Universal = (ref, trigger, properties, start, end, scrub, toggle, tl ) => {

    gsap.to(ref, {
        ...properties,
        scrollTrigger: {
            trigger: trigger,
            start: start,
            end: end,
            scrub: scrub,
            toggleActions: toggle,
            containerAnimation: tl,
            
        }
    })
};

export const UniversalFrom = (ref, trigger, properties, start, end, scrub, toggle, tl ) => {

    gsap.from(ref, {
        ...properties,
        scrollTrigger: {
            trigger: trigger,
            start: start,
            end: end,
            scrub: scrub,
            toggleActions: toggle,
            containerAnimation: tl,
        }
    })
};

export const UniversalColor = (ref, trigger, properties, start, end, scrub, toggle, tl ) => {

    gsap.to(ref, {
        ...properties,
        scrollTrigger: {
            trigger: trigger,
            start: start,
            end: end,
            scrub: scrub,
            toggleActions: toggle,
            containerAnimation: tl,
           immediateRender: false
        }
    })
};

export default Universal