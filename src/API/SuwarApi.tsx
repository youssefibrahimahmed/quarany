import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchSuwarData = async () => {
    const res = await axios.get('https://www.mp3quran.net/api/v3/suwar?language=ar')
    return res.data.suwar
}
export const SuwarApi = () => {
    return useQuery({
        queryKey: ['suwar'],
        queryFn: fetchSuwarData,
    })
}
