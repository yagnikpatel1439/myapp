<template>
  <v-card
    class="mx-auto"
    color="whitesmoke"
    dark
    max-width="1000"
    >

    <v-container v-for="meetup in meetups" :key="meetup.id">
        <v-card-title>
            {{meetup.title}}
        </v-card-title>
        <v-img  :src="meetup.imageUrl" max-height="200px">
        </v-img>   
        <v-card-text class="headline font-weight-bold">
             {{meetup.date}}
        </v-card-text>
        <v-card-text>
            {{meetup.description}}
        </v-card-text>

        <v-card-actions>
        <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
            <v-list-item-title>Speaker</v-list-item-title>
            </v-list-item-content>

            <v-row
            align="center"
            justify="end"
            >
            <v-icon class="mr-1">
                mdi-table-large-plus
            </v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">
                mdi-share-variant
            </v-icon>
            <span class="subheading">45</span>
            </v-row>
        </v-list-item>
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
                        date: '30 Feb, 2020',
                        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio veritatis temporibus corrupti sed explicabo! Maxime quasi corporis consequatur debitis necessitatibus, quis sed perferendis et! Commodi quisquam suscipit totam soluta ipsa.Impedit repudiandae, aspernatur minima odio illum, nemo repellendus in mollitia, sit explicabo qui eligendi doloremque id fugiat alias deleniti est? Deserunt numquam cupiditate assumenda voluptates molestiae ex est in ipsum.'
                    },
                    { 
                        imageUrl: 'https://fundbox.com/blog/wp-content/uploads/2017/08/DC_SMB_Meetup_ss_652442728.jpg', 
                        id: 'image2', 
                        title: 'DjangoDev', 
                        subtitle: 'Meet Djangoians',
                        address:'123 Khandla House',
                        date: '30 Feb, 2020',
                        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio veritatis temporibus corrupti sed explicabo! Maxime quasi corporis consequatur debitis necessitatibus, quis sed perferendis et! Commodi quisquam suscipit totam soluta ipsa.Impedit repudiandae, aspernatur minima odio illum, nemo repellendus in mollitia, sit explicabo qui eligendi doloremque id fugiat alias deleniti est? Deserunt numquam cupiditate assumenda voluptates molestiae ex est in ipsum.'
                    },
                    { 
                        imageUrl: 'https://cdn.eventil.com/uploads/event/header_image/299141/highres_482982453.jpg', 
                        id: 'image3', 
                        title: 'VueDev', 
                        subtitle: 'Meet JS ninja',
                        address:'123 Khandla House',
                        date: '30 Feb, 2020',
                        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio veritatis temporibus corrupti sed explicabo! Maxime quasi corporis consequatur debitis necessitatibus, quis sed perferendis et! Commodi quisquam suscipit totam soluta ipsa.Impedit repudiandae, aspernatur minima odio illum, nemo repellendus in mollitia, sit explicabo qui eligendi doloremque id fugiat alias deleniti est? Deserunt numquam cupiditate assumenda voluptates molestiae ex est in ipsum.'
                    },
                ]
            }
        }
}
</script>
