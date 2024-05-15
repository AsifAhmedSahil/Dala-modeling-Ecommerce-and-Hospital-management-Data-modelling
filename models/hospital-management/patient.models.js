import mongoose from "mongoose";

const patientRecordSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    diagonosedWith:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum: ['Male','Female','Others']
    },
    admittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
},{timestamps:true})

export const PatientRecord = new mongoose.model("PatientRecord",patientRecordSchema)