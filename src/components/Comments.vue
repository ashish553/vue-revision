<template>
    <div class="comments">
        <Comment v-for="eachComment in comments" :key="eachComment.username" v-bind="eachComment"/>
    </div>
</template>

<script>

export default {
    name: 'Comments',
    props: {
        comments: {
            type: Array,
            required: true,
            default: ()=>[],
        }
    },
    components: {
    },
}
</script>

<style></style>