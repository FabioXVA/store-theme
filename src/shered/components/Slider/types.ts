export interface SlideProps {
    slideProps: SlideItemProps[];
  }
  
export interface SlideItemProps {
    title?: string;
    subtitle?: string;
    image?: string;
    link?: string;
    buttonText?: string;
  }