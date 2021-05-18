<template>

<div>
    <header class="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
            <div class="container-fluid dekstop-nav">
                <div class="row">
                   <div class="col-sm-2">
                     <!-- Logo  -->
                     <nuxt-link to="/">
                     <div class="unified_widget pageBanner">
                        <h1>iKupi</h1>
                     </div>
                     </nuxt-link>

                    </div>  
                   
                    <!-- Trazilica -->
                <div class="col-sm-6 pt-0">

                    <Search />

                </div>

                                    <!-- Računi i narudžbe-->
                    <div class="col-xl-4 col-lg-5 col-md-6 col-sm-4 p-0">
                        <div class="nav-tools">
                            <template v-if="$auth.$state.loggedIn">
                                <nuxt-link to='/profil' class="nav-a nav-a-2" id="nav-link-accountList" tabindex="0">
                                
                                <span class="nav-line-1">Bok,</span>
                            <span class="nav-line-2">
                                {{$auth.$state.user.user.name}}
                            </span>
                                
                                </nuxt-link> 
                            </template>
                            <template v-else>
                            <nuxt-link to='/signup' class="nav-a nav-a-2" id="nav-link-accountList" tabindex="0">
                            <span class="nav-line-1">Prijavi se</span>
                            <span class="nav-line-2">
                                
                                <span class="nav-icon nav-arrow" style="visibility:visible"></span>
                            </span>
                            </nuxt-link>
                            </template>
                            <nuxt-link to="/orders" class="nav-a nav-a-2 nav-single-row-link">
                            <span class="nav-line-1"></span>
                            <span class="nav-line-2">Narudžbe</span>
                            </nuxt-link>

                            <nuxt-link to="/cart" class="nav-a nav-a-2" id="nav-cart">
                            <span aria-hidden="true" class="nav-line-1"></span>
                            <span aria-hidden="true" class="nav-line-2">Košarica</span>
                            <span class="nav-cart-icon nav-sprite"></span>
                            <span id="nav-cart-count" aria-hidden="true" class="nav-cart-count nav-cart-0">0</span>
                            </nuxt-link>
                            
                            
                        </div>
                            </div>

                </div>
        
            </div>
    </header>




</div>
    
</template>

<script>
import Search from "~/components/Search";
export default {
    components: {
        Search
    }
    
}
</script>