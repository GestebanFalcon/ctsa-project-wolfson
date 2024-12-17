import Link from "next/link";
import chatbot from "./chatbot.png"
import innovation from "./innovation 1.png"
import software from "./software-application 1.png"
import Image from "next/image";

export default function Page() {
    return (
        <div className=" bg-blue-100 flex flex-grow flex-col items-center gap-16 p-32">
            <h1 className="text-3xl font-bold">Start Learning Now</h1>
            <div className=" flex flex-row w-full gap-8">
                <section className=" bg-neutral-50 shadow-lg rounded-md flex flex-col items-center gap-4 p-8">
                    <h2 className="font-semibold text-xl">Build Your Own Model</h2>
                    <Image src={software} alt="" />
                    <p>Train Your Own AI! Upload Images and Teach a Model to Recognize Objects</p>
                    <Link href="/demo"><button className=" py-2 px-4 rounded-md shadow-md font-medium  bg-cyan-500 hover:bg-cyan-700">GO</button></Link>
                </section>
                <section className=" bg-neutral-50 shadow-lg rounded-md flex flex-col items-center gap-4 p-8">
                    <h2 className="font-semibold text-xl">Human vs AI Content</h2>
                    <Image src={innovation} alt="" />
                    <p>Spot the difference between AI-created and human-made content in images, text, videos, or audio</p>
                    <Link href="/humanvai"><button className=" py-2 px-4 rounded-md shadow-md font-medium  bg-purple-400 hover:bg-purple-600">GO</button></Link>
                </section>
                <section className=" bg-neutral-50 shadow-lg rounded-md flex flex-col items-center gap-4 p-8">
                    <h2 className="font-semibold text-xl">AI Language Models</h2>
                    <Image src={chatbot} alt="" />
                    <p>Can you tell if you're chatting with a human or an AI? Find out with the Turing Test challenge</p>
                    <Link href="/llm"><button className=" py-2 px-4 rounded-md shadow-md font-medium  bg-lime-400 hover:bg-lime-600">GO</button></Link>
                </section>
            </div>
        </div>
    )
}