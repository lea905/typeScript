<script setup lang="ts">
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
import CustomButton from './components/CustomButton.vue';

const header = 'My App';
const msg = ref('Hello World!');

function reinit() {
  msg.value = '';
}

</script>



<template>
  <h1>{{ header }}</h1>
  <div>
    <InputText v-model="msg" /> 
    {{ msg }}
    <CustomButton v-bind:msg="msg"></CustomButton>
   
  </div>
</template>



