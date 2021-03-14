<template>
  <v-app-bar app>
    <v-app-bar-nav-icon left  @click="$emit('click:side-nav')" class="hidden-sm-and-up"> </v-app-bar-nav-icon>

    <v-toolbar-title  class="font-weight-bold">
      <router-link to="/" tag="span" style="cursor: pointer">
        DevMeetup
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-xs-only" v-for="item in menuItems" :key="item.title">
      <v-btn elevation="3" :to="item.link">
        <v-icon left small>
          {{item.icon}}
        </v-icon>
        {{item.title}}
      </v-btn>
    </v-toolbar-items>

  </v-app-bar>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      sideNav: false,
    };
  },
};
</script>
