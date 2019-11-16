<template>
  <article>
    <h2>Here's what you need to know from {{ companyName }}'s' Privacy Policy</h2>
    <Section class="results" title="🔴 5 Critical Results">
      <div v-for="result in results" :key="result.id">
        <div class="result-row">
          <div class="cell icon">{{ result.icon }}</div>
          <div class="cell permission">{{ result.permission }}</div>
          <div class="cell reason">{{ result.reason }}</div>
          <div class="details">{{ result.details }}</div>
        </div>
      </div>
    </Section>
    <Section class="results" title="⚠️ 2 Warning Results">
      <div v-for="result in results" :key="result.id">
        <div class="result-row">
          <div class="cell icon">{{ result.icon }}</div>
          <div class="cell permission">{{ result.permission }}</div>
          <div class="cell reason">{{ result.reason }}</div>
          <div class="details">{{ result.details }}</div>
        </div>
      </div>
    </Section>
    <Section class="results" title="✅ 12 Passes">
      <div v-for="result in results" :key="result.id">
        <div class="result-row">
          <div class="cell icon">{{ result.icon }}</div>
          <div class="cell permission">{{ result.permission }}</div>
          <div class="cell reason">{{ result.reason }}</div>
          <div class="details">{{ result.details }}</div>
        </div>
      </div>
    </Section>
  </article>
</template>

<script>
import Section from '@/components/Section';

export default {
  name: 'Results',
  components: {
    Section,
  },
  props: {
    companyName: String,
    results: Array,
  },
};
</script>

<style lang="scss" scoped>
.results {
  margin: 0 auto;

  .result-row {
    border-bottom: 1px solid #eeecec;
    padding: 0.5em 0;
    text-align: left;
    display: flex;
    flex-direction: row;
  }
  .cell {
    display: inline-block;
    vertical-align: top;
    text-align: left;
    padding: 0.2em 0.5em;
    &.icon {
      flex-basis: 2em;
      flex-shrink: 0;
    }
    &.permission {
      flex-basis: 10em;
      flex-shrink: 0;
      font-weight: 600;
    }
    &.reason {
      flex-grow: 1;
    }
  }
}
</style>
