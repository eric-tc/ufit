<template>
    <div>
        Home

        {{msg}}

        <button v-on:click="getMessage()" class="bt btn-primary"> Test</button>
    </div>
</template>


<script>

import axios from 'axios';
export default {
    
data(){

    return{
        msg:"null"
    }
},

  methods: {
    getMessage() {
      const path = 'http://127.0.0.1:5000/test';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
  },

}
</script>