<template>
    <header class="header" role="banner">
  <div class="moj">
    <nav role="navigation">
      <ul>
        <li><nuxt-link link to="/hrana"><a href="#">Hrana</a></nuxt-link></li>
        <li><nuxt-link link to="/pice"><a href="#">Piće</a></nuxt-link></li>
        <li><nuxt-link link to="/slatkisi"><a href="#">Slatkiši</a></nuxt-link></li>
        <li><nuxt-link link to="/sport"><a href="#">Sport</a></nuxt-link></li>
        <li><nuxt-link link to="/higijena"><a href="#">Higijena</a></nuxt-link></li>
      </ul>
    </nav>
  </div>
</header>
</template>

<style>
.header{
    height: 100%;
    width: 100%;
}
.moj{
    text-align: left;
    line-height: 70px;
}
a {
    color: #e47911;
    
}
a:hover {
 color: #e47911;
}
</style>