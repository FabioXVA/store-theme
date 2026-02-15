import Star  from "./Star";


  interface RatingProps {
        rate: number, 
        count: number
    }

  type StarType = "full" | "half" | "empty";

export const Rating = ({count, rate}: RatingProps) => {
  const status: StarType[] = [];

  for(let i = 0; i <= 4; i++){
    if(rate >= i ){
      status.push("full")
    }else if( rate >= i - 0.5){
      status.push("half")
    }else{
      status.push("empty")
    }
  }

  return (
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <div className="flex items-center gap-1">
            {status.map((s: StarType, idx:number) => {
                return (
                  <Star key={idx} type={s} />    
                )}
                  
                )}
          </div>
          <p
            className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
          >
            (5.0)
          </p>
          <a
            href="#"
            className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
          >
            {count} Reviews
          </a>
        </div>
  )
}