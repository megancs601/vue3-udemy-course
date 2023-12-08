const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods:{
    add(num){
      this.counter += num;
    },
    remove(num){
      this.counter -= num;
    },
    // setName(event){
    //   this.name = event.target.value;
    // },
    setName(event, lastName){
      this.name = event.target.value + " " + lastName;
    },
    submitForm(){
      alert("Submitted!");
    },
    confirmNameInput(){
      this.confirmedName = this.name
    }
  }
});

app.mount('#events');
