export type BannerProps = {
    bannerProducts:BannerItemProps[]
};
export type BannerItemProps = {
    bannerClass?: string;
    title: string;
    image: string;
    link:string;
}