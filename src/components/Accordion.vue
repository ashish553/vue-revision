<template>
    <div class="accordion" :id="id">
        <div class="accordion-header">
            <div class="title">
                <h3>{{ title }}</h3>
            </div>
            <div class="button">
                <button @click="accordionToggleClick">Show</button>
            </div>
        </div>
        <div class="accordion-body" v-if="currentAccordion === id">
            <p>{{ body }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            default: 'Default TItle',
            type: String,
            required: false,
        },
        body: {
            default: 'This is some random body for accordion',
            type: String,
            required: false,
        },
        currentAccordion: {
            type: String,
            // required:
        }
    },
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        accordionToggleClick() {
            // console.log(event);
            
            console.log(this.id);
            
            this.$emit('accordionClicked',{id: this.id})
            console.log('accordionbuttno clicked');
            // this.visible = !this.visible
        }
    },
    
}
</script>

<style>
h3 {
    margin: 0;
}

.accordion {
    width: 100%;
    border-radius: 10px;
    border: 1px solid black;
    overflow: hidden;
    margin: 10px 0;
}

.accordion .accordion-body {
    /* background: white; */
}

.accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: lightgray;
}
</style>