<template>
    <v-container class="pa-md-10 mx-lg-auto">
        <v-layout row wrap>
             <v-carousel>
            <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            reverse-transition="fade-transition"
            transition="fade-transition"
            @click="onLoadMeetup(meetup.id)"
            >
            </v-carousel-item>
        </v-carousel>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        
        computed: {
            meetups() {
                return this.$store.getters.featuredMeetups
            }
        },
        methods: {
            onLoadMeetup(id) {
                this.$router.push('/meetups/' + id)
            }
        }
    }
</script>

<style scoped>
  
</style>
