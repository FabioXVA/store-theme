export const Card = ({children, classCard}: {children: React.ReactNode, classCard: string}) =>{
    return(
         <div data-testid="banner" className={`${classCard} h-[420px] w-[400px] p-8 rounded-lg max-w-md mx-auto flex justify-center flex-col`}>
           {children}
        </div>
    )
}