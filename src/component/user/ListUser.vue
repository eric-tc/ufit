<template>
    <div>

      <div style="background-color:green;" v-if="utente">UTENTE INSERITO CORRETTAMENTE</div>
      <div style="background-color:green;" v-if="success">SCHEDA INSERITA CORRETTAMENTE</div>
        <ul class="list-group cProductsList"> 
                
                
                <li  v-for="user in users" class="list-group-item d-flex justify-content-between">
                    
                    <p class="p-0 m-0 flex-grow-1">{{user.nome}}</p> 
                   
                   <router-link :to="{name:'userProfile',params:{id:user.id}}" tag="button" class="btn-success"> Profilo </router-link>  
                   
                   <router-link :to="{name:'newScheda',params:{id:user.id}}" tag="button" class="btn-primary">Scheda </router-link>
                
                </li>
               

        </ul>


    </div>
</template>


<script>

import axios from 'axios'
export default {
    
data(){

    return{
        //users:[{id:'1',name:"Pippo"},
        //{id:'2',name:"test"}]
        users:[],
        success:false,
        utente:false
    }
},

methods:{
    getUserList(){

      const path = 'http://localhost:5000/';
      console.log("prova");
      axios.get(path)
        .then((res) => {
          this.users = res.data;
          console.log(this.users)
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });


    },

},
    created() {
    
    this.getUserList();
    this.success=this.$route.params.success;
    this.utente=this.$route.params.utenteInserito;

  },





}
</script>