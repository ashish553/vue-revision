<template>
  <div>
    <!-- {{ $attrs }} -->
    <h2 v-bind="$attrs">ID: {{ this.dataId }}</h2>
    <!-- <button @click="++dataId">Get</button> -->
    <button @click="++dataId">Get</button>
    <p>{{ this.data.title }}</p>
  </div>
</template>

<script>
// import { onWatcherCleanup } from 'vue';

export default {
    inheritAttrs: false,
    data() {
        return {
            dataId: 1,
            data: [],
            interval: null
        }
    },
    methods: {
        async getData(id) {
            // ++this.dataId
            // console.log(this.dataId);
            
            const data =  await(await fetch('https://jsonplaceholder.typicode.com/todos/'+id)).json()
            console.log(data);
            this.data = data
            
        }
    },
    watch: {
        dataId: {
            handler(newValue) {
                this.getData(newValue)
            },
            immediate: true,
        }
    },
    mounted() {
        console.log(this.$attrs);
        
        this.interval = setInterval(() => {
            console.log('Interval Present...');
            
        }, 1000);
    },
    // beforeUnmount() {
    //     console.log('Before Unmopnted');
    //     console.log('Clearing interval');
        
    //     clearInterval(this.interval)
    // },
    // unmounted() {
    //     console.log('Unmounted');
        
    // }
}
</script>

<style>

</style>