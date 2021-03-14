<template>
    <v-card
    class="mx-auto"
    max-width="800"
    elevation="2"
  >
    <v-container v-for="meetup in meetups" :key="meetup.id">
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
            to="/meetups/1"
        >
            Explore
        </v-btn>
        </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>

export default {
    data() {
            return {
                meetups: [
                    { 
                        imageUrl: 'https://www.startupbridge.eu/wp-content/uploads/2018/12/IMG_20181206_2036531-1030x773.jpg', 
                        id: 'image1', 
                        title: 'LaravelDev', 
                        subtitle: 'Meet fellow artisans',
                        address:'123 Khandla House',
                        date: '30 Feb, 2020'
                    },
                    { 
                        imageUrl: 'https://fundbox.com/blog/wp-content/uploads/2017/08/DC_SMB_Meetup_ss_652442728.jpg', 
                        id: 'image2', 
                        title: 'DjangoDev', 
                        subtitle: 'Meet Djangoians',
                        address:'123 Khandla House',
                        date: '30 Feb, 2020'
                    },
                    { 
                        imageUrl: 'https://cdn.eventil.com/uploads/event/header_image/299141/highres_482982453.jpg', 
                        id: 'image3', 
                        title: 'VueDev', 
                        subtitle: 'Meet JS ninja',
                        address:'123 Khandla House',
                        date: '30 Feb, 2020'
                    },
                ]
            }
        }
}
</script>
