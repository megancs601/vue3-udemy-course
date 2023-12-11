const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userText.value
    },
  },
  //start of lifecycle hook
  //called before app has been fully initialized
  beforeCreate(){
    console.log("beforeCreate()")
  },
  //called after intialization, nothing seen on screen yet
  created(){
    console.log("created()")
  },
  // between created() and beforeMount(), vue compiles templates
  // where all dynamic placecholds, all interpolation and so on 
  // are removed and replaced w/ concrete values
  beforeMount(){
    console.log("beforeMount()")
  },
  //things are rendered to the screen
  mounted(){
    console.log("mounted()")
  },
  // start of new lifecycle when data is changed
  beforeUpdate(){
    console.log("beforeUpdate()")
  },
  updated(){
    console.log("updated()")
  },
  // all content is removed and the app is dead
  //when you want to clean upcode, sent http request to server..etc.
  beforeUnmount(){
    console.log("beforeeUnmount()")
  },
  unmounted(){
    console.log("unmounted()")
  }
});

app.mount('#app');

setTimeout(()=>{
  app.unmount();
}, 3000)

