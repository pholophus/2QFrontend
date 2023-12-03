<template>
  <div class="container">
    <h1>Company List</h1>
    <router-link to="/add" class="btn btn-primary">Add Company</router-link>

    <div v-if="loading">Loading...</div>
    <div v-else>
      <b-table
        striped
        hover
        :items="companies"
        :fields="fields"
        :per-page="5"
        class="mt-3"
      >
        <template v-slot:cell(logo)="data">
          <div v-html="logoFormatter(data.value)"></div>
        </template>
        <template v-slot:cell(id)="data">
          {{ data.index + 1 }} 
        </template>
        <template v-slot:cell(action)="data">
          <div class='d-flex gap-2'>
            <button @click="deleteCompany(data.item.id)" class="btn btn-sm btn-danger">Delete</button>
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companies: [],
      loading: true,
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "logo", label: "Logo", formatter: "logoFormatter" },
        { key: "website", label: "Website" },
        { key: "action", label: "Actions", formatter: "actionsFormatter" },
      ],
    };
  },
  mounted() {
    this.fetchCompanies();
  },
  methods: {
    async fetchCompanies() {
      try {
        const response = await this.$axios.get("/api/companies");
        this.companies = response.data.data;
      } catch (error) {
        console.error("Error fetching companies:", error);
      } finally {
        this.loading = false;
      }
    },
    async deleteCompany(id) {
      try {
        await this.$axios.delete(`/api/companies/${id}`);
        this.companies = this.companies.filter((company) => company.id !== id);
      } catch (error) {
        console.error("Error deleting company:", error);
      }
    },
    logoFormatter(value) {
      const prefix = "storage/";
      const newPath = "logos/";

      value = value.replace(prefix, prefix + newPath);
      if (value) {
        return `<img src="${value}" alt="Company Logo" style="width: 50px; height: 50px;">`;
      }
      return "";
    },
    actionsFormatter(value) {
      console.log("value ", value);
      return value;
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
