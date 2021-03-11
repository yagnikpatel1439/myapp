<template>
    <v-container>
        <!-- <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to='/meetups'> Explore Meetups </v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to='/meetup/new'> Organize  Meetup </v-btn>
            </v-flex>
        </v-layout> -->
        <v-layout row wrap>
             <v-carousel>
            <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            reverse-transition="fade-transition"
            transition="fade-transition"
            ></v-carousel-item>
        </v-carousel>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                meetups: [
                    { 
                        imageUrl: 'https://unsplash.com/photos/wn7dOzUh3Rs', id: 'image1'
                    },
                    { 
                        imageUrl: 'https://unsplash.com/photos/1-aA2Fadydc', id: 'image2'
                    },
                    { 
                        imageUrl: 'https://unsplash.com/photos/a0tFtwhVrbA', id: 'image3'
                    },
                ]
            }
        }
    }
</script>
