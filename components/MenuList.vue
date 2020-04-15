<template>
  <ul class="header_list">
    <router-link :to="menu.link" v-slot="{ isActive }" v-for="menu in menus" :key="menu.link" exact>
      <li :class="[isActive && 'active_a']">
        <nuxt-link :to="menu.link" class="header_link">{{ menu.title }}</nuxt-link>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  data: () => ({
    menus: [
      {link: '/', title: 'Home'},
      {link: '/about-us', title: 'About us'},
      {link: '/registration', title: 'Registration'},
      {link: '/sample-paper', title: 'Sample paper'},
      {link: '/results', title: 'Results'},
      {link: '/contact-us', title: 'Contact us'},
    ]
  })
}
</script>