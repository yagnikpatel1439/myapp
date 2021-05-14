<template>
  <v-container class="mt-15">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4 class="secondary--text text-center">Create a new Meetup</h4>
      </v-flex>
    </v-layout> 
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup" class="mt-10" >
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              name="title"
              label="Title"
              id="title"
              v-model="title"
              required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              name="location"
              label="Location"
              id="location"
              v-model="location"
              required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              name="imageUrl"
              label="Image Url"
              id="imageUrl"
              v-model="imageUrl"
              required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150px">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              name="description"
              label="Description"
              id="description"
              v-model="description"
              multi-line
              required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h4>Choose Date & Time</h4>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker v-model="date" class="mb-3"></v-date-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker v-model="time" format="24hr"></v-time-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3 class="mt-4">
              <v-btn class="primary" :disabled="!formIsValid" type="submit">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex> 
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title:'',
      location:'',
      imageUrl:'',
      description:'',
      date:new Date(),
      time:new Date()
    }
  },
  computed: {
    formIsValid() {
      return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.discription !== ''
    },
    submittableDateTime () {
      const date = new Date(this.date)
      if (typeof this.time === 'string') {
        const hours = this.time.match(/^(\d+)/)[1]
        const minutes = this.time.match(/:(\d+)/)[1]
        date.setHours(hours)
        date.setMinutes(minutes)
      } else {
        date.setHours(this.time.getHours())
        date.setMinutes(this.time.getMinutes())
      }
      
      return date
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submittableDateTime,
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetup')
    }
  }

}
</script>