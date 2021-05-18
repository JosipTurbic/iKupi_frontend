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
                                             <input type="radio" id="test1" name="radio-group checked"/>
                                             <label for="test1">Kupi</label>
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
                                <div class="col-sm-5 col-5">
                                    <select>
                                        <option value="1">Količina: &nbsp; 1</option>
                                        <option value="2">Količina: &nbsp; 2</option>
                                        <option value="3">Količina: &nbsp; 3</option>
                                        <option value="4">Količina: &nbsp; 4</option>
                                        <option value="5">Količina: &nbsp; 5</option>
                                    </select>
                                </div>
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
                            <div class="a-button-stack">
                                <span class="a-spacing-small a-button-primary a-button-icon">
                                    <span class="a-button-inner">
                                        <input type="submit" name="submit.add-to-cart" class="a-button-input"/>
                                        <span class="a-button-text">Dodaj u košaricu</span>
                                    </span>
                                </span>
                            </div>
                        </div>

                          <div class="a-section">
                            <div class="a-button-stack">
                                <span class="a-spacing-small a-button-primary a-button-icon">
                                    <span class="a-button-inner">
                                        <input type="submit" name="submit.add-to-cart" class="a-button-input"/>
                                        <span class="a-button-text">Kupi odmah</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                            <br />
                            <hr />
                            <div class="a-section">
                                <div class="clearfix">
                                    <div class="float-left">
                                        <form>
                                            <input type="radio" id="test2" name="radio-group"/>
                                            <label for="test2">Kupi</label>
                                        </form>
                                    </div>
                                    <div class="float-right">
                                        <span class="a-color-base offer-price a-text-normal">{{product.price}} HRK</span>
                                    </div>
                                </div>
                            </div>
                         </div>
                     </div>
                         </div>
                     </div>

                 </div>
                 <!--Cijena proizvoda-->
                
                 
            </div>
        </div>
        </div>
    </main>
</template>
  <script>
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
     }
};
</script> 
