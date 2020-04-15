<template>
  <div>
    <header-block />
    <div class="section-contact">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="contact-title">
              <h2>Contact Us</h2>
            </div>
          </div>

          <div class="col-md-12">
            <div class="contact-location">
              <div style="width: 100%;">
                <iframe
                  width="100%"
                  height="500"
                  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=41.271523, 69.260360&amp;q=77%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%91%D0%BE%D0%B1%D1%83%D1%80%D0%B0%2C%20%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+(The%20International%20Business%20School)&amp;ie=UTF8&amp;t=&amp;z=20&amp;iwloc=B&amp;output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                >
                  <a href="https://www.maps.ie/coordinates.html">latitude longitude finder</a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-block />
  </div>
</template>

<script>
import HeaderBlock from "~/components/Header";
import FooterBlock from "~/components/footer/Footer.vue";

export default {
  components: {
    HeaderBlock,
    FooterBlock
  }
};
</script>