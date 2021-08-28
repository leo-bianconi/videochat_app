<template>
  <div id="signin-grid">
    <div id="signin-flex">
      <logo id="signin-logo" :link="true" :size-x="80" :size-y="80" />
      <h1 id="signin-header">Accedi a Psylean</h1>
      <div id="signin-center">
        <keep-alive>
          <component :is="currentDialogComponent" />
        </keep-alive>
      </div>
      <div id="signin-dialog-switcher">
        <div v-if="currentDialog == dialogs.guest">
          <p>
            Sei uno psicologo?
            <a class="signin-link" @click="switchDialog(dialogs.login_doctor)"
              >Accedi</a
            >
            oppure
            <a class="signin-link" @click="switchDialog(dialogs.signup_doctor)"
              >registrati</a
            >.
          </p>
        </div>
        <div v-else>
          <div v-if="currentDialog == dialogs.login_doctor">
            <p>
              Non hai un account?
              <a
                class="signin-link"
                @click="switchDialog(dialogs.signup_doctor)"
                >Registrati</a
              >.
            </p>
          </div>
          <div v-else>
            <p>
              Hai già un account?
              <a class="signin-link" @click="switchDialog(dialogs.login_doctor)"
                >Accedi</a
              >.
            </p>
          </div>
          <p>
            Sei un paziente? Inserisci il
            <a class="signin-link" @click="switchDialog(dialogs.guest)"
              >codice di accesso</a
            >.
          </p>
        </div>
      </div>
      <div id="signin-footer">
        <p>
          <a class="signin-link" @click="redirect('terms')"
            >Termini e condizioni</a
          >
          &nbsp;&nbsp;&nbsp;
          <a class="signin-link" @click="redirect('privacy')">Privacy</a>
          &nbsp;&nbsp;&nbsp;
          <a class="signin-link" @click="redirect('support')">Supporto</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './logo.vue';
import LoginGuest from './signin/login_guest.vue';
import LoginDoctor from './signin/login_doctor.vue';
import SignupDoctor from './signin/signup_doctor.vue';

export default {
  name: 'Index',
  components: {
    Logo,
    LoginGuest,
    LoginDoctor,
    SignupDoctor
  },
  data: function () {
    return {
      dialogs: {
        guest: 'login-guest',
        login_doctor: 'login-doctor',
        signup_doctor: 'signup-doctor'
      },
      currentDialog: 'login-guest'
    };
  },
  computed: {
    currentDialogComponent() {
      return this.currentDialog;
    }
  },
  methods: {
    switchDialog(newDialog) {
      this.currentDialog = newDialog;
    },
    redirect(where) {
      alert("Reindirizzando verso '" + where + "'"); // placeholder
    }
  }
};
</script>

<style lang="scss" scoped>
#signin-grid {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;

  width: 100vw;
  height: 100vh;

  min-width: 420px;
  min-height: 450px;
}

#signin-flex {
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: white;
  background-image: linear-gradient(to bottom right, #d6ebfc, #9ae2f2);
  background-size: 100%;
  background-repeat: no-repeat;
}

#signin-logo {
  align-items: center;
  margin: 30px auto 30px auto;
}

#signin-header {
  margin: 0 auto 20px auto;
  font-size: 20pt;
  font-weight: 380;
}

#signin-center {
  background-color: white;
  border-radius: 20px;

  padding: 20px;

  width: 380px;
  box-shadow: 0px 0px 50px rgba(100, 100, 100, 0.2);
}

#signin-dialog-switcher {
  font-size: 11pt;
  margin: 10px auto 0 auto;
}

#signin-dialog-switcher p {
  margin: 5px auto 5px auto;
}

#signin-footer {
  font-size: 9pt;
  margin: 30px auto 0 auto;
}

#signin-footer p {
  margin: 5px auto 5px auto;
}

#signin-footer .signin-link {
  color: gray;
}

.signin-link {
  display: inline;
  color: #0065ff;
  text-decoration: underline;
  cursor: pointer;
}
</style>
