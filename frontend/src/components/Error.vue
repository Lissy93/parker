<template>
  <Section class="error">
    <h2>{{ errTitle || 'Unable to get results 😟' }}</h2>
    <p>{{ errBody }}</p>
  </Section>
</template>

<script>
import Section from '@/components/Section';

export default {
  name: 'Error',
  props: {
    errTitle: String,
    errBody: String,
  },
  components: {
    Section,
  },
};
</script>
