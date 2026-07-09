import { useEffect, useRef, useState } from 'react'
import { QuranApi } from '../API/QuranApi'
import SuraCard from '../Components/SuraCard'
import './pages.css'


function Home({ SuwarData, isLoading: SuwarLoading, error: SuwarError, currentSurah, setCurrentSurah }: any) {
    const [search, setSearch] = useState('')

    const { isLoading: QuranLoading, error: QuranError, data: QuranData } = QuranApi()


    const handleFocus = useRef<HTMLInputElement>(null)

    const filterSuwar = SuwarData?.filter((sura: any) => sura.name.includes(search))

    useEffect(() => {

        if (!QuranLoading && !SuwarLoading)

            handleFocus.current?.focus()

    }, [QuranLoading, SuwarLoading])


    if (QuranLoading)

        return <div className="mt-50 st text-center  text-2xl font-bold mt-10">Loading...</div>

    if (SuwarLoading)

        return <div className="mt-50 st text-center  text-2xl font-bold mt-10">Loading...</div>


    if (QuranError)

        return <div className="st bg-red-600/40 w-fit text-red-500 mx-auto relative my-5 p-2 rounded-xl text-white font-bold text-sm mb-3"  >Error</div>

    if (SuwarError)

        return <div className="st bg-red-600/40 w-fit text-red-500 mx-auto relative my-5 p-2 rounded-xl text-white font-bold text-sm mb-3">Error</div>

    return (
        <>
            <input onChange={(e) => setSearch(e.target.value)} ref={handleFocus} type="text" placeholder="Search Suwar..." className="mx-auto w-[80%] md:w-[25%] h-10 px-4 text-black block mt-20 placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl" />
            <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {filterSuwar.map((sura: any) => (
                    <SuraCard
                        key={sura.id}
                        name={sura.name}
                        number={sura.id}
                        isActive={currentSurah?.id === sura.id}
                        onClick={() => (setCurrentSurah(sura))}
                    />
                ))}
            </div>

        </>

    )
}

export default Home