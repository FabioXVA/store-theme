import {CardProps} from "./types";

export const Card = ({
                imgAlt,
                imgSrc, 
                class_card, 
                class_card_image, 
                children} : CardProps) =>{
            
    return(
         <div className={`h-full max-w-[270px]  w-full ${class_card}`}>
            <img src={imgSrc} alt={imgAlt} className={`${class_card_image} w-full object-contain`} />
            <div className="mt-4 flex flex-col">
                {children}
            </div>
        </div>
    )
}