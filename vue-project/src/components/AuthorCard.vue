<template>
   <Dialog
          header="Modifier un auteur"
          v-model:visible="visible"
          :style="{ width: '30vw' }"
        >
          <div class="p-fluid">
            <div class="field">
              <label for="firstName">Prénom</label>
              <InputText id="firstName" v-model="localAuthor.firstName" />
            </div>

            <div class="field">
              <label for="name">Nom</label>
              <InputText id="name" v-model="localAuthor.name" />
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
              @click="saveDialogAuthor"
              autofocus
            />
          </template>
        </Dialog>
</template>

<script setup lang="ts">
import type { AuthorModel } from '@/models/Author.model';
import { onMounted, ref, type Ref } from 'vue';
import { InputText, Button } from 'primevue';
import Dialog from "primevue/dialog"


const props = defineProps<{ author: AuthorModel}>();

const visible = defineModel<boolean>('visible');

const localAuthor: Ref<AuthorModel> = ref({
  id: 0,
  firstName: '',
  name: '',
});

const emit = defineEmits(['update:author', 'close']);

onMounted(() => {
  localAuthor.value = { ...props.author };
});

const saveDialogAuthor = () => {
    emit('update:author', localAuthor.value);
    emit('close');
}

</script>
