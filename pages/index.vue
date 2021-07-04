<template>
  <div>
    <div class="hero" style="background: #2D1C3C">
      <div class="hero-content">
        <section class="section">
          <div class="has-text-centered">
            <img src="/img/brand.svg" alt="Forwarder Genius" width="250pt">
          </div>
          <h1 class="title has-text-centered  has-text-white margin-bottom-20">
            Forwarder Genius
          </h1>
          <h2 class="subtitle has-text-centered has-text-white">
            Forward messages in Telegram automatically
          </h2>
          <div class="has-text-centered">
            <a :href="link" target="_blank">
              <b-button type="is-white" size="is-large" icon-left="telegram" rounded>
                Start the bot
              </b-button>
            </a>
          </div>
        </section>
      </div>
    </div>

    <section class="section">
      <p class="subtitle has-text-centered">
        How it works?
      </p>
      <div class="columns is-centered">
        <div class="column is-6-desktop is-12-mobile">
          <div class="box">
            <div class="has-text-centered">
              <img src="/img/flow.png" alt="Forwarder flow">
            </div>
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
      <div class="columns is-multiline is-centered">
        <ForwarderFilter
          v-for="(filter, key) in filters"
          :key="key"
          :icon="filter.icon"
          :label="filter.label"
          class="column"
        />
      </div>
      <p class="has-text-centered">
        <small>More filters coming up soon!</small>
      </p>
    </section>

    <div class="hero is-black is-bold" style="height: 400px;">
      <div class="hero-content">
        <canvas id="confetti" style="position: absolute;"></canvas>
        <section class="section has-text-centered">
          <p class="cta">
            Start with
          </p>
          <p class="cta-number" style="margin-bottom: 5pt !important;">
            10 000
          </p>
          <p class="margin-bottom-20">
            free messages to forward
          </p>
          <a :href="link" target="_blank">
            <b-button type="is-white" size="is-large" icon-left="telegram" rounded>
              Start the bot
            </b-button>
          </a>
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
      ],
      ref: this.$route.query.ref
    }
  },

  computed: {
    link () {
      let l = 'https://t.me/ForwarderGeniusBot'
      if (this.ref) {
        l += `?start=ref_${this.ref}`
      }
      return l
    }
  },

  mounted () {
    if (process.browser) {
      const canvas = document.getElementById('confetti')
      // const context = canvas.getContext('2d')
      canvas.width = window.innerWidth
      canvas.height = 400

      // resize the canvas to fill browser window dynamically
      window.addEventListener('resize', resizeCanvas, false)

      function resizeCanvas () {
        canvas.width = window.innerWidth
        // canvas.height = window.innerHeight

        /**
         * Your drawings need to be inside this function otherwise they will be reset when
         * you resize the browser window and the canvas goes will be cleared.
         */
        // drawStuff();
      }

      this.$confetti.start({
        particles: [
          {
            type: 'rect',
            size: 5
          }
        ],
        defaultDropRate: 4,
        defaultSize: 8,
        particlesPerFrame: 2,
        windSpeedMax: 0.3,
        canvasElement: window.document.getElementById('confetti')
      })
    }
  }
}
</script>

<style>
.margin-bottom-20 {
  margin-bottom: 20pt !important;
}
.cta {
  font-size: 30pt;
}
.cta-number {
  font-size: 60pt;
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
