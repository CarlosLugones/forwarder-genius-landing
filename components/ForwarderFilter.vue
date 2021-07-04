<template>
  <div class="filter has-text-centered">
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

<style>
.filter {
  color: white;
  background: #A83BFE !important;
  border-radius: 20pt;
  margin: 10pt;
}
</style>
