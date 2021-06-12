<template>
    <main>
        <div class="form-container">
            <div class="register-form">
                <span class="form-title">
                    Login to your account
                </span>
            <div class="error" v-html="error"/>
            <input
                type="text"
                name="username"
                v-model="username"
                placeholder="Username"
                />
            <input
                type="password"
                name="password"
                v-model="password"
                placeholder="Password"
                />
            <button
                  @click="login"
                >
                Log in
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

  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })

        console.log(response)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)

        this.error = null
      } catch (error) {
        this.error = error.response.data.error
      }
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

    .register-form {
        flex-basis: 55%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        margin-bottom: 1.4rem;
        align-items: center;
    }

    .register-form > input, .register-form > button {
        width: 70%;
        margin-top: 0.8rem;
        height: 2.4rem;
        border-radius: 6px;
        box-sizing: border-box;
        border-style: solid;
    }

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

    .form {
        display: flex;
        flex-flow: column nowrap;

    }

    .form > input {
         margin-top: 0.4rem;
         margin-bottom: 0.4rem;
    }

</style>
