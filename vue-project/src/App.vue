<template>
  <div class="card flex justify-center">
    <Menu :model="items">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <i :class="item.icon"></i>
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <i :class="item.icon"></i>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </Menu>
  </div>
  <RouterView></RouterView>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Menu from 'primevue/menu'
import 'primeicons/primeicons.css'

const router = useRouter()

const items = ref([
  {
    label: 'Authors',
    route: '/authors',
    icon: 'pi pi-users',
  },
  {
    label: 'Books',
    route: '/books',
    icon: 'pi pi-book',
  },
  {
    label: 'Bookk Collections',
    route: '/book-collections',
    icon: 'pi pi-bookmark',
  },
])
</script>
