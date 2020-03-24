<template>
    <div>
        
        <h2>LISTA SCHEDE UTENTE</h2>


        <ul class="list-group cProductsList"> 
                
                
                <li  v-for="scheda in listaSchede" class="list-group-item d-flex justify-content-between">
                    
                    <p class="p-0 m-0 flex-grow-1"> Scheda {{scheda.id}} FINE SCHEDA <b>{{scheda.durata}}</b></p> 
                   
                   <router-link :to="{name:'userProfile',params:{id:scheda.id}}" tag="button" class="btn-success"> Allenamenti </router-link>  
                   
                   
                </li>
               

        </ul>

    
    </div>
</template>



<script>
import axios from 'axios';
export default {
    
   
    data(){

        return{

            listaSchede:[]
        }

    },

    methods: {
        getSchedeList(){

      const path = 'http://localhost:4000/lista-schede/' + this.$route.params.id;

      console.log(path);
      axios.get(path)
        .then((res) => {
          this.listaSchede = res.data;
          //console.log(this.users)
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });


    }
    },

    created() {
        
        this.getSchedeList();
    },
}
</script>