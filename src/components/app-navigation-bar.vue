<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
      class="hidden-sm-and-up"
      left
      @click="$emit('click:side-nav')"
    />

    <v-toolbar-title class="font-weight-bold">
      <router-link
        :style="{ cursor: 'pointer' }"
        to="/"
        tag="span"
      >
        DevMeetup
      </router-link>
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items
      v-for="item in menuItems"
      :key="item.title"
      class="hidden-xs-only"
    >
      <v-btn
        elevation="3"
        :to="item.link"
      >
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
