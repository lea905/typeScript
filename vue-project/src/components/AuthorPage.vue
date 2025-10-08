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

    
        <Dialog
          header="Modifier un auteur"
          v-model:visible="visible"
          :modal="true"
          :style="{ width: '30vw' }"
        >
          <div class="p-fluid">
            <div class="field">
              <label for="firstName">Prénom</label>
              <InputText id="firstName" v-model="selectedAuthor.firstName" />
            </div>

            <div class="field">
              <label for="name">Nom</label>
              <InputText id="name" v-model="selectedAuthor.name" />
            </div>
          </div>

          <template #footer>
            <Button
              label="Annuler"
              @click="visible = false"
              severity="danger"
            />
            <Button
              label="Enregistrer"
              @click="saveDialogAuthor"
              autofocus
            />
          </template>
        </Dialog>

      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue"
import DataTable from "primevue/datatable"
import Column from "primevue/column"
import Button from "primevue/button"
import Dialog from "primevue/dialog"
import InputText from "primevue/inputtext"
import type { AuthorModel } from "@/models/Author.model"

const authors = ref<AuthorModel[]>([
  { id: 0, firstName: "George", name: "Orwell" },
  { id: 1, firstName: "J.K", name: "Rowling" },
  { id: 2, firstName: "Victor", name: "Hugo" },
])

const visible = ref(false)
const selectedAuthor: Ref<AuthorModel> = ref({
  id: -1,
  firstName: "",
  name: "",
})


const openDialog = (author: AuthorModel) => {
  selectedAuthor.value = { ...author }
  visible.value = true
}

const saveDialogAuthor = () => {
  const index = authors.value.findIndex((a) => a.id === selectedAuthor.value.id)
  if (index !== -1) {
    authors.value[index] = { ...selectedAuthor.value }
  }
  visible.value = false
}
</script>
