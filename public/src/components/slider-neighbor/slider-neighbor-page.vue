<style>
  .slider-page {
    width: 720px;
    height: 420px;
  }
</style>

<template>
  <div class="slider-page">
    <slider-neighbor-item :repeat="sliderItems"></slider-neighbor-item>
  </div>
</template>

<script>
  module.exports = {
    data: {
      items: [],
      sliderItems: []
    },
    methods: {
      ready: function() {
        this.sliderItems = this.getSliderItems()
      },
      getSliderItems: function() {
        return this.items.map(function(item, index) {
          return item;
        }.bind(this));
      }
    }
  };
</script>

