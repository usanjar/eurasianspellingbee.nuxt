<template>
  <div>
    <div class="wrapper">
      <header-block />

      <div class="section-home">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 section-home_block">
              <div class="col-lg-6">
                <div class="section-home_header">
                  <div class="home-title">
                    <div class="wow fadeInUp" data-wow-duration="1s">
                      <h1>
                        Eurasian Spelling Bee English Language Competition is a
                        sheer enjoyment
                      </h1>
                    </div>
                    <div class="home-title_text wow fadeInUp" data-wow-duration="1.6s">
                      <span>
                        The first Eurasian Spelling Bee English Language
                        Competition is founded by English Language Proficiency
                        Competition Ltd. (ELPC) Uzbekistan. The main sponsor of
                        the competition is a UK based awarding organisation
                        specialising in English language qualifications and
                        exams, Gatehouse Awards. The Gatehouse Awards team
                        prepare all the support and assessment materials for the
                        Eurasian Spelling Bee Competition.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-block wow fadeInRight" data-wow-duration="1.2s">
                  <form id="w0" class="form-box" action="/" method="post">
                    <h3 class="h4 text-black" style="color: black;">Sign In</h3>
                    <div class="form-group required">
                      <input
                        type="text"
                        id="securityform-username"
                        class="form-control"
                        name="SecurityForm[username]"
                        placeholder="username"
                        aria-required="true"
                      />

                      <p class="help-block help-block-error"></p>
                    </div>
                    <div class="form-group field-securityform-password required">
                      <input
                        type="password"
                        id="securityform-password"
                        class="form-control"
                        name="SecurityForm[password]"
                        placeholder="password"
                        aria-required="true"
                      />

                      <p class="help-block help-block-error"></p>
                    </div>
                    <button type="submit" class="btn btn-primary login">
                      <span>Login</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Message US -->

    <div class="site-section_message">
      <div class="container">
        <div class="all-message">
          <div class="row">
            <div class="col-md-3"></div>

            <div class="col-md-6 wow slideInUp" data-wow-duration="1.2s">
              <div class="message-title">
                <h2>Mesage Us</h2>
                <p>
                  Please do not hesitate to message us if you have any queries
                  about our competition. Eurasian Spelling Bee team is 24/7
                  available to receive your inquiries.
                </p>
              </div>
              <div class="row">
                <form>
                  <div class="col-md-6">
                    <div class="form-block">
                      <input
                        type="text"
                        class="form-control"
                        id
                        aria-describedby="emailHelp"
                        placeholder="First name"
                      />
                    </div>
                    <p class="help-block help-block-error"></p>
                  </div>
                  <div class="col-md-6">
                    <div class="form-block">
                      <input type="text" class="form-control" id placeholder="Last name" />
                    </div>
                    <p class="help-block help-block-error"></p>
                  </div>
                  <div class="col-md-12">
                    <div class="form-block">
                      <input type="text" class="form-control" id placeholder="Subject" />
                    </div>
                    <p class="help-block help-block-error"></p>
                  </div>
                  <div class="col-md-12">
                    <div class="form-block">
                      <input type="email" class="form-control" id placeholder="Email" />
                    </div>
                    <p class="help-block help-block-error"></p>
                  </div>

                  <div class="col-md-12">
                    <div class="form-block">
                      <textarea
                        class="form-control"
                        id
                        cols="30"
                        rows="10"
                        placeholder="Write your message here. "
                        style="padding: 5px;"
                      ></textarea>
                    </div>
                    <p class="help-block help-block-error"></p>
                  </div>
                  <div class="col-md-12">
                    <div class="field-loginform">
                      <img src="/image/code.jpg" alt class="pull-left" />
                      <input type="text" class="form-control" placeholder="security code" />
                    </div>
                    <p class="help-block help-block-error"></p>
                    <div class="buttonS">
                      <button type="submit" class="btn_message2 btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>

    <footer-block />
  </div>
</template>

<script>
import FooterBlock from "~/components/footer/Footer.vue"
import HeaderBlock from '~/components/Header'

export default {
  components: {
    FooterBlock,
    HeaderBlock
  },
}
</script>