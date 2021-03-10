<template>
  <v-app>

    <!-- Navigation drawer for mobile screens only -->
    <v-navigation-drawer v-model="sideNav">
      <v-list nav dense>
        <v-list-item v-for="item in menuItems" :key="item.title">
          
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
    <v-app-bar color="grey" elevate-on-scroll scroll-target="#scrolling-techniques-7">
      <v-app-bar-nav-icon left  @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"> </v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold">DevMeetup</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-xs-only" v-for="item in menuItems" :key="item.title">
        <v-btn elevation="3"> 
          <v-icon left small>
            {{item.icon}}
          </v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      
    </v-app-bar>
    <main dark>

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
       { icon: 'fas fa-users', title: 'Meetups' },
       { icon: 'fas fa-coffee', title: 'Organize Meetup' },
       { icon: 'fas fa-id-card-alt', title: 'Profile' },
       { icon: 'fas fa-user-plus', title: 'Sign up' },
       { icon: 'fas fa-user-lock', title: 'Sign in' },
      ]
  }),
};
</script>
<style scoped>

</style>