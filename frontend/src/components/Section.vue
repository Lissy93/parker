<template>
  <section>
    <h2>{{ title }}</h2>
    <div class="card"><slot /></div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
section {
  padding: 1em;

  .card {
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  h2 {
    color: #ffffff;
    margin: 0.5em 0;
    text-align: left;
  }
}
</style>
