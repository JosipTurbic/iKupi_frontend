<template>
<div class="mainResults">
      <div class="unified_widget pageBanner">
                        <h1>Piće</h1>
                     </div>
    <hr />
            <ul class="s-result-list">
              <li class="s-result-item celwidget" v-for="product in products" :key="product.category.type">
                  <nuxt-link :to="`/products/${product._id}`" class="a-link-normal">
                <div class="s-item-container">
         <div>
                    <div class="row">
                      <!-- Slika -->
                      <div class="col-sm-3 text-center">
                        <a href="#">
                          <img :src="product.photo" style="width: 150px;" class="img-fluid" />
                        </a>
                      </div>

                      <div class="col-sm-9">
                         <div class="a-row a-spacing-none">
                              <span class="a-size-medium a-color-secondary">{{product.title}}</span>
                            </div>
                            
                        <div class="row">
                          <div class="col-sm-7">
                            <!-- Cijena -->
                            <div class="a-row a-spacing-none">
                              <a href="#" class="a-link-normal a-text-normal">
                                
                                <span class="a-color-base sx-zero-spacing">
                                  <span class="sx-price sx-price-large">
                                    <span class="sx-price-whole">{{ product.price }} HRK</span>
                                  </span>
                                </span>
                              </a>
                            </div>

                            <!-- Opis -->
                            <div class="a-row a-spacing-none">
                              <span class="a-size-small a-color-secondary">{{product.description}}</span>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>   
                </div>
                 <hr />
                  </nuxt-link>
              </li>
            </ul>
                </div>
                
</template>
<script>
export default{
async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/products/pice");
      console.log(response);
      return {
        products: response.products
      };
    } catch (err) {
      console.log(err);
    }
  }
};
</script>
