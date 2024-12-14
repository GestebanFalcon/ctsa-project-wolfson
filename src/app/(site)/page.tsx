import FileUpload from "@/components/form/fileUpload";
import Image from "next/image";
import Link from "next/link";
import DALLE from "./DALL·E 2024-12-14 04.10.55 - A transparent graphic of a human brain made of binary code (1s and 0s) representing AI, with intricate, multi-colored pathways branching out in variou.webp"

export default function Home() {
  return (
    <div className="flex-col flex flex-grow">
      <div className=" flex flex-row ">
        <div className="relative z-10 bg-neutral-50 w-1/2 shadow-md flex py-24 justify-start items-center px-32 h-[600px]">
          <section className=" flex flex-col gap-2 items-start">
            <h1 className="text-4xl font-bold">EduAI:</h1>
            <p className="text-xl font-medium">Generating the next generation of AI pioneers</p>
            <Link href="/choose"><button className="p-2 font-semibold border-2 border-blue-700 text-blue-500 hover:text-blue-700 hover:bg-blue-50">Explore</button></Link>
          </section>
        </div>
        <div className=" flex-grow bg-gradient-to-l from-neutral-300 to-neutral-50">

        </div>

      </div>

      <div className=" py-32 px-96 gap-4 flex flex-col justify-center items-center bg-blue-400 z-20">
        <h1 className="text-3xl font-bold">What is AI?</h1>
        <p className="text-lg"><strong>Artificial Intelligence, or AI, is like teaching computers to think and learn, just like people do!</strong> It helps machines solve problems, make decisions, and even create new things, like drawing pictures or writing stories. AI is all around us – it helps suggest songs you might like, make games smarter, and even assist doctors. But just like superheroes, AI has great power, so it’s important to use it responsibly to make the world better for everyone!</p>

      </div>
      <div className=" py-32 px-96 gap-8 flex flex-col justify-center items-center bg-white-400 z-20">
        <h1 className="text-3xl font-semibold">Why is it important to learn about AI?</h1>
        <p className="text-lg">AI is shaping the future and understanding it prepares us for careers, helps address ethical challenges, and empowers us to use technology responsibly in a rapidly evolving world.When you watch Netflix or listen to music on Spotify, AI suggests shows and songs based on what you like. AI is also used in self-driving cars to help them navigate safely and even in healthcare, where it helps doctors find problems faster by looking at medical images. Even when you shop online, AI suggests items you might love! Learning about AI helps us understand how it makes life easier and how to use it responsibly.</p>

      </div>
      <div className=" py-32 px-96 gap-8 flex flex-col items-center bg-purple-400">
        <h1 className="text-3xl font-bold text-orange-600">Myth<p className="text-lime-500">Busters</p></h1>

      </div>
    </div>
  )
}
