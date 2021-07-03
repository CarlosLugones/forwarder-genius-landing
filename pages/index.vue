<template>
  <div>
    <b-navbar wrapper-class="container">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="/img/brand.svg" alt="Forwarder Genius" width="100pt">
        </b-navbar-item>
      </template>
      <!-- template #start>
        <b-navbar-item href="#">
          Home
        </b-navbar-item>
        <b-navbar-item href="#">
          Documentation
        </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">
            About
          </b-navbar-item>
          <b-navbar-item href="#">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown>
      </template -->

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a href="https://t.me/ForwarderGeniusBot" class="button is-primary is-rounded" target="_blank">
              <strong>Start now</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="hero is-primary is-bold">
      <div class="hero-content">
        <section class="section">
          <div class="has-text-centered margin-bottom-20">
            <img class="brand" src="/img/brand.svg" alt="Forwarder Genius" width="200pt">
          </div>
          <h1 class="title has-text-centered margin-bottom-20">
            Forwarder Genius
          </h1>
          <h2 class="subtitle has-text-centered">
            Forward messages in Telegram automatically
          </h2>
        </section>
      </div>
    </div>

    <section class="section">
      <div class="columns is-centered">
        <div class="column is-6-desktop is-12-mobile">
          <div class="has-text-centered">
            <img src="/img/flow.png" alt="Forwarder flow">
          </div>
        </div>
      </div>
      <p class="has-text-centered">
        <small>The bot filters your messages from origin group/channel and forwards them to destination chat.</small>
      </p>
    </section>

    <section class="section">
      <p class="title has-text-centered margin-bottom-20">
        Granular filters
      </p>
      <div class="columns is-centered">
        <div class="column is-6-desktop is-12-mobile">
          <div class="box">
            <div class="columns is-multiline is-centered">
              <div v-for="(filter, key) in filters" :key="key" class="column is-2">
                <ForwarderFilter :icon="filter.icon" :label="filter.label" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="has-text-centered">
        <small>More filters coming up soon!</small>
      </p>
    </section>

    <div class="hero is-black is-bold">
      <div class="hero-content">
        <section class="section has-text-centered">
          <p class="cta">
            Start now and get
          </p>
          <p class="cta-number" style="margin-bottom: 5pt !important;">
            10 000
          </p>
          <p class="margin-bottom-20">
            free messages to forward
          </p>
          <b-button type="is-white" size="is-large" icon-left="telegram" rounded>
            Start the bot
          </b-button>
        </section>
      </div>
    </div>

    <!-- footer -->
    <ul class="foo has-text-centered">
      <li class="margin-bottom-20">
        <a href="https://telegra.ph/Forwarder-Bot---Tutorial-03-09" target="_blank">Tutorial</a>
        <a href="https://telegra.ph/Forwarder-Bot---Changelog-04-02" target="_blank">Changelog</a>
        <a href="https://telegra.ph/Forwarder-Bot---Use-Terms-and-Privacy-Policy-05-01" target="_blank">Terms and Privacy</a>
        <a href="https://t.me/LugodevSupportBot" target="_blank">Support</a>
      </li>
      <p>
        <span>Created with</span>
        <b-icon icon="heart" type="is-danger" size="is-small"></b-icon>
        <span>by <a href="https://lugodev.com" target="_blank">@lugodev</a></span>
      </p>
    </ul>
    <!-- end footer -->
  </div>
</template>

<script>
import ForwarderFilter from '~/components/ForwarderFilter'
export default {
  name: 'HomePage',
  components: { ForwarderFilter },
  data () {
    return {
      filters: [
        { label: 'Text', icon: 'message-text-outline' },
        { label: 'Audio', icon: 'volume-high' },
        { label: 'Photos', icon: 'image' },
        { label: 'Animations', icon: 'gif' },
        { label: 'Videos', icon: 'video' },
        { label: 'Stickers', icon: 'sticker-circle-outline' },
        { label: 'Polls', icon: 'chart-box-outline' },
        { label: 'Locations', icon: 'map-marker' },
        { label: 'Contacts', icon: 'account-box-outline' },
        { label: 'Hashtags', icon: 'pound' },
        { label: 'Mentions', icon: 'at' },
        { label: 'Documents', icon: 'file-document-outline' }
      ]
    }
  }
}
</script>

<style>
.brand {
  background: white;
  border-radius: 50%;
}
.margin-bottom-20 {
  margin-bottom: 20pt !important;
}
.cta {
  font-size: 30pt;
}
.cta-number {
  font-size: 60pt;
}
.box {
  color: white;
  border-radius: 20pt;
  padding: 20pt;
  background: #A83BFE;
}
.foo {
  margin: 20pt 0 20pt 0;
}
ul li a::after {
  content: '・';
  margin: 0 5pt 0 5pt;
}
ul li a:last-child:after {
  content: ''
}
</style>
