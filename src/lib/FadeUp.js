import { gsap, Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

export const FadeUpAnim = (ref, properties) => {
    gsap.from(ref, {
        yPercent: 100,
        ease: Power4.easeOut,
        duration: 1,
        stagger: {
          each: 0.1
        },
        ...properties
    });
}

export const FadeUpScroll = (ref, properties, trigger, start, end, scrub, toggleActions, tl) => {
  gsap.from(ref.current, {
    yPercent: 100,
    ease: Power4.easeOut,
    duration: 1,
    stagger: {
      each: 0.1
    },
    ...properties,
    scrollTrigger: {
      trigger: trigger.current,
      start: start,
      end: end,
      scrub: scrub,
      toggleActions : toggleActions,
      containerAnimation: tl
    }
});
}