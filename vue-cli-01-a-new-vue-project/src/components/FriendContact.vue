<template>
    <li>
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
        props:[
            'name',
            'phoneNumber',
            'emailAddress'
        ],
        data(){
            return {
                detailsAreVisible: false,
                friend:  {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: "01234 5678 991",
                    email: "manuel@localhost.com"
                },
            }
        },
        methods: {
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible;
            }
        }
    };
</script>