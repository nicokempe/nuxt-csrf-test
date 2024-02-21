import { JobApplication } from '~/server/models/JobApplication.model';

export default defineEventHandler(async (event: any): Promise<any> => {
    try {
        const applicationData = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@jodoe.com',
            jobId: '1234',
            jobTitle: 'Software Engineer',
        };

        const newApplication = new JobApplication(applicationData);
        await newApplication.save();

        console.log('Success', 'Application Submitted', 'Your application has been submitted successfully. We will be in touch!', 5000);
        return new Response(JSON.stringify({ success: true, message: 'Application submitted successfully' }), { status: 200 });
    } catch (error) {
        console.log('Failure', 'Submission Error', 'There was a problem submitting your application. Please try again later.', 5000);
        if (error instanceof Error) {
            return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
        }
        return new Response(JSON.stringify({ success: false, message: 'An unknown error has occurred.' }), { status: 500 });
    }
});
