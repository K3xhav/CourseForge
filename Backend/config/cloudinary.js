import {v2 as cloudinary} from 'cloudinary'

export const connectCloudiary = async () => {
    const cloudName = process.env.CLOUDINARY_NAME
    const apiKey = process.env.CLOUDINARY_API_KEY
    const apiSecret = process.env.CLOUDINARY_SECRET_KEY

    if (!cloudName || !apiKey || !apiSecret) {
        console.warn('Cloudinary environment variables are not fully configured. Skipping Cloudinary initialization.')
        return
    }

    cloudinary.config({
        cloud_name: cloudName,
        api_key: apiKey,
        api_secret: apiSecret
    })
}
