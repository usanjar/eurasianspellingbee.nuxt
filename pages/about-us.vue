<template>
  <div>
    <header-block />
    <div class="site-section">
      <div class="site-section-head">
        <div class="container">
          <div class="row">
            <div class="col-md-12 wow fadeInDown">
              <div class="section-title text-center">
                <h2>About Us</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="div" style="margin-bottom: 6rem;">
              <div class="col-md-3 wow fadeInLeft">
                <div class="section-image">
                  <div class="section-img">
                    <img src="/image/3.png" />
                  </div>
                </div>
              </div>
              <div class="col-md-9 wow fadeInRight">
                <div class="section-parag">
                  <p>
                    Eurasian Spelling Bee English Language Competition is
                    organised by ELPC – English Language Proficiency Competition
                    LTD Uzbekistan in cooperation with Gatehouse Awards LTD
                    United Kingdom to promote English language, and challenge
                    students from Asia and Europe to improve their lexical
                    skills, particularly in respect to spelling. It inspires
                    students to read more, in line with the theme “Read to
                    Succeed”, in order to encourage them to learn the major
                    principles and patterns of English, expand their vocabulary
                    and work on their pronunciation. It also enhances students’
                    development of poise and communication under pressure and
                    provides an opportunity for them to get exposed to the
                    national limelight. It also brings attention to the schools’
                    pressing literacy needs and prepares and equips teachers
                    with the skills to teach English. The main goal is to create
                    and nourish friendly relations and national understanding
                    between young people interested in English language from
                    private and public schools in Asian and European countries.
                  </p>
                </div>
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
import FooterBlock from "~/components/footer/Footer.vue"

export default {
  components: {
    HeaderBlock,
    FooterBlock
  }
};
</script>