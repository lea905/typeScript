<template>
  <DataTable :value="booksCollection" paginator :rows="2">
    <Column header="id" field="id" sortable></Column>
    <Column header="State" field="state"></Column>
    <Column header="disponible">
      <template #body="slotProps">
        <span v-if="slotProps.data.state === 'available'">✔️</span>
        <span v-else>❌</span>
      </template>
    </Column>
<Column header="Titre">
    <template #body="slotProps">
       {{ slotProps.data.book.title }}
      </template>
    </Column>

    <Column header="Auteur">
      <template #body="slotProps">
        <span @click="openDialogAuthor(slotProps.data.book.author)">
          {{ slotProps.data.book.author.firstName }} {{ slotProps.data.book.author.name }}
        </span>
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import type { AuthorModel } from '@/models/Author.model'
import { ref, type Ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const booksCollection = [
  {
    id: 0,
    state: 'available',
    book: {
      id: 0,
      title: '1984',
      publishYear: 1949,
      isbn: '1234567890',
      author: { id: 0, firstName: 'George', name: 'Orwell' },
    },
  },
  {
    id: 1,
    state: 'borrowed',
    book: {
      id: 1,
      title: 'Harry Potter',
      publishYear: 1997,
      isbn: '1234567891',
      author: { id: 1, firstName: 'J.K', name: 'Rowling' },
    },
  },
  {
    id: 2,
    state: 'available',
    book: {
      id: 2,
      title: 'The Old Man and the Sea',
      publishYear: 1952,
      isbn: '1234567892',
      author: { id: 2, firstName: 'Ernest', name: 'Hemingway' },
    },
  },
]

const selectedAuthor: Ref<AuthorModel> = ref({
  id: -1,
  firstName: '',
  name: '',
})

const bookVisible = ref(false)
const authorVisible = ref(false)

const openDialogAuthor = (author: AuthorModel) => {
  selectedAuthor.value = { ...author }
  authorVisible.value = true
}
</script>
