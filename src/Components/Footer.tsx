import { useEffect, useRef, useState } from 'react'
import {
    IoPlay,
    IoPause,
    IoPlaySkipBack,
    IoPlaySkipForward,
} from "react-icons/io5";




function Footer({ currentSurah, SuwarData, setCurrentSurah }: any) {

    const [pause, setPuase] = useState(false)

    const [currentTime, setCurrentTime] = useState(0);

    const [duration, setDuration] = useState(0);

    const [audioUrl, setAudioUrl] = useState("")

    const handleNext = () => {
        if (!currentSurah && !SuwarData) return;
        const currentSurahIndex = SuwarData?.findIndex((sura: any) => sura.id === currentSurah.id);

        if (currentSurahIndex < SuwarData.length - 1) {

            setCurrentSurah(SuwarData[currentSurahIndex + 1]);
        }
    }
    const handlePrev = () => {
        if (!currentSurah && !SuwarData) return;
        const currentSurahIndex = SuwarData?.findIndex((sura: any) => sura.id === currentSurah.id);

        if (currentSurahIndex > 0) {

            setCurrentSurah(SuwarData[currentSurahIndex - 1]);
        }
    }
    useEffect(() => {
        if (currentSurah) {
            setAudioUrl(`https://server10.mp3quran.net/minsh/${String(currentSurah?.id).padStart(3, '0')}.mp3`)
        }
    }, [currentSurah])

    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        setPuase(false)
    }, [currentSurah])

    return (



        <div className='bg-gray-800  mx-auto text-sm fixed bottom-0 left-0 right-0 text-white py-4 text-center'>
            <audio

                onLoadedMetadata={() => { setDuration(audioRef.current!.duration) }}

                onTimeUpdate={() => { setCurrentTime(audioRef.current!.currentTime) }}

                ref={audioRef} src={audioUrl} />

            {currentSurah && (

                <div className=" font-bold">

                    <h1>{currentSurah.name}</h1>

                    <h1 className="text-md text-gray-400 my-2">محمد صديق المنشاوي</h1>

                </div>
            )}

            <div className='flex w-full relative justify-center gap-4'>

                <button className='cursor-pointer text-2xl' onClick={handlePrev}>
                    <IoPlaySkipBack />
                </button>

                <button className='text-2xl cursor-pointer' onClick={() => {

                    if (!pause) {

                        audioRef.current?.play()

                    } else {

                        audioRef.current?.pause()

                    }

                    setPuase(!pause)

                }}>

                    {pause ? <IoPause /> : <IoPlay />}

                </button>

                <button className='text-2xl cursor-pointer' onClick={handleNext}>
                    <IoPlaySkipForward />
                </button>

            </div>

            <input type="range" min={0} max={duration} value={currentTime} onChange={(e) => {

                const newTime = Number(e.target.value);

                audioRef.current!.currentTime = newTime;

                setCurrentTime(newTime);
            }}

                className='w-[30%] h-1 bg-gray-600 rounded-lg  cursor-pointer'
            />
        </div>
    )
}

export default Footer

//▶️