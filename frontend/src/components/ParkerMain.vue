<template>
  <div class="parker">
    <h2>Parker</h2>
    <Results companyName="Facebook" :results="data" />
    <Error v-if="isError" />
  </div>
</template>

<script>
import Results from '@/components/Results';
import Error from '@/components/Error';

const fakeData = [
  {
    id: 1,
    icon: '',
    permission: 'IP Address',
    reason: 'Your IP address is recorded and logged to determin country',
    additionalDetails: '',
  },
  {
    id: 2,
    icon: '',
    permission: 'Location',
    reason:
      'Your location is refered from your browser and IP address, and is used to show nearby businesses',
    additionalDetails: '',
  },
  {
    id: 3,
    icon: '',
    permission: 'Phone Number',
    reason:
      'The phone number you specified during sign up, is stored to unlock your account in the case of forgotten credentials',
    additionalDetails: '',
  },
  {
    id: 4,
    icon: '',
    permission: 'Webcam',
    reason:
      'An unencrypted 24 hr live feed from all your cameras will be broadcasted on the internet',
    additionalDetails: '',
  },
  {
    id: 5,
    icon: '',
    permission: 'Full Name',
    reason:
      'After the sign up process is complete, this company will legally own all rights to your full name',
    additionalDetails: '',
  },
];

export default {
  name: 'ParkerMain',
  data: () => {
    return {
      isError: false,
      errorDetals: {
        title: null,
        body: null,
      },
      data: fakeData,
    };
  },
  components: {
    Results,
    Error,
  },
  methods: {
    fetchResults: () => {},
  },
};
</script>

<style scoped lang="scss">
.parker {
  margin: 0 auto;
  padding: 1em;
  width: 80%;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
  display: inline-block;

  &:before {
    content: '';
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    filter: blur(10px);
  }

  h2 {
    color: #ffffff;
    font-size: 3em;
    text-shadow: 1px 1px 2px rgba(38, 38, 38, 0.87);
    margin: 0.2em;
  }
}
</style>
