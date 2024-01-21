import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

export const MoveRightScroll = (ref, trigger, x, ease, start, end, scrub, tl ) => {

    gsap.to(ref.current, {
        xPercent: x,
        ease: ease,
        scrollTrigger: {
            trigger: trigger.current,
            start: start,
            end: end,
            scrub: scrub,
            containerAnimation: tl,
        }
    })
}