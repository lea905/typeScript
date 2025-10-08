<script setup lang="ts">
import { type Ref, ref } from 'vue';
import AuthorCard from './components/AuthorCard.vue';
import type { AuthorModel } from './models/Author.model';

const author: Ref<AuthorModel> = ref({ firstName: 'George', name: 'Orwell', id: 0 });
const test = ref('Titre auteur');
function saveAuthor(newAuthor: AuthorModel) {
  author.value = { ...newAuthor };
}
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>
