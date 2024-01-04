import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, //changes url to localIp/teams
    {
      name: 'teams',
      path: '/teams',
      // component: TeamsList, // our domain.com/teams => TeamsList
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, //teamId will be passed as a prop rather than stored in a $router.params
      ],
      //alias: '/' //works same way as { path: '/', redirect: '/teams' } but doesn't change the url
    },
    {
      path: '/users',
      //component: UserList, // our domain.com/users => UsersList
      components: { default: UserList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEach');
        next();
      },
    },

    { path: '/:notFound(.*)', redirect: '/teams' }, // this comes last for lowest priority
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);

    if (savedPosition) {
      return savedPosition;
    }

    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  // if(to.name==='team-members'){
  //   next();
  // }else{
  //   next({name: 'team-members', params: {teamId: 't2'}})
  // }
  next();
  // next(false);
});

router.afterEach((to, from) => {
  //good for sending analytics data
  console.log(to, from);
});

const app = createApp(App);

app.use(router);

app.mount('#app');
