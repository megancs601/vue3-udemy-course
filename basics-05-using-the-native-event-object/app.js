const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
    };
  },
  //best used when you run to some code which may also update some data property 
  //in reaction to a property change i.e http request, timers
  watch: {
    counter(value){
      if(value > 50 ){
        this.counter = 0
      }
    }
    // name(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = value + "" + this.lastName;
    //   }
    // },

    // lastName(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = this.name + "" + value;
    //   }
    // }
  },
  //computed properties, better for performance for outputting values
  //and when there's more than 1 dependacy
  computed: { 
    fullname(){
        console.log("running again")
        if(this.name === '' || this.lastName === ''){
          return  '';
        }
  
        return this.name + " " + this.lastName;
    }
  },
  //methods are good to call when you want to re-calculate a value 
  //whenever anything on the page changes or when an event occurs
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = "";
    },
    //not good, because this method gets called whenever we call add() or reduce()
    //vue calls ALL methods(whether we are calling them or not) by default
    outputFullName(){
      console.log("running again")
      if(this.name === ''){
        return  '';
      }

      return this.name + "" + "Smith";
    }
  }
});

app.mount('#events');
