<template>
  <div class="parker-start">
    <Section
      class="enter-url section"
      title="To get started, just enter the URL of a Priacy Policy"
    >
      <input type="text" class="url-input" placeholder="Paste URL" />
      <button class="submit-url">Analyze!</button>
    </Section>

    <Section class="what-is-this-shit" title="About">
      <h3>Parker, Simplifying Priacy Policies</h3>
      <p>
        Parker uses AI and Natural Language Processing, to read and understand privacy policies for
        you. And then summerizes, categorises and explains what personal data will be collected and
        how it will be stored and used in a few simple points.
      </p>
      <h3>Motivation</h3>
      <p>
        We all use the internet, and so agree to privacy policies almost dailey, for companies to
        collect, use and sometimes sell our personal data. We wanted to make it clearer for people,
        so designed Parker. We use AI to understand and then clearly summerize these policies for
        you- because you shouldn't need a degree to know what your signing up to!
      </p>
    </Section>
  </div>
</template>

<script>
import Section from '@/components/Section';

export default {
  name: 'start',
  components: {
    Section,
  },
};
</script>

<style scoped lang="scss">
.parker-start {
  //   height: 600px;
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
.what-is-this-shit {
  text-align: left;
}

.section {
  max-width: 40em;
  margin-top: 5%;
  display: inline-block;
  &.enter-url {
    .url-input {
      width: 85%;
      margin: 0.2em auto;
      border: none;
      outline: none;
      padding: 0.2em 0.4em;
      font-size: 1.8em;
      color: #929292;
      border-radius: 12px;
      box-shadow: 0 9px 39px rgba(0, 0, 0, 0.12), 0 0px 12px rgba(0, 0, 0, 0.22);

      &::placeholder {
        color: #ead9e5;
        opacity: 1;
      }
      &:focus {
        box-shadow: 0 9px 39px rgba(0, 0, 0, 0.18), 0 0px 12px rgba(0, 0, 0, 0.28);
      }
    }
    .submit-url {
      background: linear-gradient(
        to right bottom,
        rgb(132, 94, 194),
        rgb(214, 93, 177),
        rgb(255, 111, 145),
        rgb(255, 150, 113),
        rgb(255, 199, 95),
        rgb(249, 248, 113)
      );
      cursor: pointer;
      width: 85%;
      margin: 0.2em auto;
      border: none;
      outline: none;
      padding: 0.2em 0.4em;
      font-size: 1.8em;
      color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      &:hover {
        box-shadow: 0 9px 39px rgba(0, 0, 0, 0.18), 0 0px 12px rgba(0, 0, 0, 0.28);
      }
    }
  }
}
</style>
