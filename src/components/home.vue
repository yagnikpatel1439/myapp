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
            transition="fade-transition">
            </v-carousel-item>
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
                        imageUrl: 'https://www.startupbridge.eu/wp-content/uploads/2018/12/IMG_20181206_2036531-1030x773.jpg', id: 'image1', title: 'LaravelDev'
                    },
                    { 
                        imageUrl: 'https://fundbox.com/blog/wp-content/uploads/2017/08/DC_SMB_Meetup_ss_652442728.jpg', id: 'image2', title: 'DjangoDev'
                    },
                    { 
                        imageUrl: 'https://cdn.eventil.com/uploads/event/header_image/299141/highres_482982453.jpg', id: 'image3', title: 'VueDev'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
  
</style>
