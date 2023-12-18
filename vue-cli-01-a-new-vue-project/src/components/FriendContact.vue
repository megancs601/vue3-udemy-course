<template>
    <li>
        <h2> {{name}} {{ isFavorite ? '(Favorite)':'' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{detailsAreVisible? 'Hide':'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
            <li>Phone: {{ phoneNumber }}</li>
            <li>Email: {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
    export default{
        //i.e use phoneNumber in javascript, in html this translates to phone-number
        //don't use the same prop names in data properties
        props:{
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true,
            },
            phoneNumber: {
                type: String,
                required: true,
            },
            emailAddress: {
                type: String,
                required: true,
            },
            isFavorite: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        data(){
            return {
                detailsAreVisible: false
            }
        },
        methods: {
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite(){
                //always use for custom events kebab-case
                this.$emit("toggle-favorite", this.id);
            }
        }
    };
</script>