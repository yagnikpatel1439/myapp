<template>
    <v-card
    class="mx-auto"
    max-width="800"
    elevation="2"
  >
    <v-container fluid v-for="meetup in meetups" :key="meetup.id" >
        <v-img  :src="meetup.imageUrl" max-height="400px">
        <v-card-title>
            {{meetup.title}}
        </v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
            {{meetup.subtitle}}
        </v-card-subtitle>

        <v-card-text class="text--primary">
        <div>{{meetup.address}}</div>

        <div>{{meetup.date}}</div>
        </v-card-text>

        <v-card-actions>
        <v-btn
            color="orange"
            text
        >
            Share
        </v-btn>

        <v-btn
            color="orange"
            text
            :to="'/meetups/' +  meetup.id"
        >
            Explore
        </v-btn>
        </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>

export default {
    computed: {
        meetups () {
            return this.$store.getters.loadedMeetups
        }
    }
} 
</script>
