<template>
  <v-card
    class="mx-auto mt-10"
    color="whitesmoke"
    dark
    max-width="1000"
    elevation="5"
    >

    <v-container>
        <v-card-title>
            {{meetup.title}}
        </v-card-title>
        <v-img  
        :src="meetup.imageUrl" 
        max-height="300px"
        >
        </v-img>   
        <v-card-text class="headline font-weight-bold">
             {{meetup.date}}
        </v-card-text>
        <v-card-text class="mx-0 grey--text ">
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
            <v-btn 
            elevation="3" 
            color="cyan accent" 
            to="/meetups/1"
            >
                <v-icon>mdi-table-large-plus</v-icon>
                <v-spacer></v-spacer>
                Register
            </v-btn>

            <span class="subheading mr-2"></span>
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
    props: ['id'],
    computed: {
        meetup () {
            return this.$store.getters.loadedMeetup(this.id)
        }
    }
}
</script>
