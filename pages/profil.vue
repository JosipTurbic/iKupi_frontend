<template>
<main>
    <div class="container-fluid c-section">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <div class="a-spacing-top-medium"></div>
                <h2>Moj profil</h2>
                <a href="#" @click="onLogout">Odjavi se</a>
                <form>
                    <!-- Ime -->
                    <div class="a-spacing-top-medium">
                        <label>Ime</label>
                        <input 
                        class="a-input-text" 
                        style="width: 100%" 
                        v-model="name" 
                        :placeholder="$auth.$state.user.user.name"
                        />
                     </div>
                      <!-- Email -->
                    <div class="a-spacing-top-medium">
                        <label>Email</label>
                        <input 
                        class="a-input-text" 
                        style="width: 100%" 
                        v-model="email" 
                        :placeholder="$auth.$state.user.user.email"
                        />
                     </div>
                      <!-- Lozinka -->
                    <div class="a-spacing-top-medium">
                        <label>Lozinka</label>
                        <input class="a-input-text" style="width: 100%" v-model="password"/>
                     </div>
                          <!-- Gumb za dodavanje -->
                        <hr/>
                        <div class="a-spacing-top-large">
                            <span class="a-button-register">
                                <span class="a-button-inner">
                                    <span class="a-button-text" @click="onUpdateProfile">Ažuriraj</span>
                                </span>
                            </span>
                        </div>
                </form>
                <br />
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>
</main>
    
</template>

<script>


export default {

    data(){
        return{
            name: "",
            email: "",
            password: ""
        };
    },
    methods: {
        async onUpdateProfile(){
            let data = {
                name: this.name,
                email: this.email,
                password: this.password
            };
            try{
                let response = await this.$axios.$put('/api/auth/user', data);

                if(response.success){
                    this.name = "";
                    this.email = "";
                    this.password = "";

                    await this.$auth.fetchUser();
                }
            } catch(err){
                console.log(err);
            }
        },
        async onLogout(){
            await this.$auth.logout();
            this.$router.push("/");
        }
    }
   
};

</script>
