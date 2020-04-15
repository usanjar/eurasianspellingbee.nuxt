<template>
    <header class="header">
        <div class="container header-container">
          <div class="header_body">
            <nuxt-link to="/" class="header_logo">
              <img src="/image/logo.png" alt />
            </nuxt-link>
            <div class="header_burger">
              <span></span>
            </div>
            <div class="header_menu">
              <menu-list />
            </div>
          </div>
        </div>
      </header>
</template>

<script>
import MenuList from '~/components/MenuList'

export default {
    components: {
        MenuList
    }
}
</script>