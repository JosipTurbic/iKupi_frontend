<template>
<body>
  <div class="container-fluid">
    <div class="shipping-address">
      <div class="navbarShipping a-spacing-large">
        <nuxt-link to="/">
          <div class="unified_widget pageBanner">
                        <h1>iKupi</h1>
                     </div>
        </nuxt-link>
      </div>
      <div class="a-row">
        <div class="a-size-large a-text-bold a-spacing-mini">Pregled narudžbe</div>
        <div class="a-row a-spacing-small a-size-mini"></div>
      </div>
      <div class="row">
        <div class="col-xl-9 col-lg-8 col-md-9 col-sm-12">
          <div class="a-row a-spacing-large"></div>
          <div class="spc-orders a-box">
            <div class="a-box-inner">
              <div class="shipping-group">
                <!-- Datum dostave -->
                <div
                  class="a-row a-color-state a-text-bold a-size-medium a-spacing-small"
                >Datum dostave: {{estimatedDelivery}}</div>
                <div class="row">
                  <!-- Košarica -->
                  <div class="col-xl-6 col-lg-7 col-sm-6 col-12">
                    <div class="a-row a-spacing-base" v-for="product in getCart" :key="product._id">
                      <div class="row">
                        <!-- Slika proizvoda -->
                        <div class="col-sm-3 col-3">
                          <img :src="product.photo" style="width: 100px;" />
                        </div>
                        <!-- Naziv proizvoda -->
                        <div class="col-sm-9 col-9">
                          <div class="a-row">
                            <strong>{{product.title}}</strong>
                          </div>
                          <div class="a-row">
                            <!-- Cijena proizvoda -->
                            <span class="a-color-price a-spacing-micro">
                              <strong dir="ltr">{{product.price}} HRK</strong>
                            </span>
                          </div>
                          <div class="a-row">
                            <span class="availability a-color-success">Dostupno odmah</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-5 col-sm-6 col-12">
                    <div class="a-row shipping-speeds">
                      <fieldset>
                        <span class="shipping-speeds-title a-size-medium">
                          <b>Izaberite način dostave:</b>
                        </span>
                        <!-- Odabir dostave -->
                        <div class="a-spacing-mini wednesday">
                          <!-- Standardna dostava -->
                          <input type="radio" name="order0" checked="checked" @change="onChooseShipping('normal')" />
                          <span class="a-radio-label">
                            <span class="a-color-success">
                              <strong>Dostava u 7 dana</strong>
                            </span>
                            <br />
                            <span
                              class="a-color-secondary"
                            >30 HRK&nbsp;-&nbsp; Standardna dostava HP expressom</span>
                          </span>
                        </div>
                        <br />
                        <div class="a-spacing-mini tuesday">
                          <!-- Brza dostava -->
                          <input type="radio" name="order0"  @change="onChooseShipping('fast')" />
                          <span class="a-radio-label">
                            <span class="a-color-success">
                              <strong>Dostava u 3 dana</strong>
                            </span>
                            <br />
                            <span class="a-color-secondary">50 HRK&nbsp;-&nbsp; Preporučena dostava DPD-om</span>
                          </span>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-3 col-sm-12 pl-0">
          <div class="a-box-group">
            <div class="a-box a-first">
              <div class="a-box-inner">
                <div class="a-row a-spacing-micro">
                  <nuxt-link to="/payment">
                    <span class="a-button-place-order">Završi narudžbu</span>
                  </nuxt-link>
                </div>
                <div class="a-row">
                  <h3 class="a-spacing-micro a-size-base">Narudžba</h3>
                  <div class="order-summary" style="font-size: 12px;">
                    <div class="row">
                      <!-- Cijena košarice -->
                      <div class="col-sm-6">Proizvodi:</div>
                      <div class="col-sm-6 text-right">{{getCartTotalPrice}} HRK</div>
                    </div>
                    <div class="row">
                      <!-- Cijena dostave -->
                      <div class="col-sm-6">Dostava:</div>
                      <div class="col-sm-6 text-right">{{shippingPrice}} HRK</div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-sm-6"></div>
                      <div class="col-sm-6 text-right">
                        <hr />
                      </div>
                    </div>
                    <!-- Ukupna cijena s dostavom -->
                    <div class="row">
                      <div class="col-sm-6">Ukupna cijena s porezom:</div>
                      <div class="col-sm-6 text-right">{{getCartTotalPriceWithShipping}} HRK</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="a-color-price a-size-medium a-text-bold">Ukupno:</div>
                      </div>
                      <div class="col-sm-6 text-right">
                        <!-- Ukupna cijena s dostavom -->
                        <div class="a-color-price a-size-medium a-text-bold">{{getCartTotalPriceWithShipping}} HRK</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  layout: "none",
    async asyncData({ $axios, store }) {
    try {
      let response = await $axios.$post("/api/shipment", {
        shipment: "normal"
      });
      store.commit("setShipping", {
        price: response.shipment.price,
        estimatedDelivery: response.shipment.estimated
      });
      return {
        shippingPrice: response.shipment.price,
        estimatedDelivery: response.shipment.estimated
      };
    } catch (err) {}
  },
  computed:{
      ...mapGetters(["getCart", "getCartTotalPrice", "getCartTotalPriceWithShipping"])
  },
    methods: {
    async onChooseShipping(shipment) {
      try {
        let response = await this.$axios.$post("/api/shipment", {
          shipment: shipment
        });
        this.$store.commit("setShipping", {
          price: response.shipment.price,
          estimatedDelivery: response.shipment.estimated
        });
        this.shippingPrice = response.shipment.price;
        this.estimatedDelivery = response.shipment.estimated;
      } catch (err) {}
    }
  }
};
</script>
