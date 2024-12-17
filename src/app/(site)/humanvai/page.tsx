"use client"
import Image from "next/image";
import { useRef, useState } from "react"
import image from "./image.png"
import image1 from "./image(1).png"

export default function Page() {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)


    const [rightAnswers, setRightAnswers] = useState({
        audio: false,
        image: false,
        text: false,

    });
    const [wrongAnswers, setWrongAnswers] = useState({
        audio: false,
        image: false,
        text: false
    })


    return (
        <div className="flex flex-col flex-grow pb-32">
            <div className="py-32 px-96 flex items-center flex-col gap-8">
                <h1 className=" font-bold text-3xl">What is Generative AI?</h1>
                <p className=" text-lg">Generative AI is a type of computer program that can create new things, like pictures, stories, music, or even videos, based on patterns it has learned from lots of examples. It's like teaching a computer to be creative! For example, if you show it thousands of pictures of animals, it can make new pictures of animals you've never seen before. Generative AI works by understanding the rules of what makes something look like an animal, a song, or a story, and then using those rules to create something new​</p>

            </div>
            <div className="flex flex-col items-center gap-8">
                <h2 className="text-2xl font-medium">Which Audio is AI-Generated?</h2>
                <span className="flex flex-row justify-center items-center gap-16">
                    <div className="flex flex-col">
                        <h2>Option 1</h2>
                        <audio className=" bg-green-400" controls src="/audio1.mp3" />
                        <button onClick={e => { setRightAnswers({ ...rightAnswers, audio: true }); setWrongAnswers({ ...wrongAnswers, audio: false }) }} className="mt-6 w-full border-2 border-neutral-400 text-neutral-600 hover:border-green-800 hover:text-green-800">Select</button>
                    </div>
                    <div className="flex flex-col">
                        <h2>Option 2</h2>
                        <audio className=" bg-orange-400" controls src="/audio2.m4a" />
                        <button onClick={e => { setRightAnswers({ ...rightAnswers, audio: false }); setWrongAnswers({ ...wrongAnswers, audio: true }) }} className="mt-6 w-full border-2 border-neutral-400 text-neutral-600 hover:border-orange-800 hover:text-orange-800">Select</button>
                    </div>
                </span>
                {rightAnswers.audio && <h3 className=" py-2 px-4 bg-green-400 font-semibold text-xl rounded-xl text-white ">CORRECT</h3>}
                {wrongAnswers.audio && <h3 className=" py-2 px-4 bg-red-400 font-semibold text-xl rounded-xl text-white ">INCORRECT</h3>}

                {(rightAnswers.audio || wrongAnswers.audio) && <div className="flex flex-col">
                    <h3 className="font-medium text-lg">How to spot AI audio:</h3>
                    <ul className="pl-4">
                        <li>-Pauses and abbreviations</li>
                        <li>-Flat speaking tone</li>
                        <li>-Slurred, unnatural speech</li>
                    </ul>
                </div>}
            </div>



            <div className="flex flex-col items-center gap-8 mt-16">
                <h2 className="text-2xl font-medium">Which Image is AI-Generated?</h2>
                <span className="flex flex-row justify-center items-center gap-16">
                    <div className="flex flex-col">
                        <h2>Option 1</h2>
                        <Image className=" h-48 w-48" src={image} alt="" />
                        <button onClick={e => { setRightAnswers({ ...rightAnswers, image: true }); setWrongAnswers({ ...wrongAnswers, image: false }) }} className="mt-6 w-full border-2 border-neutral-400 text-neutral-600 hover:border-green-800 hover:text-green-800">Select</button>
                    </div>
                    <div className="flex flex-col">
                        <h2>Option 2</h2>
                        <Image className=" h-48 w-48" src={image1} alt="" />
                        <button onClick={e => { setRightAnswers({ ...rightAnswers, image: false }); setWrongAnswers({ ...wrongAnswers, image: true }) }} className="mt-6 w-full border-2 border-neutral-400 text-neutral-600 hover:border-orange-800 hover:text-orange-800">Select</button>
                    </div>
                </span>
                {rightAnswers.image && <h3 className=" py-2 px-4 bg-green-400 font-semibold text-xl rounded-xl text-white ">CORRECT</h3>}
                {wrongAnswers.image && <h3 className=" py-2 px-4 bg-red-400 font-semibold text-xl rounded-xl text-white ">INCORRECT</h3>}

                {(rightAnswers.image || wrongAnswers.image) && <div className="flex flex-col">
                    <h3 className="font-medium text-lg">How to spot AI images:</h3>
                    <ul className="pl-4">
                        <li>-Examine the background and composition</li>
                        <li>-Look for repetetive patterns</li>
                        <li>-Check for unnatural details</li>
                    </ul>
                </div>}
            </div>

        </div>
    )
}