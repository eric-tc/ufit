<template>
    <div>


    <b-form @submit="onSubmit" v-if="show">
    

    <h2>INFORMAZIONI GENERALI

    </h2>
    
    <div style="background-color:yellow;" v-if="error">DATA NON INSERITA</div>
    <div style="background-color:yellow;" v-if="dateError">IMPOSSIBILE INSERIRE UNA DATA PASSATA</div>
    <label for="example-datepicker">Seleziona data fine scheda</label>
    <b-form-datepicker id="example-datepicker"
    :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit'}"
    v-model="form.fineScheda" class="mb-2"></b-form-datepicker>
    

    <b-form-group id="input-group-14" label="Programmazione Scheda:" label-for="input-14">
        <b-form-input
          id="input-14"
          v-model="form.programmazioneScheda"
          required
          placeholder="Descrivere programmazione scheda"
        ></b-form-input>
      </b-form-group>

    
    <b-form-group id="input-group-14" label="Descrivere Tipo di Carico:" label-for="input-14">
        <b-form-input
          id="input-14"
          v-model="form.tipoCarico"
          required
          placeholder="Descrivere tipo di Carico"
        ></b-form-input>
      </b-form-group>
        
      
    
    <router-link :to="{name:'newAllenamento',params:{form:form}}" tag="button"  class="btn btn-primary" >Crea Allenamento </router-link>
    
    {{form.idUtente}}
    </b-form>    
    </div>
</template>



<script>


export default {
    
data(){

    return{

        show:true,
        value:'',
        error:false,
        dateError:false,
        form:{

            fineScheda:"default",
            programmazioneScheda:"",
            tipoCarico:"",
            idUtente:this.$route.params.id

        }

    }
},

methods: {
    onSubmit(evt) {

        this.form.idUtente=this.$route.params.id;
        
        console.log("IDUTENTE")
        console.log( this.form.idUtente);
        alert("pippo");
        localStorage.setItem("formScheda", JSON.stringify(this.form));

        console.log("onSubmit");

    },
    validateDate(){

        return false;

    }
},
beforeRouteLeave (to, from , next) {
  // const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  
  // if (answer) {
  //   next()
  // } else {
  //   next(false)
  // }
    
    // salvo id utente nel local storage prima di passare alla creazione degli allenamenti
    this.form.idUtente=this.$route.params.id;
  //salvo i dati nel local storage prima di lasciare la pagina
   localStorage.setItem("formScheda", JSON.stringify(this.form));
   next();
},



mounted() {
    this.error=this.$route.params.errors
    this.dateError=this.$route.params.dateError;

    if (localStorage.getItem("formScheda") !== null) {
       this.form = JSON.parse(localStorage.getItem("formScheda"));
     }
},




}
</script>