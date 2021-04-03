import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
       loadedMeetups: [
        { 
            imageUrl: 'https://www.startupbridge.eu/wp-content/uploads/2018/12/IMG_20181206_2036531-1030x773.jpg', 
            id: 'askjdhghjgy111', 
            title: 'LaravelDev',
            subtitle: 'Meet fellow artisans',
            address:'123 Khandla House',
            date: '30 Feb, 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
        { 
            imageUrl: 'https://fundbox.com/blog/wp-content/uploads/2017/08/DC_SMB_Meetup_ss_652442728.jpg', 
            id: 'askjdhghjgy222', 
            title: 'DjangoDev',
            subtitle: 'Meet Djangoians',
            address:'123 Khandla House',
            date: '30 Feb, 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
        { 
            imageUrl: 'https://cdn.eventil.com/uploads/event/header_image/299141/highres_482982453.jpg', 
            id: 'askjdhghjgy333', 
            title: 'VueDev',
            subtitle: 'Meet JS ninja',
            address:'123 Khandla House',
            date: '30 Feb, 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
    ],
    user: { 
        id: 'image1',
        registeredMeetup: ['image1']
    }
    },
    mutations: {},
    actions: {},
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0,5);
        },
        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        }
    }

})