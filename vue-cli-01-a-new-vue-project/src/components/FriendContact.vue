<template>
    <li>
        <h2> {{name}} {{ isFavorite ? '(Favorite)':'' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{detailsAreVisible? 'Hide':'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
            <li>Phone: {{ phoneNumber }}</li>
            <li>Email: {{ emailAddress }}</li>
        </ul>
        <button @click="deleteFriend">Delete</button>
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
        //simplified emits that just shows what custom emits to expect
        emits: ["toggle-favorite", "delete-friend"],
        //validate custom events
        // emits:{
        //     "toggle-favorite": (id)=>{
        //         if(id) {
        //             return true;
        //         }
        //         else {
        //             console.warn('Id is missing!')
        //             return false;
        //         }
        //     }
        // },
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
            },
            deleteFriend(){
                this.$emit("delete-friend", this.id);
            }
        }
    };
</script>