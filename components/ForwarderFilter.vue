<template>
  <div class="has-text-centered">
    <b-icon :icon="icon"></b-icon>
    <p>{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
