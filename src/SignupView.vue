<template>
  <AppHeader />

  <div class="signup-card">
    <h1>Sign up</h1>

    <form @submit.prevent="onSignup" novalidate>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model.trim="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />
      </div>

      <button type="submit" class="login-btn">Signup</button>

      <!-- Shown only after the user presses Signup -->
      <div v-if="submitted && errors.length" class="validation-error">
        <p>The password is not valid -</p>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
    </form>
  </div>

  <AppFooter />
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: 'SignupView',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      email: '',
      password: '',
      submitted: false
    };
  },
  computed: {
    // Returns a list of every rule the current password breaks
    errors() {
      const pw = this.password;
      const list = [];

      if (pw.length < 8 || pw.length >= 15) {
        list.push('Should be at least 8 characters and less than 15 characters');
      }
      if ((pw.match(/[A-Z]/g) || []).length < 1) {
        list.push('Includes at least one uppercase alphabet character');
      }
      if ((pw.match(/[a-z]/g) || []).length < 2) {
        list.push('Includes at least two lowercase alphabet characters');
      }
      if (!/[0-9]/.test(pw)) {
        list.push('Includes at least one numeric value');
      }
      if (!/^[A-Z]/.test(pw)) {
        list.push('Should start with an uppercase letter');
      }
      if (!pw.includes('_')) {
        list.push('Should include the character "_"');
      }

      return list;
    }
  },
  methods: {
    onSignup() {
      this.submitted = true;

      // Valid password -> go to the main page
      if (this.errors.length === 0) {
        this.$router.push('/');
      }
    }
  }
};
</script>