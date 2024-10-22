<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <AsyncSlotComponent>
    <div>
      <p>This came from the parent: {{ showWatcher }}</p>
    </div>
    <template #heading="slotProps">
      <h2>{{ slotProps.title }}</h2> -->
      <!-- {{slotProps}} -->
    <!-- </template>
    <template #description>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore animi nesciunt error voluptatem labore aut
        necessitatibus corrupti unde explicabo, veritatis aliquid esse nulla, adipisci, consequuntur deleniti nisi in
        ducimus rerum.</p>
    </template>
  </AsyncSlotComponent> -->
  <AsyncAcoordionsComponent :details="accDetails" initialAccordion="2" />
  <!-- <watcher-example @click="console.log('121')" class="testing" v-if="showWatcher"/> -->
  <button @click="showWatcher = !showWatcher">Click</button>
  <!-- <component :is="'p'">Hey there</component> -->
  <!-- <ButtonVue /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import { computed, defineAsyncComponent } from 'vue';
import SlotsExample from './components/SlotsExample.vue';
// import SlotsExample from './components/SlotsExample.vue';
// const AsyncSlotComponent = defineAsyncComponent(() => {
//   return import('./components/SlotsExample.vue')
// })
const AsyncAcoordionsComponent = defineAsyncComponent({
  loader: () => new Promise((res)=>{
    setTimeout(()=>{
      res(import('./components/Accordions.vue'))
    },3000)
  }),
  // delay: 2000,
  // errorComponent: '<p>Loading...</p>',
  // loadingComponent: {template: '<p>Loading...</p>'},
  loadingComponent: SlotsExample,
})
// import ButtonVue from './components/Button.vue'
// import Accordions from './components/Accordions.vue'
// import WatcherExample from './components/WatcherExample.vue';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // SlotsExample,
    // AsyncSlotComponent,
    AsyncAcoordionsComponent,
    // HelloWorld,
    // ButtonVue,
    // Accordions,
    // WatcherExample,
  },
  provide() {
    return {
      message: computed(() => this.showWatcher)
    }
  },
  data() {
    return {
      accDetails: [
        {
          "id": "1",
          "title": "Introduction to Vue.js",
          "body": "Vue.js is a progressive JavaScript framework used for building user interfacesVue.js is a progressive JavaScript framework used for building user interfaces."
        },
        {
          "id": "2",
          "title": "Getting Started with Parcel",
          "body": "Parcel is a fast, zero-configuration web application bundleVue.js is a progressive JavaScript framework used for building user interfacesVue.js is a progressive JavaScript framework used for building user interfacesr for modern web development."
        },
        {
          "id": "3",
          "title": "Understanding ES Modules",
          "body": "ES Modules allow you to import andVue.js is a progressive JavaScript framework used for building user interfacesVue.js is a progressive JavaScript framework used for building user interfaces export JavaScript modules to keep code organized and reusable."
        },
        {
          "id": "4",
          "title": "JavaScript Promises",
          "body": "PVue.js is a progressive JavaScript framework used for building user interfacesVue.js is a progressive JavaScript framework used for building user interfacesromises in JavaScript are used to handle asynchronous operations more effectively."
        },
        {
          "id": "5",
          "title": "Deploying a Vue App",
          "body": "There are various platforms for deploying Vue.js apps, inclVue.js is a progressive JavaScript framework used for building user interfacesVue.js is a progressive JavaScript framework used for building user interfacesVue.js is a progressive JavaScript framework used for building user interfacesuding Netlify, Vercel, and GitHub Pages."
        }
      ],
      data: [],
      showWatcher: true

    }
  },
  async mounted() {
    this.data = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
