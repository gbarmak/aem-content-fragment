<template>
  <section class="faq">
      FAQ
  </section>
</template>

<script>
export default {
  beforeMount() {
    const self = this;
    fetch('/content/dam/bayer/banner-1/jcr:content/data.infinity.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      self.header = json.master.header;
      self.imageUrl = json.master.image;
      self.blurb = json.master.blurb;
    })
  },
  data() {
    return {
      header: '',
      blurb: '',
      imageUrl: ''
    };
  },
};
</script>

<style scoped>
  .fax{

  }
</style>
