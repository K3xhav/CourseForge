import mongoose from 'mongoose'

const connectDb = async () => {
    const mongoUri = process.env.MONGODB_URI

    if (!mongoUri) {
        console.warn('MONGODB_URI is not set. Skipping MongoDB connection.')
        return
    }

    mongoose.connection.on('connected', () => console.log('Database Connected'))
    await mongoose.connect(`${mongoUri}/CourseForge`)
}
export default connectDb
