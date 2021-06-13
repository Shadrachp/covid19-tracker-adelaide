<template>
    <main>
        <div class="form-container">
            <div class="register-form">
                <span class="form-title">
                    Create Account
                </span>
            <div class="error" v-html="error"/>
            <div class="account-type">
                <label>Account Type:</label>
                <div class="account">
                    <button
                      @click="setUser"
                      :class="clickedUser ? 'select' : ''"
                    >
                    User
                    </button>
                    <button
                      @click="setVenueManager"
                      :class="clickedVenueManager ? 'select' : ''"
                    >
                    Venue Manager
                    </button>
                </div>
            </div>
            <input
            type="text"
            name="name"
            placeholder="Name"
            v-model="name"
            required
            >
            <!-- <input
            type="text"
            name="firstName"
            placeholder="First Name"
            v-model="firstName"
            required
            >
            <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            v-model="lastName"
            required
            > -->
            <!-- <input
            type="text"
            name="gender"
            placeholder="Gender"
            v-model="gender"
            required
            > -->
            <!-- <br/>
            <input
            type="text"
            name="birthdate"
            placeholder="Birth"
            v-model="birthDate"
            required
            >
            <br/> -->
            <input
            type="text"
            name="email"
            placeholder="Email Address"
            v-model="email"
            required
            >
            <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            v-model="phoneNumber"
            required
            >
            <!-- <input
            type="text"
            name="emergencyNumber"
            placeholder="Emergency Number"
            v-model="emergencyNumber"
            required
            >
            <br/> -->
            <input
            type="text"
            name="username"
            placeholder="Username"
            v-model="username"
            required
            />
            <input
            type="password"
            name="password"
            placeholder="Password"
            v-model="password"
            required
            >
            <input
            type="password"
            name="rePassword"
            placeholder="Retype Password"
            v-model="rePassword"
            required
            >
            <button
              @click="register"
            >
            Register
            </button>
        </div>
        <div  class="picture">
            <img src="../assets/wash-hands.png" alt="Please wash your hands poster"/>
        </div>
    </div>
</main>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      name: '',
      // firstName: '',
      // lastName: '',
      email: '',
      username: '',
      password: '',
      rePassword: '',
      type: 'User',
      phoneNumber: '',
      gender: '',
      birthDate: '',
      emergencyNumber: '',
      clickedUser: false,
      clickedVenueManager: false,
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          name: this.name,
          // firstName: this.firstName,
          // lastName: this.lastName,
          email: this.email,
          username: this.username,
          password: this.password,
          rePassword: this.rePassword,
          type: this.type,
          phoneNumber: this.phoneNumber
          // gender: this.gender,
          // birdthDate: this.birthDate,
          // emergencyNumber: this.emergencyNumber
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)

        this.error = null

        this.$router.push({
          name: 'root'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    setUser () {
      this.type = 'User'
      this.clickedUser = true
      this.clickedVenueManager = false
    },
    setVenueManager () {
      this.type = 'Venue Manager'
      this.clickedUser = false
      this.clickedVenueManager = true
    }
  }
}
</script>

<style scoped>
    main {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 33rem;
        padding-top: 6rem;
        padding-bottom: 4.4rem;
    }

    .form-container {
        display: flex;
        justify-content: space-between;
        flex-flow: row nowrap;
        width: 52rem;
        border-style: solid;
        border-width: 1px;
        border-radius: 6px;
        border-color: #66cdaa;
        -webkit-box-shadow: 0px 0px 4px 1px rgba(102,205,170,1);
        -moz-box-shadow: 0px 0px 4px 1px rgba(102,205,170,1);
        box-shadow: 0px 0px 4px 1px rgba(102,205,170,1);
    }

    .register-form {
        margin-top: 0.8rem;
        flex-basis: 55%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .register-form > input, .register-form > button,  .account > button {
        width: 70%;
        margin-top: 0.8rem;
        height: 2.4rem;
        border-radius: 6px;
        box-sizing: border-box;
        border-style: solid;
    }
    .account-type {
        width: 70%;
        font-weight: bold;
    }
     .account > button {
         cursor: pointer;
         width: 45%;
     }
    .account {
        margin-top: 0.4rem;
        display: flex;
        justify-content: space-between;
    }

     /* .account > button {
         cursor: pointer;
         box-sizing: border-box;
         width
         height: 2.4rem;
     } */

    .register-form > button {
        color:white;
        cursor: pointer;
        background-color: #59deb2;
        border-style: none;
    }

    .register-form > button:hover {
        background-color: rgba(89, 222, 178, 0.64);
    }

    .register-form > input {
        padding: 0.4rem;

    }

    .register-form > input:focus {
        outline: none;
        border-color: #59deb2;
        box-shadow: 0 0 1px #59deb2;
    }

    .form-title {
        color: #1ec18b;
        font-weight: bold;
        font-size: 24px;
        margin-top: 0.4rem;
        margin-bottom: 0.8rem;
    }

    .picture {
        flex-basis: 45%;
        /* background-image: url('../assets/wash-hands.png'); */
        display: flex;
        justify-content: flex-end;

    }

    .picture > img {
        width: 100%;
        border-radius: 6px;
    }

    .error {
        display: flex;
        justify-content: center;
        padding-bottom: 0.4rem;
        text-align: justify;
        text-justify: inter-word;
        width: 80%;
        color: red;
    }

    .select {
        color: white;
        border-color: #59deb2;
        box-shadow: 0 0 3px #59deb2;
        background-color: #59deb2;
    }
</style>
