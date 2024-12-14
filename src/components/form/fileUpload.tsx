"use client"

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"

export default function FileUpload({ images, setImages }: { images: string[], setImages: (item: string[]) => any }) {

    const [showItems, setShowItems] = useState(false);

    console.log(images);
    const addImage = (e: ChangeEvent<HTMLInputElement>) => {

        const files = e.target.files

        if (files) {
            const urls = [];
            for (const file of files) {
                urls.push(URL.createObjectURL(file));
            }
            setImages([...images, ...urls]);
        }
    }

    return (
        <div className=" p-4 bg-white shadow-md w-[320px]">
            <div className="flex flex-row">
                <input type="file" multiple onChange={(e) => {
                    addImage(e)
                }} />
                <button className="font-bold" onClick={e => { setShowItems(!showItems) }}>v</button>
            </div>


            <div className={` block transition-all overflow-scroll w-full bg-neutral-200 ${showItems ? "h-48" : " h-0"}`}>

                {
                    showItems &&
                    images.map((image, index) => (
                        <span className=" inline-block">
                            <div className="relative">
                                <button onClick={() => {
                                    URL.revokeObjectURL(image);
                                    const newImages = [...images]
                                    newImages.splice(index, 1);
                                    setImages(newImages);
                                }} className=" w-4 h-4 flex items-center justify-center absolute rounded-full bg-opacity-75 opacity-20 transition-all hover:opacity-100 bg-neutral-200 left-2 top-1 font-bold z-10">X</button>
                                <img key={index} className=" z-0 object-cover h-16 w-16 m-1" src={image} />
                            </div>
                        </span>
                    ))
                }

            </div>

        </div>
    )
}