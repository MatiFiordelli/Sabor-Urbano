export const imageVariants = {
    initial: {
        opacity: 0,
        right: "-100vw",
        filter: "grayscale(1)",
    },
    animate: {
        opacity: 1,
        right: "0",
        filter: [
            "grayscale(1)",
            "grayscale(1)",
            "grayscale(1)",
            "grayscale(1)",
            "grayscale(0.5)",
            "grayscale(0)"
        ],

        transition: {
            right: {
                type: "spring" ,
                duration: 1.5, 
                delay: 0.7, 					
            },
            filter: {
                duration: 3.5,
                delay: 1,
                ease: "easeOut"
            }
        }
    }
}