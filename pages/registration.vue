<template>
  <div>
    <header-block />
    <div class="site-section_registration">
      <div class="container">
        <div class="row">
          <div class="section-title text-center wow fadeInDown">
            <h2>Registration</h2>
          </div>
        </div>
        <div class="row">
          <div class="div">
            <div class="col-md-3">
              <div class="section-image wow fadeInLeft">
                <div class="section-img">
                  <img src="/image/group.png" />
                </div>
              </div>
              <div class="section-image-block">
                <div class="section-image wow fadeInLeft">
                  <div class="section-img">
                    <img src="/image/5.png" />
                  </div>
                </div>

                <div class="section-image wow fadeInLeft">
                  <div class="section-img">
                    <img src="/image/girl.png" />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="section-city wow fadeInRight">
                <div>
                  <p style="font-size: 17px;">
                    In order to be registered for Eurasian Spelling Bee English
                    Language Competition, please contact your country
                    coordinator below:
                  </p>
                </div>
                <div class="custom-icon-wrap">
                  <div>
                    <h3>
                      <strong>China</strong>
                      <p>
                        Beijing Eduwise Research Institute for Data Science,
                        address: Room 1401,No.5,Changzhi Road,Haidian
                        District,Beijing,China - tel: +8601057206667, email:
                        mucchunning@gmail.com - Wang Chunning
                      </p>
                    </h3>
                  </div>
                </div>

                <div class="d-flex align-items-center custom-icon-wrap">
                  <div>
                    <h3>
                      <strong>Malaysia</strong>
                      <p>
                        Caya Academy Sdn Bhd, address: 47160 Puchong, Block H1,
                        Level 1, Setiawalk, Persiaran Wawasan, Pusat Bandar
                        Puchong, Selangor, Malaysia - tel: +60123833218, email:
                        ckgan@english.edu.my - Gan C K
                      </p>
                    </h3>
                  </div>
                </div>

                <div class="d-flex align-items-center custom-icon-wrap">
                  <div>
                    <h3>
                      <strong>Vietnam</strong>
                      <p>
                        FERMAT EDUCATION, address: No. 6A1 Ngoc Khanh Sub-area,
                        Ba Dinh District Hanoi, 100000 Vietnam - tel:
                        +84766289865, email: havtt.fe@gmail.com - Vu Thi Thuy Ha
                      </p>
                    </h3>
                  </div>
                </div>

                <div class="d-flex align-items-center custom-icon-wrap">
                  <div>
                    <h3 class="m-0">
                      <strong>Uzbekistan</strong>
                      <p>
                        International Olympiads Academy, Tashkent, Bobur st,
                        tel: +998974110399, email: ihtiyora@yandex.ru
                      </p>
                    </h3>
                  </div>
                </div>

                <div class="d-flex align-items-center custom-icon-wrap">
                  <div>
                    <h3 class="m-0">
                      <strong>Indonesia</strong>
                      <p>
                        Bruin Learning, address: Metro Broadway A55 Pantai Indah
                        Kapuk Jakarta Utara, 14460, tel: +62 818183448, email:
                        bruinlearning.id@gmail.com - Juliana Tanjo
                      </p>
                    </h3>
                  </div>
                </div>
                <div class="d-flex align-items-center custom-icon-wrap">
                  <div>
                    <h3 class="m-0">
                      <strong>Kyrgyzstan</strong>
                      <p>
                        UniCEP - Universal Competition of Educational Poster,
                        address: Tynystanov 28, Karakol, tel: +996708677597,
                        email: unicep.center@gmail.com - Mustafa Ozdemir
                      </p>
                    </h3>
                  </div>
                </div>

                <div class="d-flex align-items-center custom-icon-wrap">
                  <div>
                    <h3 class="m-0">
                      <strong>Philippines</strong>
                      <p>
                        Mathematics Olympics Training League Incorporated
                        (MOTLI), address: Kidapawan City Philippines 9400, tel:
                        +63 946 075 6660, email: bingdanis12@hotmail.com - James
                        Kelvin U. Fordan
                      </p>
                    </h3>
                  </div>
                </div>

                <div class="d-flex align-items-center custom-icon-wrap">
                  <div>
                    <h3 class="m-0">
                      <strong>Thailand</strong>
                      <p>
                        St Marks International school, address: Soi 52 Rama 9
                        road, Suanluang Bangkok Thailand 10250, tel:
                        +66945934221, email: bingdanis12@hotmail.com – Robert
                        Fordan
                      </p>
                    </h3>
                  </div>
                </div>

                <div class="d-flex align-items-center custom-icon-wrap">
                  <div>
                    <h3 class="m-0">
                      <strong>Singapore</strong>
                      <p>
                        PS Education Pte Ltd, address: 51 Goldhill Plaza #08-02
                        Singapore, tel: +65 6670 6856,
                        email: pseo.asia@gmail.com – Sarah Ho
                      </p>
                    </h3>
                  </div>
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
import FooterBlock from "~/components/footer/Footer.vue";

export default {
  components: {
    HeaderBlock,
    FooterBlock
  }
};
</script>