<template>
    <div>
        <ul class="list-group cProductsList"> 
                
                
                <li  v-for="user in users" class="list-group-item d-flex justify-content-between">
                    
                    <p class="p-0 m-0 flex-grow-1">{{user.name}}</p> 
                   
                   <router-link :to="{name:'userProfile',params:{id:user.id}}" tag="button" class="btn-success"> Profilo </router-link>  
                   
                   <router-link :to="{name:'newScheda',params:{id:user.id}}" tag="button" class="btn-primary">Scheda </router-link>
                
                </li>
               

        </ul>


    </div>
</template>


<script>
export default {
    
data(){

    return{
        users:[{id:'1',name:"Pippo"},
        {id:'2',name:"test"}]
    }
}

}
</script>