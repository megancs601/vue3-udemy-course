<template>
  <div>
    <the-header></the-header>
    <button @click="selectComponent('active-goals')">Active Goals</button>
    <button @click="selectComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals></active-goals>
    <manage-goals></manage-goals> -->
    <!-- keep-alive optional, prevents component from getting destroyed and remade, component state is saved in cache-->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  //local components thats can only be used here, in this App.vue file
  //all option example works
  components:{
    //'the-header': TheHeader
    //html will read this as 'the-Header'
    //TheHeader: TheHeader
    TheHeader,
    // BadgeList,
    // UserInfo, 
    // CourseGoals, 
    ActiveGoals, 
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    selectComponent(cmp){
      this.selectedComponent = cmp
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>