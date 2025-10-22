import { motion } from "framer-motion";

export const cardHover = {
    whileHover : {scale : 1.05}
}
export const cardClicksEffects = {
    whileTap : {scale : 0.95}
}
export const ScrollToTop = {
    initial : {opacity : 0, y:20},
    whileInView : {opacity : 1, y:0},
    transition : {duration : 1}
}
export const scrollToBottom = {
    initial : {opacity : 0, y:-20},
    whileInView : {opacity : 1, y:0},
    transition : {duration : 1},
    exit : {opacity : 0, y:-20},
}
export const scrollToLeft = {
    initial : {opacity :0, x:20},
    whileInView : {opacity:1, x:0},
    transition : {duration : 1},
    exit : {opacity : 0, x:20},
}
export const scrollToRight = {
    initial : {opacity :0, x:-20},
    whileInView : {opacity:1, x:0},
    transition : {duration : 1},
    exit : {opacity : 0, x:-20},
}
export const serviceCardEffects = {
    whileHover : {scale : 1.05},
    initial : {opacity :0, x:20},
    whileInView : {opacity:1, x:0},
    transition : {duration : 0.5},
    exit : {opacity : 0, x:20},
}