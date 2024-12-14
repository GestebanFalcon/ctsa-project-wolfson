"use client"
import FileUpload from "@/components/form/fileUpload";
import parseImage from "@/lib/tensorflow/parseImage";
import { useCallback, useState } from "react";

export default function Page() {
    const [classes, setClasses] = useState<{ images: string[], label: string, prediction: number }[]>([{ images: [], label: "Class 1", prediction: 0 }, { images: [], label: "Class 2", prediction: 0 }])
    const [image, setImage] = useState<undefined | string>()

    const logImage = async () => {
        if (!image) return;
        const tensor = await parseImage(image);
        console.log(tensor.shape);
    }

    return (
        <div className=" flex-grow flex flex-row gap-24 justify-center pb-32 items-center">
            <section className=" flex justify-start items-center flex-col gap-4 rounded-sm">

                {classes.map((item, index) => (
                    <FileUpload key={index} images={item.images} setImages={(images) => {
                        setClasses(
                            classes.map((val, i) => (i === index) ? { ...val, images: images } : { ...val })
                        )
                    }} />
                ))}

            </section>
            <section className=" flex flex-row ">
                <div><button className=" text-white bg-blue-500 p-4 rounded-md font-semibold hover:bg-blue-700 shadow-md">Train Model</button></div>
            </section>
            <section className=" flex flex-col items-center gap-4  w-96">
                <div className="bg-white flex flex-col shadow-md p-4 rounded-sm w-full">
                    <input type="file" onChange={e => {
                        const files = e.target.files;
                        if (!files) return;
                        setImage(URL.createObjectURL(files[0]));
                    }} />

                </div>

                <div className="  flex flex-col items-center p-8 bg-white shadow-md rounded-sm w-full">
                    {
                        classes.map((item, index) => (
                            <span key={index} className=" px-16 w-full flex flex-row"><p className="semibold">{item.label}</p><p className=" flex-grow flex justify-end mr-0">{item.prediction}</p></span>
                        ))
                    }
                </div>
                <button onClick={e => { logImage() }} className="text-white bg-blue-700 p-2 rounded-md font-semibold hover:bg-blue-900 w-full">Predict</button>
            </section>
        </div>

    )


}