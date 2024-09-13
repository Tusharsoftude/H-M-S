import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the Doctor interface extending Document
interface IDoctor extends Document {
  fullName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  country: string;
  contactInformation: string;
  email: string;
  pincode: string;
  city: string;
  address: string;
  professionalInformation: string;
  workSchedule: string;
  authentication: {
    username: string;
    password: string;
    role: string;
  };
  documentation: string;
  emergencyContact: string;
  insuranceInformation: string;
  profileStatus: string;
  additionalInformation: string;
  specialization:string;
  department:string;
}

// Define the Schema for Doctor
const DoctorSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  country: { type: String, required: true },
  contactInformation: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pincode: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  professionalInformation: { type: String, required: true },
  workSchedule: { type: String, required: true },
  authentication: {
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  documentation: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  insuranceInformation: { type: String, required: true },
  profileStatus: { type: String, required: true },
  additionalInformation: { type: String, required: true },
  specialization:{type:String,require:true},
  department:{type:String,require:true}
});

// Create the Doctor model
const Doctor: Model<IDoctor> = mongoose.model<IDoctor>('Doctor', DoctorSchema);

export default Doctor;
