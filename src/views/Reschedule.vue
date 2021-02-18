<template>
  <BookingSteps :is-rescheduling="true" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookingSteps from '@/components/bookingSteps/BookingSteps.vue';
import { useStore } from '@/store';
import ActionTypes from '@/store/action-types';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    BookingSteps,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    let appointmentID: number;
    if (typeof route.params.appointmentID === 'string') {
      appointmentID = parseInt(route.params.appointmentID, 10);
    } else {
      appointmentID = parseInt(route.params.appointmentID[0], 10);
    }

    // TODO: fetch using slug from URL
    store.dispatch(ActionTypes.FETCH_COMPANY, 1);
    store.dispatch(ActionTypes.FETCH_APPOINTMENT, appointmentID);
  },
});
</script>
