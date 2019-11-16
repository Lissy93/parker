<template>
  <Section class="hello">
    <span>{{ msg }}</span>
  </Section>
</template>

<script>
import Section from '@/components/Section';

export default {
  name: 'HelloWorld',
  components: {
    Section,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
span {
  color: red;
}
</style>
