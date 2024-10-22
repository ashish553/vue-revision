<template>
    <div>
        <h2>Home</h2>
        <button @click.once="add($event)">Add</button>
        <h3 tabindex="0" @keypress.shift="add($event)">{{ $store.state.count }}</h3>
        <button @click="sub">Sub</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Home',
    mounted() {
        console.log(this.$route.path);
        console.log(this.$store.state.count);
    },
    updated() {
        console.log('UPDATED::count from mapstate:', this.countAlias)
    },
    computed: {
        ...mapState({
            countAlias: 'count'
        }),
    },
    watch: {
        countAlias(newValue, oldValue) {
            alert(`State changed from ${oldValue} to ${newValue}`)
        }
    },
    methods: {
        add(event) {
            console.log('event', event.target.innerHTML);
            
            this.$store.dispatch('increase', {data: 10})
        },
        sub() {
            this.$store.dispatch('decrease')
        },
    }
}
</script>

<style></style>