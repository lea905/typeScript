<template>
  <DataTable :value="authors" paginator :rows="2">
    <Column header="Prénom" field="firstName" sortable></Column>
    <Column header="Nom" field="name"></Column>
    <Column>
      <template #body="slotProps">
        
        <Button
          label="Edit"
          @click="openDialog(slotProps.data)"
        />
      </template>
    </Column>
  </DataTable>

  <AuthorCard v-if="visible" :author="selectedAuthor" v-model:visible="visible" @update:author="updateAuthor($event)" />
  
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue"
import DataTable from "primevue/datatable"
import Column from "primevue/column"
import Button from "primevue/button"
import AuthorCard from "./AuthorCard.vue"   

import type { AuthorModel } from "@/models/Author.model"

const authors = ref<AuthorModel[]>([
  { id: 0, firstName: "George", name: "Orwell" },
  { id: 1, firstName: "J.K", name: "Rowling" },
  { id: 2, firstName: "Victor", name: "Hugo" },
])

const selectedAuthor: Ref<AuthorModel> = ref({
  id: -1,
  firstName: "",
  name: "",
})

const visible = ref(false)

const openDialog = (author: AuthorModel) => {
  selectedAuthor.value = { ...author }
  visible.value = true
}


const updateAuthor = (newAuthor: AuthorModel) => {
  const index = authors.value.findIndex((a) => a.id === newAuthor.id)
  if (index !== -1) {
    authors.value[index] = { ...newAuthor }
  }
  visible.value = false
}   


</script>
