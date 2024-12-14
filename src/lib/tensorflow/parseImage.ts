import * as tf from "@tensorflow/tfjs"
export default function parseImage(url: string) {
    return new Promise<tf.Tensor3D>((resolve, reject) => {
        const img = new Image();
        img.src = url;

        img.onload = () => {
            const tensor = tf.browser.fromPixels(img);
            const resizedTensor = tensor.resizeBilinear<tf.Tensor3D>([32, 32]);
            resolve(resizedTensor);
        }
        img.onerror = (err) => {
            reject(err);
        }
    })
}