import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, //changes url to localIp/teams
    {
      path: '/teams',
      component: TeamsList, // our domain.com/teams => TeamsList
      children: [
        { path: ':teamId', component: TeamMembers, props: true }, //teamId will be passed as a prop rather than stored in a $router.params
      ],
      //alias: '/' //works same way as { path: '/', redirect: '/teams' } but doesn't change the url
    },
    {
      path: '/users',
      component: UserList, // our domain.com/users => UsersList
    },

    { path: '/:notFound(.*)', redirect: '/teams' }, // this comes last for lowest priority
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
