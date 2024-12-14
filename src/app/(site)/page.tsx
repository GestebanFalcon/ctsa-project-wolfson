import FileUpload from "@/components/form/fileUpload";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-grow flex flex-row ">
      <div className=" bg-neutral-50 w-1/2 shadow-md flex py-24 justify-start items-center px-32">
        <section className=" flex flex-col gap-2 items-start">
          <h1>EduAI: placeholder</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi error tempore distinctio voluptatum corporis beatae iure eius</p>
          <Link href="/demo"><button className="border-2 border-blue-700 text-blue-500 hover:text-blue-700">Try Now</button></Link>
        </section>
      </div>
      <div className=" flex-grow bg-gradient-to-l from-neutral-300 to-neutral-50"></div>
    </div>
  );
}
