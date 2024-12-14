import Link from "next/link";
import icon from "@/app/(icon)/icon.png";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className=" flex items-center w-full h-16 bg-gradient-to-br from-blue-300 to-blue-200">
            <Link className=" my-0 ml-4" href="/"><Image className="my-0 flex justify-center items-center h-12 w-12" src={icon} alt="Home" /></Link>
        </nav>
    )
}