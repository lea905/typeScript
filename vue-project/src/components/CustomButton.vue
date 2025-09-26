
<template>
    
     <Button label="Réinitialiser"></Button>

     {{ msg }}
</template>

<script setup lang="ts">
import Button from 'primevue/button';

let props = defineProps<{msg: string}>();



</script>