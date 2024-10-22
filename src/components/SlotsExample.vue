<template>
    <div>
        <h3>This is Slots Example Component</h3>
        {{ 'Injected: ' + this.compMessage }}
        <slot>
            <p>This is default slot</p>
        </slot>
        <template v-for="n in 5" :key="n">
            <slot name="heading" :title="`Title from slot props: ${n}`">
            </slot>
        </template>
    </div>
</template>

<script>
export default {
    inject: {
        compMessage: {
            from: 'message',
            default: 'Default'
        }
    },
    mounted() {
        console.log(this.translations);
    }
}
</script>

<style></style>