export const httpClient = {
    get: async <T> (url: string):Promise<T> => {
        const response =  await fetch(url)
        if(!response.ok){
            throw(`HTTP error ${response.status}`)
        }
        return response.json()
    }  
  
}


