<template>
  <article>
    <h2>Here's what you need to know from {{ companyName }}'s' Privacy Policy</h2>
    <Section class="results bad-results" title="🔴 5 Critical Results">
      <div v-for="result in resultsRed" :key="result.id">
        <div class="result-row">
          <div class="cell icon">{{ result.icon }}</div>
          <div class="cell permission">{{ result.permission }}</div>
          <div class="cell reason">{{ result.reason }}</div>
          <div class="details">{{ result.details }}</div>
        </div>
      </div>
    </Section>
    <Section class="results bad-results" title="⚠️ 2 Warning Results">
      <div v-for="result in resultsAmber" :key="result.id">
        <div class="result-row">
          <div class="cell icon">{{ result.icon }}</div>
          <div class="cell permission">{{ result.permission }}</div>
          <div class="cell reason">{{ result.reason }}</div>
          <div class="details">{{ result.details }}</div>
        </div>
      </div>
    </Section>
    <Section class="results good-results" title="✅ 12 Passes">
      <img src="/nt-a-dinosaur-but-still-a-robot.gif" class="awesome-robot" />
      <h3>The following data is <b>not</b> collected, processed or stored</h3>
      <p class="not-collected">
        Microphone, Browsing History, Recommendations, Credit Card Details, Home Address
      </p>
      <br />
      <br />
      <br />
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
    resultsAmber: Array,
    resultsRed: Array,
  },
};
</script>

<style lang="scss" scoped>
article {
  display: inline-block;
  vertical-align: top;
}

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
      flex-basis: 1.5em;
      flex-shrink: 0;
    }
    &.permission {
      flex-basis: 6em;
      flex-shrink: 0;
      font-weight: 600;
    }
    &.reason {
      flex-grow: 1;
    }
  }
  &.bad-results {
    @media (min-width: 1450px) {
      width: 40%;
      display: inline-block;
      .result-row .cell.permission {
        flex-basis: 4em;
      }
    }
  }
  &.good-results {
    text-align: left;
    .not-collected {
      color: #0ab71a;
      padding-right: 5em;
    }
    .awesome-robot {
      position: absolute;
      right: -20px;
      margin-top: -100px;
      width: 30%;
    }
  }
}
</style>
