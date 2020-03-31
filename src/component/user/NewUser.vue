<template>
  <div>
    <h2>
      DATI GENERALI
      <button class="btn btn-success" @click="onSave">Save</button>
    </h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Numero Telefono:" label-for="input-3">
        <b-form-input
          id="input-3"
          onkeydown="return event.keyCode !== 69"
          v-model="form.cellulare"
          required
          type="number"
          placeholder="Numero Telefono"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Stile di Vita:" label-for="input-4">
        <b-form-select id="input-4" v-model="form.stileVita" :options="stileVitaOpzioni" required></b-form-select>
      </b-form-group>

     
      <h2>MOTIVO DELLA RICHIESTA</h2>

      <b-form-group id="input-group-5" label="Motivo Richiesta:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.motivoRichiesta"
          required
          placeholder="Motivo Richiesta"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Come pensi ti posssa aiutare:" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.aiutoServizio"
          required
          placeholder="Come aiutarti"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-7"
        label="Cosa ti aspetti dal mio servizio:"
        label-for="input-7"
      >
        <b-form-input
          id="input-7"
          v-model="form.aspettativaServizio"
          required
          placeholder="Aspettative dal servizio"
        ></b-form-input>
      </b-form-group>

      <h2>INFORMAZIONI ALLENAMENTO</h2>

      <b-form-group
        id="input-group-8"
        label="Numero allenamenti alla settimana:"
        label-for="input-8"
      >
        <b-form-input
          id="input-8"
          v-model="form.numAllenamenti"
          required
          placeholder="allenamenti settimana"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-9" label="Ore disponibili alla settimana:" label-for="input-9">
        <b-form-input
          id="input-9"
          v-model="form.oreDisponibili"
          required
          placeholder="ore disponibili"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-10" label="Descrivere allenamento svolto:" label-for="input-10">
        <b-form-input
          id="input-10"
          v-model="form.allenamentoSvolto"
          required
          placeholder="allenamento svolto"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-11" label="Descrivere Somatotipo:" label-for="input-11">
        <b-form-input id="input-11" v-model="form.somatotipo" required placeholder="Somatotipo"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-14" label="Allenamento desiderato:" label-for="input-14">
        <b-form-input
          id="input-14"
          v-model="form.allenamentoDesiderato"
          required
          placeholder="Allenamento desiderato"
        ></b-form-input>
      </b-form-group>

      <h2>STATO SALUTE</h2>

      <b-form-group id="input-group-12" label="Descrivere infortuni:" label-for="input-12">
        <b-form-input id="input-12" v-model="form.infortunio" required placeholder="infortunio"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-13" label="Descrivere malattie:" label-for="input-13">
        <b-form-input id="input-13" v-model="form.malattie" required placeholder="malattie"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
      <!-- <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>-->
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> 
    <br>
    <br>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        email: "",
        cellulare: "",
        name: "",
        stileVita: null,
        motivoRichiesta: "",
        aiutoServizio: "",
        aspettativaServizio: "",
        numAllenamenti: "",
        oreDisponibili: "",
        allenamentoSvolto: "",
        somatotipo: "",
        allenamentoDesiderato: "",
        infortunio: "",
        malattie: "",
        checked: []
      },
      stileVitaOpzioni: [
        { text: "Seleziona", value: null },
        "Attivo",
        "Mediamente",
        "Sedentario"
      ],
      show: true
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      localStorage.setItem("formUtente", JSON.stringify(this.form));

      const path = "http://localhost:5000/new-client";

      axios.post(path, this.form).then(() => {
        console.log("utente aggiunto");
        //rimuovo l'utente dal local storage se e stato aggiunto correttamente a db
        
        localStorage.removeItem("formUtente");
        this.form={
        email: "",
        cellulare: "",
        name: "",
        stileVita: null,
        motivoRichiesta: "",
        aiutoServizio: "",
        aspettativaServizio: "",
        numAllenamenti: "",
        oreDisponibili: "",
        allenamentoSvolto: "",
        somatotipo: "",
        allenamentoDesiderato: "",
        infortunio: "",
        malattie: "",
        checked: []
      }
        this.$router.push({ name: "ListUser", params: { utenteInserito: true } });
      
      });



      


      //alert(JSON.stringify(this.form))
    },

    //Salvataggio del form in Vuex
    onSave() {
      //save store
      console.log("save");

      localStorage.setItem("formUtente", JSON.stringify(this.form));
      
      //localStorage.removeItem("formUtente");
      //this.$store.commit("updateFormUtente",this.form);
    },

    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },

  beforeRouteLeave (to, from , next) {
  // const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  
  // if (answer) {
  //   next()
  // } else {
  //   next(false)
  // }

  //salvo i dati nel local storage prima di lasciare la pagina
   localStorage.setItem("formUtente", JSON.stringify(this.form));
   next();


},
mounted() {
    console.log();
    //carico i dati dallo store
    //this.form = this.$store.getters.getFormUtente;

    if (localStorage.getItem("formUtente") !== null) {
      this.form = JSON.parse(localStorage.getItem("formUtente"));
    }
  }
};
</script>