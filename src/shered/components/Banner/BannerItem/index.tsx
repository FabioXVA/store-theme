import { BannerItemProps } from "../types";
import { ArrowRight } from "../../../../assets/ArrowRight";
import { Card } from "../../Card";

export const BannerItem = (props: BannerItemProps) => {
    const {
        title, 
        image, 
        link,
        bannerClass 
    } = props;

    return(
       <Card classCard={bannerClass || ""} >
            <img src={image} alt={title} className="h-2/3 w-full object-contain " />
            <div className="banner-info mt-4 flex flex-col">
                <h2 className="font-open-sans text-2xl font-bold tracking-tight dark:text-white" >{title}</h2>
                <a href={link} className="text-white mt-4  text-sm hover:text-gray-300  flex items-center gap-2">Mais informações <ArrowRight /></a>
            </div>
        </Card>
)
}