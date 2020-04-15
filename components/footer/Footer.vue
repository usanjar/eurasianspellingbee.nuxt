<template>
    <div class="footer wow slideInUp" data-wow-duration="1.6s" style="background-color: #f8f9fa;">
      <div class="container">
        <div class="row">
          <div class="footer-item">
            <have-question />
            <links />
            <subscribe />
          </div>
        </div>
        <div class="footer-copy">
          <copyright />
        </div>
      </div>
    </div>
</template>

<script>
import HaveQuestion from '~/components/footer/HaveQuestion'
import Links from '~/components/footer/Links'
import Subscribe from '~/components/footer/Subscribe'
import Copyright from '~/components/footer/Copyright'

export default {
  components: {
    HaveQuestion,
    Links,
    Subscribe,
    Copyright
  }
}
</script>