<template>
  <v-app>
    <app-naviagtion-drawer
      :side-nav="sideNav"
      :menu-items="menuItems"
      @close="sideNav = false"
    />

    <app-naviagtion-bar
      :menu-items="menuItems"
      @click:side-nav="sideNav = true"
    />

    <main>
      <router-view />
    </main>
  </v-app>
</template>

<script>
import AppNaviagtionBar from './components/app-navigation-bar.vue';
import AppNaviagtionDrawer from './components/app-navigation-drawer.vue';


export default {
  components: {
    AppNaviagtionBar,
    AppNaviagtionDrawer,
  },

  data() {
    return {
      menuItems: [
        { icon: 'mdi-users', title: 'Meetups', link:'/meetups' },
        { icon: 'mdi-coffee', title: 'Organize Meetup', link:'/meetup/new' },
        { icon: 'mdi-profile', title: 'Profile', link:'/profile' },
        { title: 'Sign up', link:'/signup' },
        { title: 'Sign in', link:'/signin' },
      ],

      sideNav: false,
    };
  },
};
</script>
