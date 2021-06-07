<template>
    <main>
        <!--Prijelazi -->
        <div class="a-spacing-top-medium"></div>
        <div class="container-fluid">
            <div class="wayfinding-breadcrumbs-container">
                <ul class="d-unordered-list a-horizontal a-size-small">
                    <li>
                        <span class="a-list-item">
        <a class="a-link-normal a-color-tertiary" href="#">{{product.category.type}}</a> 
                        </span>
                    </li>
                    <li>
                        <span class="a-list-item"> > </span>
                    </li>
                    <li>
                        <span class="a-list-item">
                            <a class="a-link-normal a-color-tertiary" href="#">{{product.title}}</a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container-fluid">
            <div class="dp-container">
                <div class="row">
                    <!-- Slika proizvoda -->
                    <div class="col-lg-3 col-md-3 col-sm-4">
                        <!-- Slika -->
                        <div class="imgBlock">
                            <div >
                                <img :src="product.photo" class="img-fluid"/>
                            </div>
                     </div>
                </div>
                <!-- Opis proizvoda -->
                 <div class="col-lg-6 col-md-6 col-sm-8">
                     <div class="centerCol">
                         <div class="littleDiv">
                             <h1 class="productTitle">
                                 <span class="largeTitle">{{product.title}}</span> <br>
                                
                                 <hr style="margin-top: 10px;"/>
                                 <div class="bookDescription">
                                     <div class="bookDescriptonInner">{{product.description}}</div>
                                 </div>
                                 <hr style="margin-top: 10px;"/>
                             </h1>
                               <div class="combinedBuyBox">
                         <div class="buyBox">
                             <div class="a-section">
                                 <div class="clearfix">
                                     <div class="float-left">
                                         <form>
                                             
                                             <label for="test1">Cijena</label>
                                         </form>
                                     </div>
                                     <!-- cijena -->
                                     <div class="float-right">
                                         <span class="a-size-medium a-color-price offer-price a-text-normal">
                                            {{product.price}} HRK
                                         </span>
                                     </div>
                                 </div>
                             </div>

                        <div class="a-section a-spacing-none">
                            <div class="row">
                            </div>
                        </div>

                        <div class="a-section a-spacing-small a-spacing-top-micro">
                            <div class="row">
                                <span class="a-color-base buyboxShippingLabel"></span>
                            </div>
                        </div>
                        <div class="a-section a-spacing-small">
                            <div class="a-section a-spacing-none">
                                <span class="a-size-medium a-color-success">Dostupno odmah</span>
                            </div>
                        </div>

                        <div class="a-section">
                            <div class="a-button-stack" @click="addProductToCart(product)">
                                <span class="a-spacing-small a-button-primary a-button-icon">
                                    <span class="a-button-inner">
                                        <input type="submit" name="submit.add-to-cart" class="a-button-input"/>
                                        <span class="a-button-text">Dodaj u košaricu</span>
                                    </span>
                                </span>
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
    </main>
</template>
  <script>
  import {mapActions} from "vuex";
export default {
     async asyncData({$axios, params}){
         try{
             let response = await $axios.$get(`/api/products/${params.id}`);

             console.log(response);

             return{
                 product: response.product
             };
         } catch (err) {
             console.log(err);
         }
     },
     methods: {
    ...mapActions(["addProductToCart"])
  }
};
</script> 
