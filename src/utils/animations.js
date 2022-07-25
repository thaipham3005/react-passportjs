export const easeIn = {
    durartion: .5,
    ease: 'easeIn'
}

export const pageAnimation = {
    init: {
        opacity: 0,
        x: -100,
        transition: easeIn
    },
    start: {
        opacity: 1,
        x: 0
    },
    end: {
        opacity: 0,
        x: 100,
        transition: easeIn
    }
}