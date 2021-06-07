<template>
  <main>
     <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-10">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <ul>
                  <li>
                    <a href="#">
                      <nuxt-link to="/profil">
                      <span>Moj račun</span>
                      </nuxt-link>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <a href="#">
                      <span>Moje adrese</span>
                    </a>
                  </li>
                </ul>
              </div>
              <h1 class="a-spacing-medium a-spacing-top-medium">Moje adrese</h1>
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b>{{message}}</b>
              </div>
              <div class="a-spacing-double-large">
                <div class="row a-spacing-micro">
                  <div class="col-lg-4 col-md-5 col-sm-12 pb-2">
                    <nuxt-link
                      to="/address/add"
                      class="a-link-normal add-new-address-button"
                      style="text-decoration:none;"
                    >
                      <div class="a-box first-desktop-address-tile">
                        <div class="a-box-inner a-padding-extra-large">
                          <i class="far fa-plus"></i>
                          <h2 class="a-color-tertiary">Dodaj adresu</h2>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                  <!-- Addresa -->
                  <div class="col-lg-4 col-md-4 col-sm-12 pl-md-0 pb-2" v-for="(address, index) in addresses" :key="address._id">
                    <div class="a-box a-spacing-none normal-desktop-address-tile">
                      <div class="a-box-inner a-padding-none">
                        <div class="address-section-no-default">
                          <div class="a-spacing-small">
                            <ul class="a-unordered-list a-nostyle a-vertical">
                              <li>
                                <h5>
                                  
                                  <b>{{address.fullName}}</b>
                                </h5>
                              </li>
                              
                              <li>{{address.streetAddress}}</li>
                              
                              <li>{{address.city}}, {{address.zupanija}}, {{address.zipCode}}</li>
                              
                              <li>{{address.country}}</li>
                              
                              <li>{{address.phoneNumber}}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <!-- Obriši adresu -->
                      <div class="edit-address-desktop-link">
                        <nuxt-link :to="`/address/${address._id}`">Uredi</nuxt-link>
                        &nbsp; | &nbsp;
                        <a href="#" @click="onDeleteAddress(address._id, index)">Obriši</a>
                        &nbsp; | &nbsp;
                        <!-- Postavi zadanu adresu -->
                        <a href="#" @click="onSetDefault(address._id)">Postavi kao zadanu</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-3 col-sm-12"></div>
                </div>
              </div>
              <div>
                 <nuxt-link to="/placeorder">
                            <span class="a-button-register">
                                <span class="a-button-inner">
                                    <span class="a-button-text">Završi narudžbu</span>
                                </span>
                            </span>
                            </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    async asyncData({$axios}){
        try{
            let response = await $axios.$get("/api/addresses");

            return {
                addresses: response.addresses
            }

        }catch (err){
            console.log(err);
       
        }
    },
    data(){
        return {
            message: ""
        }
    },
    methods: {
        async onDeleteAddress(id, index){
            try{
                let response = await this.$axios.$delete(`/api/addresses/${id}`);

                if(response.success) {
                    this.message = response.message;
                    this.addresses.splice(index, 1);
                }

            } catch(err){
                this.message = err.message;
                console.log(err);
            }
        },

        async onSetDefault(id){
            try{
                let response = await this.$axios.$put('/api/addresses/set/default', {id: id});

                if(response.success) {
                    this.message = response.message;
                    await this.$auth.fetchUser();
                }
            }catch (err) {
                this.message = err.message;
                console.log(err);
            }
        }

    }
};
</script>



