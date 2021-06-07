<template>
<main class="listingPage">
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-2 col-lg-3 md-4 col-sm-4"> 
        <Sidebar/>
        </div>

    <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
      <Pocetna />
    </div>
    </div>
  </div>
</main>
  
</template>

<script>
import Sidebar from "~/components/Sidebar";
import Pocetna from "~/components/Pocetna";
export default {
  components: {
    Pocetna,
    Sidebar
  }
}
</script>

<style>
.col-xl-2 {
padding-left: 0px;
padding-top:2%
}
</style>


