<template>
  <div>
    <h1>Dashboard</h1>
      <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script setup>
import EventCard from '@/components/EventCard.vue'

import {ref} from 'vue'

const   events = ref([
        {
          id: '1234',
          title: 'Puppy Parade',
          time: '12:00',
          date: 'Feb 22, 2022',
        },
        {
          id: '1584',
          title: 'Cat Cabaret',
          time: '9:00',
          date: 'March 4, 2022',
        },
        {
          id: '2794',
          title: 'Doggy Day',
          time: '1:00',
          date: 'June 12, 2022',
        },
        {
          id: '4619',
          title: 'Feline Frenzy',
          time: '8:00',
          date: 'July 28, 2022',
        },
      ])
</script>
