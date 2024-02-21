// @ts-ignore
import { Schema, model, Types } from 'mongoose';

const jobApplicationSchema = new Schema({
    jobId: { type: Types.ObjectId, ref: 'JobListing', required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    desiredSalary: { type: String, required: false },
    potentialStartDate: { type: String, required: false },
    socialData: {
        linkedIn: String,
        x: String,
        gitHub: String,
        portfolio: String,
    },
    resume: String, // TODO: Use a file storage service to store resumes
}, { timestamps: true, collection: 'jobApplications' });

export const JobApplication = model('JobApplication', jobApplicationSchema);
