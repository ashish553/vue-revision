<template>
    <div class="button-container">
        <h3>{{ counter }}</h3>
        <button href="/" @click="handleClick">Click</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        handleClick() {
            this.counter++;
            console.log('Clicked');
            
        }
    }
}
</script>

<style>

.button-container button {
    padding: 10px 20px;
    border: 1px solid black;
    background: grey;
    border-radius: 15px;
}

</style>