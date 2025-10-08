<template>
  <InputText v-model="localAuthor.firstName"></InputText>
  <InputText v-model="localAuthor.name"></InputText>

  <Button label="Sauvegarder" @click="emit('update:author', localAuthor)"></Button>
</template>

<script setup lang="ts">
import type { AuthorModel } from '@/models/Author.model';
import { onMounted, ref, watch, type Ref } from 'vue';
import { InputText, Button } from 'primevue';
const props = defineProps<{ author: AuthorModel }>();
const localAuthor: Ref<AuthorModel> = ref({
  id: 0,
  firstName: '',
  name: '',
});
const emit = defineEmits(['update:author']);

onMounted(() => {
  localAuthor.value = { ...props.author };
});
</script>
