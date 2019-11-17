<template>
  <div class="parker">
    <h2>Parker</h2>
    <Results companyName="Facebook" :resultsRed="redData" :resultsAmber="amberData" />
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
    permission: 'Media',
    reason: 'This website may record, store and access your video and audio files.',
    additionalDetails: '',
  },
  {
    id: 2,
    icon: '',
    permission: 'Files',
    reason:
      'By using this website you may be granting access to your device’s file system, such as documents, photos and media files',
    additionalDetails: '',
  },
  {
    id: 4,
    icon: '',
    permission: 'Camera',
    reason:
      'The phone number you specified during sign up, is stored to unlock your account in the case of forgotten credentials',
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
];

const fakeDataAmber = [
  {
    id: 1,
    icon: '',
    permission: 'Marketing',
    reason:
      'By signing up to this website be aware that you may receive marketing materials from them in the future',
    additionalDetails: '',
  },
  {
    id: 2,
    icon: '',
    permission: 'IP Address',
    reason:
      'This application accesses your computer’s unique address to identify your device from others.',
    additionalDetails: '',
  },
  {
    id: 3,
    icon: '',
    permission: 'Marketing',
    reason:
      'By signing up to this website be aware that you may receive marketing materials from them in the future',
    additionalDetails: '',
  },
  {
    id: 4,
    icon: '',
    permission: 'IP Address',
    reason:
      'This application accesses your computer’s unique address to identify your device from others.',
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
      redData: fakeData,
      amberData: fakeDataAmber,
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
