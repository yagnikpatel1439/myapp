<template>
  <v-navigation-drawer
    absolute
    app
    temporary
    :value="sideNav"
    @input="handleInput"
  >
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        link
        :to="item.link"
      >
        <v-icon
          v-if="item.icon"
          left
          small
        >
          {{ item.icon }}
        </v-icon>

        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true,
    },

    sideNav: Boolean,
  },

  methods: {
    handleInput(value) {
      if (!value) this.$emit('close');
    },
  },
};
</script>
