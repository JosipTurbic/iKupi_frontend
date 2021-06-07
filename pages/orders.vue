<template>
  <main>
    <div class="container-fluid your-order">
      <div class="row">
        <div class="col-xl-2 col-lg-1 col-md-12"></div>
        <div class="col-xl-8 col-lg-9 col-md-12">
          <div class="a-spacing-large a-spacing-top-small a-subheader a-breadcrumb">
            <ul class="a-unordered-list a-nostyle a-horizontal">
              <li>
                <nuxt-link to="/profil">
                      <span>Moj račun</span>
                    </nuxt-link>
              </li>
              <li class="a-breadcrumb-divider">›</li>
              <li>
                <nuxt-link to="/orders">
                      <span>Moje narudžbe</span>
                    </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="row">
            <div class="col-md-6 col-sm-5 col-12">
              <h1 class="a-spacing-medium">Moje narudžbe</h1>
            </div>
          </div>
          <div class="a-row a-spacing-medium custom-view-options">
            <ul class="a-unordered-list a-nostyle a-horizontal">
              <li role="tab">
                <span class="a-list-item"></span>
              </li>
              <li class="selected" role="tab">
                <span class="a-list-item">
                  <span class="item">Narudžbe</span>
                </span>
              </li>
            </ul>
          </div>

          <div class="orderContent">
            <div class="orderContentHeader">
              <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-left">
                   <div class="a-row">
                    <span class="a-size-mini a-color-secondary">POŠALJI KORISNIKU</span>
                    <br />
                    <!-- Ime korisnika -->
                    <a class="a-size-base font-weight-bold a-link-normal">
                      {{$auth.$state.user.user.name}}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Narudžbe -->
            <div class="orderContentBodyAlt" v-for="order in orders" :key="order._id">
              <div class="a-row">
                <h1
                  class="a-size-medium a-text-bold"
                  style="color: #111 !important;font-family: 'MyWebFont',Arial,sans-serif !important; "
                >
                  <!-- Vrijeme dostave -->
                  Vrijeme dostave - {{order.estimatedDelivery}}
                </h1>
              </div>
              <!-- Lista proizvoda iz narudžbe -->
              <div v-for="product in order.products" :key="product._id">
                <div class="a-spacing-base"></div>
                <div class="row">
                  <div class="col-xl-2 col-lg-2 col-2">
                    <!-- Slika proizvoda -->
                    <a href="#">
                      <img :src="product.productID.photo" class="img-fluid" style="width: 100px;" />
                    </a>
                  </div>
                  <div class="col-xl-10 col-lg-10 col-10">
                    <div class="a-row">
                      <span class="a-size-small">
                        <!-- Naziv proizvoda -->
                        <a href="#">{{product.productID.title}}</a>
                      </span>
                    </div>
                    <div class="a-row">
                      <!-- Količinay -->
                      <span class="a-size-mini" style="color: #111; font-weight: 400;">Količina: {{product.productID.quantity}}</span>
                    </div>
                    <div class="a-row">
                      <!-- Cijena proizvoda -->
                      <span class="a-size-mini a-color-price">{{product.price}} HRK</span>
                    </div>
                    <br />
                    <div class="a-row">
                        <nuxt-link to="/">
                      <span class="a-button-buy-again">Kupi ponovno</span>
                        </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-1 col-md-12"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/orders");
      console.log(response.products);
      return {
        orders: response.products
      };
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

