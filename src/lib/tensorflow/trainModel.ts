import { Sequential, Tensor } from "@tensorflow/tfjs";

export default async function trainModel(model: Sequential, [XTrain, YTrain]: [Tensor, Tensor]) {
    const hist = await model.fit(XTrain, YTrain, { epochs: 20, batchSize: 128 });
    console.log(hist.history["accuracy"])
    console.log(hist);
}