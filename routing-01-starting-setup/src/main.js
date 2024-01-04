import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/teams',
      component: TeamsList, // our domain.com/teams => TeamsList
    },
    {
      path: '/users',
      component: UserList, // our domain.com/users => UsersList
    },
    { path: '/teams/:teamId', component: TeamMembers, props: true }, //teamId will be passed as a prop rather than stored in a $router.params
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
