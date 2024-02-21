<template>
  <div>
    <button @click.prevent="submitApplicationForm">
      Submit
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const buttonLoading = ref(false);

const submitApplicationForm = async () => {
  buttonLoading.value = true;

  const applicationData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@jodoe.com',
    jobId: '1234',
    jobTitle: 'Software Engineer',
  };

  try {
    const response = await fetch('/api/application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicationData),
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    console.log('Success', 'Application Submitted', 'Your application has been submitted successfully. We will be in touch!', 5000);
  } catch (error) {
    console.log('Failure', 'Submission Error', 'There was a problem submitting your application. Please try again later.', 5000);
  } finally {
    buttonLoading.value = false;
  }
};
</script>
