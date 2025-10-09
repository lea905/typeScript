<template>
   <Dialog
          header="Modifier un Livre"
          v-model:visible="visible"
          :style="{ width: '30vw' }"
        >
          <div class="p-fluid">
            

            <div class="field">
              <label for="title">Titre</label>
              <InputText id="title" v-model="localBook.title" />
            </div>
        

          </div>

          <template #footer>
            <Button
              label="Annuler"
              severity="danger"
              @click="visible = false"
            />
            <Button
              label="Enregistrer"
              @click="saveDialogBook"
              autofocus
            />
          </template>
        </Dialog>
</template>

<script setup lang="ts">
import type { BookModel } from '@/models/Book.model';
import { onMounted, ref, type Ref } from 'vue';
import { InputText, Button } from 'primevue';
import Dialog from "primevue/dialog"


const props = defineProps<{ book: BookModel}>();

const visible = defineModel<boolean>('visible');

const localBook: Ref<BookModel> = ref({
  id: 0,
  title: '',
  publishYear: 0,
  authorId: 0,
  isbn: '',
});

const emit = defineEmits(['update:book', 'close']);

onMounted(() => {
  localBook.value = { ...props.book };
});

const saveDialogBook = () => {
    emit('update:book', localBook.value);
    emit('close');
}

</script>
