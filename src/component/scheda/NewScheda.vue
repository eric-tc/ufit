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
        console.log("onSubmit");

    },
    validateDate(){

        return false;

    }
},



mounted() {
    this.error=this.$route.params.errors
    this.dateError=this.$route.params.dateError;
},




}
</script>