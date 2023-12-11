const app = Vue.createApp({
    data(){
        return {
            //detailsVisible: false,
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: "01234 5678 991",
                    email: "manuel@localhost.com"
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: "09876 543 221",
                    email: "julie @localhost.com"
                }
            ]
        }
    },
    methods: {
        // toggleDetails(){
        //     this.detailsVisible = !this.detailsVisible;
        // }
    }
})

// component: like  a mini app
// you define your own html tag with component
// tip: you should always use multi words with a dash inbetween
// to avoid conflicts with  official built in html elements
app.component("friend-contact", ({
    //not best example of using template, but works for now for simplicity
    template: `
        <li>
            <h2>{{friend.name}}</h2>
            <button @click="toggleDetails"> {{detailsVisible ? 'Hide': 'Show'}} Details</button>
            <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
            </ul>
        </li>
    `,
    data(){
        return {
            detailsVisible:false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: "01234 5678 991",
                email: "manuel@localhost.com"
            },
        };
    },
    methods: {
        toggleDetails(){
            this.detailsVisible = !this.detailsVisible;
        }
    }
}))
app.mount("#app")