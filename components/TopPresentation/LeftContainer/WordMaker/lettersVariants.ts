import { LettersVariantAnimateParams } from "@/types";

export const lettersVariants = {
    initial: {
        transform: "translateY(0px)",
    },
    hover: {
        transform: [
            "translateY(-15px)",
            "translateY(-100vh)",
        ],
        transition: { 				
            delay: 0,
            duration: 1.5,
            type: "tween",
        },
    },
    animate: (params: LettersVariantAnimateParams) => ({
        transform: ["translateY(-800vh)", "translateY(0px)"],
        transition: { 
            transform: {
                delay: 1,
                duration: params.delay < 1 ? 1 : params.delay,
                type: "spring",
            },
        },
    }),
};