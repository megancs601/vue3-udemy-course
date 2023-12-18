<template>
    <li>
        <!-- <h2> {{name}} {{ isFavorite ==='1' ? '(Favorite)':'' }}</h2> -->
        <h2> {{name}} {{ friendIsFavorite ==='1' ? '(Favorite)':'' }}</h2>
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
        //props:['name', 'phoneNumber', 'emailAddress', "isFavorite" ],
        props:{
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
                type: String,
                required: false,
                default: '0',
                validator: (value)=>{
                    //only allow isFavorite to equal either'1' or '0' 
                    return value ==='1' || value ==='0'
                }
            }
        },
        data(){
            return {
                detailsAreVisible: false,
                friend:  {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: "01234 5678 991",
                    email: "manuel@localhost.com"
                },
                //allows us to change the isFavorite prop
                friendIsFavorite: this.isFavorite,
            }
        },
        methods: {
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite(){
                //NOT ALLOWED TO MUTATE A PROP
                // if(this.isFavorite==='1'){
                //     this.isFavorite = "0";
                // }else{
                //     this.isFavorite = "1"
                // }
                if(this.friendIsFavorite==='1'){
                    this.friendIsFavorite = "0";
                }else{
                    this.friendIsFavorite = "1"
                }
            }
        }
    };
</script>