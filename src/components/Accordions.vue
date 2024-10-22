<template>
    <div>
        <template v-for="(eachaccordion, index) in details" :key="index">
            <Accordion class="tsting" v-bind="eachaccordion" :currentAccordion="currentAccordion" @accordionClicked="handleToggle"/>
        </template>
    </div>
</template>

<script>
import Accordion from './Accordion.vue'

export default {
    components: {
        Accordion,
    },
    props: {
        details: {
            type: Array,
            requried: true,
        },
        initialAccordion: {
            type: String,
            requried: false,
        }
    },
    data() {
        return {
            currentAccordion: this.initialAccordion || this.details[0].id
        }
    },
    methods: {
         handleToggle({ id }) {
            console.log('Event listened:',id);
            
            this.currentAccordion = this.currentAccordion === id ? '' : id
            
        }
    },
    beforeMount(){
        console.log('Component before mounted');
    },
    mounted() {
        console.log('Component has been mounted');
    },
    created() {
        console.log('Component has been created'); 
    },
    updated() {
        console.log('Component has been updated');
    },
    unmounted() {
        console.log('Component has been unmounted');
    }
}
</script>

<style></style>