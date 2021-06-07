<template>
  <div class="registerPage">
    <div class="container">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          

          <form class="mt-4">
            <div class="a-box a-spacing-extra-large">
              <div class="a-box-inner">
                <h1 class="a-spacing-small">Napravi svoj račun!</h1>
                <!-- Ime -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label">Vaše ime</label>
                  <input
                    type="text"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                    v-model="name"
                  />
                </div>
                <!-- Email -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label">Email</label>
                  <input
                    type="email"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                    v-model="email"
                  />
                </div>
                <!-- Lozinka -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label">Lozinka</label>
                  <input
                    type="password"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                    v-model="password"
                  />
                  <div class="a-alert-container">
                    <div class="a-alert-content">Lozinka mora imati najmanje 6 znakova</div>
                  </div>
                </div>
                <!-- Button -->
                <div class="a-row a-spacing-extra-large mb-4">
                  <span class="a-button-primary">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onSignup">Napravi svoj račun!</span>
                    </span>
                  </span>
                  
                </div>
                <hr />
                <div class="a-row">
                  <b>
                    Jeste li već registrirani?
                    <nuxt-link to="/login" class="a-link-emphasis">Prijavi se</nuxt-link>
                  </b>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  auth: "guest",
  layout: "none",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async onSignup() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        let response = await this.$axios.$post("/api/auth/signup", data);
        console.log(response);
        if (response.success) {
          this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password
            }
          });
          this.$router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>