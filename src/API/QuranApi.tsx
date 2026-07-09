import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchData= async ()=>{
    const res=await axios.get('https://server10.mp3quran.net/minsh/')
    return res.data 
}

export const QuranApi = () => {
  return useQuery({
    queryKey: ['quran'],
    queryFn: fetchData,
  })
}
