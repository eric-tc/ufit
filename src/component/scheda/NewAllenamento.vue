<template>
  <div id="div_canva" class="row">
    
    <div class="col-12" ref="scheda">
    

    <model-list-select :list="listaAllenamenti"
                     v-model="dummy"
                     option-value="id_allenamento"
                     option-text="nome_allenamento"
                     
                     placeholder="select item">
    </model-list-select>
      
{{listaAllenamenti.nome_allenamento}}


    <h2><b> RISCALDAMENTO</b> </h2>

    <button class="btn btn-primary ml-4" data-html2canvas-ignore="true" @click="addAllenamento()">ADD ESERCIZIO</button>
    <button class="btn btn-success ml-4" data-html2canvas-ignore="true" @click="generatePdf()">CREA PDF</button>
    <hr data-html2canvas-ignore="true">
    <br>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Esercizio</th>
            <th scope="col">Serie</th>
            <th scope="col">Sport</th>
          </tr>
        </thead>

        <draggable v-model="list" tag="tbody">
          <tr v-for=" (item, index )   in list" :key="item.name">
            <td scope="row">
                <div v-show = "item.edit == false">
                    <label @dblclick = "item.edit = true"> {{item.nome_allenamento}} {{item.id_allenamento}}</label>
                </div>
                
                
                <div v-show = "item.edit == true" v-on:blur= "item.edit=false; $emit('update')"
                @keyup.enter = "item.edit=false; $emit('update'); updateComp(list,index)">
                    <model-list-select :list="listaAllenamenti"
                     v-model="test"
                     
                     option-value="id_allenamento"
                     option-text="nome_allenamento"
                     placeholder="select item">
                </model-list-select>
                  
                </div>
                <!-- <input v-show = "item.edit == true" v-model = "item.id"


                v-on:blur= "item.edit=false; $emit('update')"
                @keyup.enter = "item.edit=false; $emit('update')"> -->

                
                
            </td>
            <td>{{ item.name }} {{index}}</td>
            <td>{{ item.sport }}</td>
            <td><button @click="removeAllenamento(index)" data-html2canvas-ignore="true" class="btn btn-danger">Remove</button></td>
          </tr>
        </draggable>
      </table>
    <br>
    <br>
    
    <h2 class="inline-block pull-left"> <b>PARTE CENTRALE</b></h2>
    
    <button class="btn btn-primary ml-4" data-html2canvas-ignore="true" @click="addAllenamento()">ADD ALLENAMENTO</button>
    <hr data-html2canvas-ignore="true">
    
    <div style="border-style: solid; border-color: coral;" v-for="(allenamento,n_all) in allenamenti_circuito">
    
    
	<h2 class="inline-block pull-left">ALLENAMENTO {{n_all}}</h2>
	<button class="btn btn-info ml-4" data-html2canvas-ignore="true" @click="addCircuito(n_all)">ADD CIRCUITO</button>
   

    <div  v-for="(circuito,numero) in allenamento">
        <br>
        <h3>  CIRCUITO {{numero}}   </h3>
      
    
    <button class="btn btn-secondary ml-4" data-html2canvas-ignore="true" @click="addCircuitoAllenamento(n_all,numero)">ADD ESERCIZIO</button>
    <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Esercizio</th>
            <th scope="col">Serie</th>
            <th scope="col">Sport</th>
          </tr>
        </thead>

        <draggable v-model="allenamenti_circuito[n_all][numero]" tag="tbody">
        
          <tr v-for=" (item, index )   in circuito" :key="item.name">

            
            <td scope="row">
                <div v-show = "item.edit == false">
                    <label @dblclick = "item.edit = true"> {{item.nome_allenamento}} </label>
                </div>
                <!-- <input v-show = "item.edit == true" v-model = "item.id"
                v-on:blur= "item.edit=false; $emit('update')"
                @keyup.enter = "item.edit=false; $emit('update')"> -->

                
                <div v-show = "item.edit == true" v-on:blur= "item.edit=false; $emit('update')"
                @keyup.enter = "item.edit=false; $emit('update'); updateCompCentrale(n_all,numero,index)">
                    <model-list-select :list="listaAllenamenti"
                     v-model="test"
                     
                     option-value="id_allenamento"
                     option-text="nome_allenamento"
                     placeholder="select item">
                </model-list-select>
                  
                </div>

                
            </td>
            <td>{{ item.name }} {{index}}</td>
            <td>{{ item.sport }}</td>
            <td><button  @click="removeCircuitoAllenamento(n_all,numero,index)" class="btn btn-danger" data-html2canvas-ignore="true">Remove</button></td>
          </tr>
        </draggable>
      </table>
      
    </div>
  	</div>
        <br>
        <br>
      <h2> <b> DEFATICAMENTO </b></h2>
      
      <button class="btn btn-primary ml-4" data-html2canvas-ignore="true" @click="addDefaticamento()">ADD ESERCIZIO</button>
      <hr data-html2canvas-ignore="true">
      <br>
    <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Esercizio</th>
            <th scope="col">Serie</th>
            <th scope="col">Sport</th>
          </tr>
        </thead>

        <draggable v-model="defaticamento" tag="tbody">
          <tr v-for=" (item, index )   in defaticamento" :key="item.name">
            <td scope="row">
                <div v-show = "item.edit == false">
                    <label @dblclick = "item.edit = true"> {{item.nome_allenamento}} </label>
                </div>
                <input v-show = "item.edit == true" v-model = "item.id"
                v-on:blur= "item.edit=false; $emit('update')"
                @keyup.enter = "item.edit=false; $emit('update')">

                
                
            </td>
            <td>{{ item.name }} {{index}}</td>
            <td>{{ item.sport }}</td>
            <td><button @click="removeDefaticamento(index)" class="btn btn-danger" data-html2canvas-ignore="true" >Remove</button></td>
          </tr>
        </draggable>
      </table>

      
    </div>

    



  </div>
</template>

<script>
import draggable from "vuedraggable";
import jsPDF from 'jspdf' ;
import html2canvas from "html2canvas";
import moment from 'moment';
import { ModelListSelect } from 'vue-search-select';
import axios from 'axios';
export default {
  name: "table-example",
  display: "Table",
  order: 8,
  components: {
    draggable
  },
  data() {
    return {
      list: [
        { id_allenamento: 1, nome_allenamento: "Abby", sport: "basket", 'edit':true}
      ],
        test:{id_allenamento:"",
              nome_allenamento:""
        },

      allenamenti_circuito:[[[{id_allenamento:"add",nome_allenamento:"test",sport:"",edit:true }]]],
      index:"",
      defaticamento:[{id: 1, name: "Esempio", sport: "Add", 'edit':true}],
      edited:null,
      dragging: false,
      listaAllenamenti:[],
      dummy:""
    };
  },methods:{

      editTodo: function(todo) {
      this.edited = todo;
    },

    add:function(){


    },
    addAllenamento:function(){

        this.list.push({id:"add",name:"add",sport:"add",edit:true});
    },
    removeAllenamento(index){

        this.list.splice(index,1);
    },

    addCircuito:function(n_all){


        this.allenamenti_circuito[n_all].push([{id:"add",name:"add",sport:"add",edit:true}])
    },

    addAllenamento(){

        this.allenamenti_circuito.push([])

    },

    addCircuitoAllenamento:function(n_all,index){


        this.allenamenti_circuito[n_all][index].push({id_allenamento:"add",nome_allenamento:"add",sport:"add",edit:true})
    },

    removeCircuitoAllenamento:function(n_all,numero,index){

        this.allenamenti_circuito[n_all][numero].splice(index,1);
    },

    addDefaticamento:function(){
        this.defaticamento.push({id:"add",name:"add",sport:"add",edit:false});

    },

    removeDefaticamento:function(index){

        this.defaticamento.splice(index,1);


    },
	
	//funzione per gestire solo allenamento e post allenamento
    updateComp(list,index){

      console.log(index);
      this.list[index].nome_allenamento=this.test.nome_allenamento;
      this.list[index].id_allenamento=this.test.id_allenamento;
    
    },

	//funzione per gestire campo select nome allenamento parte centrale
    updateCompCentrale(n_all,numero,index){

    //   console.log("UPDATE COM CENTRALE");
    //   console.log(numero);
    //   console.log(index)

    //   console.log(this.allenamenti_circuito[n_all][numero][index].id_allenamento);
    //   console.log(this.test.id_allenamento);

      this.allenamenti_circuito[n_all][numero][index].id_allenamento=this.test.id_allenamento;
      this.allenamenti_circuito[n_all][numero][index].nome_allenamento=this.test.nome_allenamento;
      
      console.log("UPDATED")
      //console.log(this.allenamenti_circuito[0][0].id_allenamento);
      //this.allenamenti_circuito[numero][index].nome_allenamento=this.test.nome_allenamento;
      //this.allenamenti_circuito[numero][index].id_allenamento=this.test.id_allenamento;

    },

generatePdf:function(){

        
   /** WITH CSS 
   var canvasElement = document.createElement('canvas');
    html2canvas(this.$refs.scheda, { canvas: canvasElement 
      }).then(function (canvas) {

    var doc= new jsPDF('l','mm','a4');
    doc.setFontSize(14);
    let img = canvas.toDataURL("image/png", 1.0);

    doc.addImage(img,'PNG',0,0,200,200);
    doc.save("sample.pdf");
   });

*/

console.log("test");
/*html2canvas(document.body).then(canvas => {
              

                  console.log("prova");

                  //Returns the image data URL, parameter: image format and clarity (0-1)
                  var pageData = canvas.toDataURL('image/jpeg', 1.0);
				  console.log("CANVA COORD");
				  console.log(canvas.height);
				  console.log(canvas.width);

				  //Default vertical direction, size ponits, format a4[595.28,841.89]
				  //il pdf diventa delle dimensione del canvas
                  var pdf = new jsPDF('', 'pt', [canvas.width,canvas.height]);

                  //Two parameters after addImage control the size of the added image, where the page height is compressed according to the width-height ratio column of a4 paper.
                  //pdf.addImage(pageData, 'JPEG', 0, 0, 1000, 1000/canvas.width*canvas.height );
				  
				  pdf.addImage(pageData, 'JPEG', 0, 0, canvas.height,canvas.width );

                  pdf.save('stone.pdf');

              }
          );


*/


var divHeight = $('#div_canva').height();
var divWidth = $('#div_canva').width();
var ratio = divHeight / divWidth;
var doc = new jsPDF("","mm",[divWidth,divHeight]);
html2canvas(document.getElementById("div_canva")).then(canvas=> {
		  
		  var image = canvas.toDataURL("image/jpeg");
           // using defaults: orientation=portrait, unit=mm, size=A4
          var width = doc.internal.pageSize.getWidth();    
          var height = doc.internal.pageSize.getHeight();
          height = ratio * width;
          doc.addImage(image, 'JPEG', 0, 0, width-20, height-10);
          doc.save('myPage.pdf'); //Download the rendered PDF.
     }
);

    },

    showCaptureRef() {
      console.log("this.$refs.scheda: " + this.$refs.scheda);
      let vc = this;
      return vc.$refs.scheda;
    },
    downloadVisualReport () {
      let vc = this
      // alert("Descargando reporte visual")
      console.log('campaign-view#downloadVisualReport');
      html2canvas(vc.showCaptureRef()).then(canvas => {
          document.body.appendChild(canvas)
          

      }).catch((error) => {
        console.log("Erorr descargando reporte visual", error)
      });
    },

    //ritorna la lista degli allenamenti
    getAllenamentiList(){

      const path = 'http://localhost:4000/esercizi';
      console.log("prova");
      axios.get(path)
        .then((res) => {
          var allenamentoDict = res.data;

          //console.log(this.listaAllenamenti.nome_allenamento)
          
          for (var value of allenamentoDict) {
          //console.log(value);
          this.listaAllenamenti.push(value);
          }
    
          console.log("Lista Allenamenti")
          console.log(this.listaAllenamenti)
          console.log(this.options1)
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });


    }


    
    



  },

  beforeCreate() {
    
    //verifica se la data e stata inserita correttamente altrimenti ritorna alla pagina scheda
    
    if(this.$route.params.form.fineScheda=="undefined"){

      this.$router.push({name:'newScheda'})
    } 

    else{
    if (this.$route.params.form.fineScheda=== null){
        //redirect
        console.log("NULL");
        this.$router.push({name:'newScheda',params:{errors:true}}) 
        return;
    }

    

    
    var now= moment().format("YYYY-MM-DD");
   
    
    if (this.$route.params.form.fineScheda<=now){
      
      console.log("data minore");
      
      this.$router.push({name:'newScheda',params:{dateError:true}}) 
      return;
    }

  


    
  //Se la data e corretta creo array con tutti esercizi presi dal database
  }

  },

created() {
  

  this.getAllenamentiList();
},


  components:{

    ModelListSelect,
    draggable
  }


};
</script>

<style scoped>
.buttons {
  margin-top: 35px;
  vertical-align: top;
}

div {

margin-top:0.2em;

}

h2,h3 {

display: inline-block;
float: left;

}
/*
Se non visualizzo tutta la scheda devo aumentare la height 
*/ 
.html2canvas-container { width: auto !important; height: auto !important; }

</style>