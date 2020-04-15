<template>
  <div>
    <header-block />
    <div class="site-section_registration wow slideInUp" data-wow-duration="1s">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title text-center" style="margin-bottom: 5rem;">
              <h2>Sample papers</h2>
            </div>
          </div>
          <div class="col-md-12" style="overflow: auto; margin-bottom: 5rem;">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Bee Level</th>
                  <th scope="col">School Level</th>
                  <th scope="col">Written Task</th>
                  <th scope="col">Listening Task</th>
                  <th scope="col">Oral Spelling Task</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>s1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>s1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>s1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>s1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>s1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>s1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>s1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="section-title text-center" style="margin-bottom: 5rem;">
              <span style="font-size: 5rem; color: #000;">Suggested Resources for Oral Spelling Exam</span>
            </div>
          </div>
          <div class="col-md-12" style="overflow: auto; margin-bottom: 5rem;">
            <table class="table exam">
              <thead class="theadexam">
                <tr>
                  <th scope="col">Bee Level</th>
                  <th scope="col">Cefr Level</th>
                  <th
                    scope="col"
                  >Examples of suitable resources – please note that this list is not exhaustive</th>
                </tr>
              </thead>
              <tbody class="tbodyexam">
                <tr>
                  <th scope="row">bee1</th>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">bee2</th>
                  <td>s1</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">bee2</th>
                  <td>s1</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">bee2</th>
                  <td>s1</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">bee2</th>
                  <td>s1</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">bee2</th>
                  <td>s1</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">bee2</th>
                  <td>s1</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
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