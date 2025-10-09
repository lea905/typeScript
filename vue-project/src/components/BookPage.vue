<template>
  <DataTable :value="books" paginator :rows="2">
    <Column header="Titre" field="title" sortable></Column>
    <Column header="Année de publication" field="publishYear"></Column>

    <Column header="Auteur">
      <template #body="slotProps">
        <span @click="openDialogAuthor(slotProps.data.author)">
          {{ slotProps.data.author.firstName }} {{ slotProps.data.author.name }}
        </span>
      </template>
    </Column>

    <Column>
      <template #body="slotProps">
        <Button label="Edit" @click="openDialog(slotProps.data)" />
      </template>
    </Column>
  </DataTable>

  <BookCard
    v-if="bookVisible"
    :book="selectedBook"
    v-model:visible="bookVisible"
    @update:book="updateBook($event)"
  />
  <AuthorCard v-if="authorVisible" :author="selectedAuthor" v-model:visible="authorVisible" @update:author="updateAuthor($event)" />
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import BookCard from './BookCard.vue'

import type { BookModel } from '@/models/Book.model'
import type { AuthorModel } from '@/models/Author.model'
import AuthorCard from './AuthorCard.vue'

const books = ref<BookModel[]>([
  {
    id: 0,
    title: '1984',
    publishYear: 1949,
    author: { name: 'Orwell', firstName: 'George', id: 0 },
    isbn: '1234567890',
  },
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    publishYear: 1997,
    author: { name: 'Rowling', firstName: 'J.K', id: 1 },
    isbn: '1234567891',
  },
  {
    id: 2,
    title: 'Les Misérables',
    publishYear: 1862,
    author: { name: 'Hugo', firstName: 'Victor', id: 2 },
    isbn: '1234567892',
  },
])

const selectedBook: Ref<BookModel> = ref({
  id: -1,
  title: '',
  publishYear: 0,
  isbn: '',
  author: { name: '', firstName: '', id: -1 },
})

const selectedAuthor: Ref<AuthorModel> = ref({
  id: -1,
  firstName: '',
  name: '',
})

const bookVisible = ref(false)
const authorVisible = ref(false)

const openDialog = (book: BookModel) => {
  selectedBook.value = { ...book }
  bookVisible.value = true
}

const openDialogAuthor = (author: AuthorModel) => {
  selectedAuthor.value = { ...author }
  authorVisible.value = true
}

const updateBook = (newBook: BookModel) => {
  const index = books.value.findIndex((b) => b.id === newBook.id)
  if (index !== -1) {
    books.value[index] = { ...newBook }
  }
  bookVisible.value = false
}

const updateAuthor = (newAuthor: AuthorModel) => {

  const bookToUpdate = books.value.find(b => b.author.id === newAuthor.id)
  if (bookToUpdate) {
    bookToUpdate.author = { ...newAuthor }
  }
  authorVisible.value = false
}


</script>
