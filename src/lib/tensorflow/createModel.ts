import * as tf from "@tensorflow/tfjs"

export default function createModel(length: number) {
    const model = tf.sequential();

    model.add(
        tf.layers.flatten({ inputShape: [32, 32] })
    )
    model.add(
        tf.layers.dense({ inputShape: [1024], units: 128, activation: "relu" })
    )
    model.add(tf.layers.dense({ inputShape: [128], units: length, activation: "softmax" }))

    model.compile({
        optimizer: "adam",
        loss: length === 2 ? "binaryCrossentropy" : "categoricalCrossentropy",
        metrics: ["accuracy"]
    })
    return model;
}