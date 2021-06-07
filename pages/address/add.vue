<template>
  <main>
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <ul>
                  <li>
                    <a href="#">
                      <span>Moj račun</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li>
                    <a href="#">
                      <span>Moje adrese</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <a href="#">
                      <span>Nova adresa</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="a-section">
              <h2>Dodaj novu adresu</h2>
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b></b>
              </div>
              <form>
                <div class="a-spacing-medium a-spacing-top-medium">
                  <!-- Država -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">Država</label>
                    <select class="a-select-option" v-model="country">
                      <option 
                      v-for="country in countries" 
                      :key="country.alpha2Code" 
                      :value="country.name"
                      >
                      {{country.name}}
                      </option>
                      <option></option>
                    </select>
                  </div>
                  <!-- Ime i prezime -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">Ime i prezime</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="fullName"/>
                  </div>
                  <!-- Ulica -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">Ulica</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%;"
                      placeholder="Naziv ulice"
                      v-model="streetAddress1"
                    />
                    <!-- Kucnii broj -->
                    <input
                      type="text"
                      class="a-input-text a-spacing-top-small"
                      style="width: 100%;"
                      placeholder="Kucni broj"
                      v-model="streetAddress2"
                    />
                  </div>
                  <!-- Grad -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">Grad ili općina</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="city"/>
                  </div>
                  <!-- Zupanija -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">Županija</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="zupanija"/>
                  </div>
                  <!-- Postanski broj -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">Poštanski broj</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="zipCode"/>
                  </div>
                  <!-- Broj mobitela -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">Broj mobitela</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="phoneNumber"/>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                      
                    </div>
                  </div>
                  
                  <div class="a-spacing-top-medium"></div>
                  <hr /> 
                  <div class="a-spacing-top-large">
                    <span class="a-button-register">
                      <span class="a-button-inner">
                        <span class="a-button-text"  @click="onAddAddress">Dodaj adresu</span>
                      </span>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    async asyncData({$axios}) {
        try{
            let response = await $axios.$get("/api/countries");

            return {
                countries: response
            };

        } catch(err){
            console.log(err);
        }
    },
    data(){
        return{
            country: "Croatia",
            fullName: "",
            streetAddress1: "",
            streetAddress2: "",
            city: "",
            zupanija: "",
            zipCode: "",
            phoneNumber: ""

        };
    },
    methods: {
        async onAddAddress(){
            try{
            let data = {
            country: this.country,
            fullName: this.fullName,
            streetAddress: this.streetAddress1 + " " + this.streetAddress2,  
            city: this.city,
            zupanija: this.zupanija,
            zipCode: this.zipCode,
            phoneNumber: this.phoneNumber
            };

            let response = await this.$axios.$post("/api/addresses", data);
            
            if(response.success){
                this.$router.push("/address");
            }
            
            } catch(err){
                console.log(err);
            }
        }
    }
};
</script>