<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dense>
      <v-icon left  @click.native="sideNav = !sideNav">
        fas fa-bars 
      </v-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-toolbar-items>
        <v-btn elevation="2"> 
          <v-icon left small>
            fas fa-users
          </v-icon>
          Meetups
        </v-btn>
      </v-toolbar-items>
      
    </v-toolbar>
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
      sideNav: false
  }),
};
</script>
<style scoped>

</style>