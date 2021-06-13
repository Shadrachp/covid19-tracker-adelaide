<template>
    <main>
        <div class="form-container">
            <span class="form-title">
                My Profile
            </span>
            <div class="column-input-container">
                <div class="row-input-container">
                    <div>
                        <label for="name">Name</label>
                        <input
                        v-model="name"
                        name="name"
                        required/>
                    </div>
                    <div>
                        <label for="email">Email Address</label>
                        <input
                        v-model="email"
                        name="email"
                        required/>
                    </div>
                </div>

                <div class="row-input-container">
                    <div>
                        <label for="name">Username</label>
                        <input
                        v-model="username"
                        name="username"
                        required/>
                    </div>
                    <div>
                        <label for="email">Phone Number</label>
                        <input
                        v-model="phone"
                        name="phone"
                        required/>
                    </div>
                </div>
            </div>

            <div class="row-input-container single">
                <div>
                    <label for="name">Address</label>
                    <input
                    v-model="address"
                    name="address"
                    />
                </div>
            </div>
            <span class="form-title e-contact">
                Emergency Contact
            </span>

            <div class="column-input-container">
                <div class="row-input-container">
                    <div>
                        <label for="name">Name</label>
                        <input
                        v-model="emergencyContactName"
                        name="emergencyContactName"
                        />
                    </div>
                    <div>
                        <label for="email">Phone Number</label>
                        <input
                        v-model="emergencyNumber"
                        name="phone"
                        />
                    </div>
                </div>
            </div>

            <button
              @click="save"
            >
            Save Changes
            </button>
        </div>
    </main>
</template>

<script>
import ProfileService from '@/services/ProfileService'

export default {

  name: 'Profile',
   data () {
    let user = this.$store.state.user

    return {
      name: user.name,
      email: user.email,
      username: user.username,
      phone: user.phoneNumber ? user.phoneNumber : '',
      emergencyNumber: user.emergencyNumber ? user.emergencyNumber : '',
      emergencyContactName: user.emergencyContactName ? user.emergencyContactName : '',
      address: user.location ? user.location : '',
      error: null
    }
  },
  async mounted () {
      let user = this.$store.state.user
      const response = await ProfileService.profile({
          username: user.username
      })
      console.log(response)

  },
  methods: {
    async save () {
      try {
        const response = await ProfileService.updateProfile({
          name: this.name,
          email: this.email,
          username: this.username,
          phone: this.phone,
          emergencyNumber: this.emergencyNumber,
          emergencyContactName: this.emergencyContactName,
          location: this.address
        })

        console.log(response)
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
        height: 38rem;
        padding-top: 6rem;
        padding-bottom: 4.4rem;
    }

    .form-title {
        color: #1ec18b;
        font-weight: bold;
        font-size: 24px;
        margin-top: 0.4rem;
        margin-bottom: 0.8rem;
    }

    .form-container {
        display: flex;
        padding: 2.4rem 0rem;
        align-items: center;
        flex-flow: column nowrap;
        width: 32rem;
        border-style: solid;
        border-width: 1px;
        border-radius: 6px;
        border-color: #66cdaa;
        -webkit-box-shadow: 0px 0px 4px 1px rgba(102,205,170,1);
        -moz-box-shadow: 0px 0px 4px 1px rgba(102,205,170,1);
        box-shadow: 0px 0px 4px 1px rgba(102,205,170,1);
    }

    .row-input-container {
        display: flex;
        flex-flow: row wrap;
    }

    .row-input-container > div, .column-input-container{
        display: flex;
        flex-flow: column nowrap;
    }

    .row-input-container > div {
        margin: 0.8rem 1.2rem;
    }

    .e-contact {
        margin-top: 1.4rem;
    }

    input {
        width: 12rem;
        padding: 0.4rem;
    }

    input:focus {
        outline: none;
        border-color: #59deb2;
        box-shadow: 0 0 1px #59deb2;
    }

    input, button {
        margin-top: 0.4rem;
        height: 2.4rem;
        border-radius: 6px;
        box-sizing: border-box;
        border-style: solid;
    }

    button {
        margin-top: 1.2rem;
        width: 26.4rem;
        color:white;
        cursor: pointer;
        background-color: #59deb2;
        border-style: none;
    }

    button:hover {
        background-color: rgba(89, 222, 178, 0.64);
    }

    label {
        font-weight: bold;
        font-size: 16px;
    }

    .single {
        align-self: flex-start;
        margin-left: 1.6rem;
    }

    .single input {
        width: 26.4rem;
    }
</style>
