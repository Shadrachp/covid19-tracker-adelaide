<template>
    <div>
        <h1>
            Register
        </h1>
        <input
        type="text"
        name="firstName"
        placeholder="First Name"
        v-model="firstName"
        required
        >
        <br/>
        <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        v-model="lastName"
        required
        >
        <br/>
        <input
        type="text"
        name="gender"
        placeholder="Gender"
        v-model="gender"
        required
        >
        <br/>
        <input
        type="text"
        name="birthdate"
        placeholder="Birth"
        v-model="birthDate"
        required
        >
        <br/>
        <input
        type="text"
        name="email"
        placeholder="Email Address"
        v-model="email"
        required
        >
        <br/>
        <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        v-model="phoneNumber"
        required
        >
        <br/>
        <input
        type="text"
        name="emergencyNumber"
        placeholder="Emergency Number"
        v-model="emergencyNumber"
        required
        >
        <br/>
        <input
        type="text"
        name="username"
        placeholder="Username"
        v-model="username"
        required
        />
        <br/>
        <input
        type="password"
        name="password"
        placeholder="Password"
        v-model="password"
        required
        >
        <br/>
        <input
        type="password"
        name="rePassword"
        placeholder="Retype Password"
        v-model="rePassword"
        required
        >
        <br/>
        <button
          @click="register"
        >
        Register
    </button>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      rePassword: '',
      addressId: '',
      type: '',
      phoneNumber: '',
      gender: '',
      birthDate: '',
      emergencyNumber: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        name: this.name,
        username: this.username,
        password: this.password,
        addressId: this.addressId,
        type: this.type,
        phoneNumber: this.phoneNumber,
        gender: this.gender,
        birdthDate: this.birthDate,
        emergencyNumber: this.emergencyNumber
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>
    input, button {
        margin-top: 0.4rem;
    }
</style>
