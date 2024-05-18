import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/dashboardRBR');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};

export default connectToMongoDB;