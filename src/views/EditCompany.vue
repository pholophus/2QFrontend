<template>
    <div class="container">
        <router-link to="/" class="btn btn-secondary mb-3">Back</router-link>
      <h1 class="mb-4">Add Company</h1>
      <b-form @submit.prevent="addCompany" class="mt-3">
        <b-form-group label="Name" label-for="name">
          <b-form-input id="name" v-model="newCompany.name" required></b-form-input>
        </b-form-group>
  
        <b-form-group label="Email" label-for="email">
          <b-form-input type="email" id="email" v-model="newCompany.email"></b-form-input>
        </b-form-group>
  
        <b-form-group label="Logo" label-for="logo">
          <b-form-file v-model="newCompany.logo" id="logo" @change="onLogoChange"></b-form-file>
        </b-form-group>
  
        <b-form-group label="Website" label-for="website">
          <b-form-input type="url" id="website" v-model="newCompany.website"></b-form-input>
        </b-form-group>
  
        <b-button type="submit">Save</b-button>
      </b-form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newCompany: {
          name: '',
          email: '',
          logo: null,
          website: '',
        },
      };
    },
    methods: {
      async addCompany() {
        try {
          let formData = new FormData();
          formData.append('name', this.newCompany.name);
          formData.append('email', this.newCompany.email);
          formData.append('logo', this.newCompany.logo);
          formData.append('website', this.newCompany.website);
  
          await this.$axios.post('/api/companies', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          this.newCompany = {
            name: '',
            email: '',
            logo: null,
            website: '',
          };
  
          this.$router.push('/');
        } catch (error) {
          console.error('Error adding company:', error);
        }
      },
      onLogoChange(event) {
        const fileInput = event.target;
        if (fileInput.files.length > 0) {
          this.newCompany.logo = fileInput.files[0];
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: auto;
  }
  /* Add your styles here */
  </style>
  