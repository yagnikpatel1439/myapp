<template>
  <v-app>

    <!-- Navigation drawer for mobile screens only -->
    <v-navigation-drawer absolute temporary v-model="sideNav">
      <v-list nav dense>
        <v-list-item link v-for="item in menuItems" :key="item.title" router :to="item.link">

            <v-icon left small>
              {{item.icon}} 
            </v-icon>
            <v-list-item-title>
              {{item.title}}
            </v-list-item-title>
        
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--App bar for bigger screen -->
    <v-app-bar fixed color="grey">
      <v-app-bar-nav-icon left  @click="sideNav = !sideNav" class="hidden-sm-and-up"> </v-app-bar-nav-icon>
      <v-toolbar-title  class="font-weight-bold">
        <router-link to="/" tag="span" style="cursor: pointer">
        DevMeetup
        </router-link>
        </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-xs-only" v-for="item in menuItems" :key="item.title">
        <v-btn elevation="3" router :to="item.link"> 
          <v-icon left small>
            {{item.icon}}
          </v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      
    </v-app-bar>
    <main dark>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
   
  },

  data: () => ({
      sideNav: false,
      menuItems: [
       { icon: 'fas fa-users', title: 'Meetups', link:'/meetups' },
       { icon: 'fas fa-coffee', title: 'Organize Meetup', link:'/meetup/new' },
       { icon: 'fas fa-id-card-alt', title: 'Profile', link:'/profile' },
       { icon: 'fas fa-user-plus', title: 'Sign up', link:'/signup' },
       { icon: 'fas fa-user-lock', title: 'Sign in', link:'/signin' },
      ]
  }),
};
</script>
<style scoped>

</style>