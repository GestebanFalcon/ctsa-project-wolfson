"use client"
import FileUpload from "@/components/form/fileUpload";
import createModel from "@/lib/tensorflow/createModel";
import parseImage from "@/lib/tensorflow/parseImage";
import trainModel from "@/lib/tensorflow/trainModel";
import { concat, expandDims, oneHot, stack, Tensor, tensor, zeros } from "@tensorflow/tfjs";
import { useCallback, useMemo, useState } from "react";
import Dialog from "@mui/material/dialog"
import diagramai from "./diagramai.png"
import Image from "next/image";

export default function Page() {
    const [showDialog, setShowDialog] = useState(true);
    const [classes, setClasses] = useState<{ images: string[], label: string, prediction: number }[]>([{ images: [], label: "Class 1", prediction: 0 }, { images: [], label: "Class 2", prediction: 0 }])
    const [image, setImage] = useState<undefined | string>()

    const model = useMemo(() => (createModel(classes.length)), [classes])

    const logImage = async () => {
        if (!image) return;
        const tensor = await parseImage(image);
        console.log(tensor.shape);
    }

    const formatClasses = async () => {
        let YTest = zeros([0, classes.length])

        let i = 0
        const XTest = await classes.reduce(
            async (accumulator, currentValue) => {

                const imagesTensor = currentValue.images.reduce(
                    async (accumP, current) => {
                        const accum = await accumP;
                        const parsedImage = await parseImage(current)

                        YTest = concat([YTest, expandDims(oneHot(i, classes.length))])
                        return (concat([accum, expandDims(parsedImage)]))
                    }, Promise.resolve(zeros([0, 32, 32, 3]))
                )

                i++
                return (concat([await accumulator, await imagesTensor]))
            }, Promise.resolve(zeros([0, 32, 32, 3]))
        )


        return [XTest, YTest]
    }

    const handleTrain = async () => {
        const [XTest, YTest] = await formatClasses();
        await trainModel(model, [XTest, YTest]);
    }

    const handlePredict = async () => {
        if (!image) return;
        const input = await parseImage(image);
        const prediction = model.predict(expandDims(input)) as Tensor

        const data = await prediction.data();
        console.log(data);
    }

    return (
        <div className=" flex-grow flex flex-row gap-24 justify-center pb-32 items-center">
            <Dialog maxWidth={"md"} fullWidth open={showDialog} onClose={e => setShowDialog(false)} >
                <div className=" bg-neutral-50 shadow-md p-16 flex flex-col items-center gap-8">
                    <h1 className=" text-4xl font-bold">Intro</h1>
                    <span className="flex flex-row gap-32 justify-center">
                        <Image className="w-64" src={diagramai} alt="" />
                        <p className="text-lg">Before an AI can help us, it needs to learn from examples, just like how we learn by practicing or studying. For AI, these examples come in the form of data—like pictures, sounds, or words. But for the AI to understand this data, we have to organize and label it first. For instance, if we want an AI to recognize cats in photos, we give it lots of pictures and label which ones have cats and which don’t. </p>

                    </span>

                </div>
            </Dialog>
            <section className=" flex justify-start items-center flex-col gap-4 rounded-sm">

                {classes.map((item, index) => (
                    <FileUpload key={index} images={item.images} setImages={(images) => {
                        setClasses(
                            classes.map((val, i) => (i === index) ? { ...val, images: images } : { ...val })
                        )
                    }} />
                ))}
                <div className=" hover:bg-neutral-300 rounded-sm text-neutral-600 py-2 px-4 hover:cursor-pointer">Create New</div>

            </section>
            <section className=" flex flex-row ">
                <div><button onClick={handleTrain} className=" text-white bg-blue-500 p-4 rounded-md font-semibold hover:bg-blue-700 shadow-md">Train Model</button></div>
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
                <button onClick={e => { handlePredict() }} className="text-white bg-blue-700 p-2 rounded-md font-semibold hover:bg-blue-900 w-full">Predict</button>
            </section>
        </div>

    )


}