const app = Vue.createApp({
    //data: funtion () {}    //same thing written shorter next line
    data(){
        //always return object
        return{
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            courseGoalC: '<h2>Master Vue and build amazing apps!</h2>',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods:{
        outputGoal(){
            const randNum = Math.random();
            if(randNum <.5){
                return this.courseGoalA
            }else{
                return this.courseGoalB
            }
        }
    }
});

app.mount('#user-goal');