<template>
  <div id="div_canva" class="row">
    <br />
    <br />
    <div class="col-12" ref="scheda">
      <div class="w-100 p-3">
        <h2>
          <b data-html2canvas-ignore="true"></b>
        </h2>
      </div>

      <div div class="w-100 p-3">
        <h2>
          <b>RISCALDAMENTO</b>
        </h2>

        <!-- <button
          class="btn btn-primary ml-4"
          data-html2canvas-ignore="true"
          @click="addRiscaldamento()"
        >ADD ESERCIZIO</button>-->
        <button
          class="btn btn-info ml-4"
          data-html2canvas-ignore="true"
          @click="generatePdf()"
        >CREA PDF</button>

        <!-- <button
          class="btn btn-success ml-4"
          data-html2canvas-ignore="true"
          @click="save()"
        >SALVA</button>-->
      </div>
      <hr data-html2canvas-ignore="true" />
      <br />
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Esercizio</th>
            <th scope="col">Serie</th>
            <th scope="col">Workout</th>
            <th scope="col">Carico</th>
            <th scope="col">Note</th>
          </tr>
        </thead>

        <draggable v-model="list" tag="tbody">
          <tr v-for=" (item, index )   in list" :key="item.name">
            <td scope="row">
              <div >
                <label
                  @dblclick="item.edit = true"
                >{{item.nome_allenamento}} </label>
              </div>

              <!-- <div
                v-show="item.edit == true"
                v-on:blur="item.edit=false; $emit('update')"
                @keyup.enter="item.edit=false; $emit('update'); updateComp(list,index)"
              >
                <model-list-select
                  :list="listaAllenamenti"
                  v-model="test"
                  option-value="id_allenamento"
                  option-text="nome_allenamento"
                  placeholder="select item"
                ></model-list-select>
              </div> -->
              <!-- <input v-show = "item.edit == true" v-model = "item.id"


                v-on:blur= "item.edit=false; $emit('update')"
              @keyup.enter = "item.edit=false; $emit('update')">-->
            </td>
            <td>
              
             

                <div>
                  <label >{{ item.serie }}</label>
                </div>
              

              <!-- <input
                v-show="item.serie_edit == true"
                v-model="item.serie"
                v-on:blur="item.serie_edit=false; $emit('update')"
                @keyup.enter="item.serie_edit=false; $emit('update')"
              /> -->
            </td>

            <td>
             


                <div >
                  <label >{{ item.workout }}</label>
                </div>
             

              <!-- <input
                v-show="item.workout_edit == true"
                v-model="item.workout"
                v-on:blur="item.workout_edit=false; $emit('update')"
                @keyup.enter="item.workout_edit=false; $emit('update')"
              /> -->
            </td>

            <td>
             

                <div >
                  <label >{{ item.carico }}</label>
                </div>
              

              <!-- <input
                v-show="item.carico_edit == true"
                v-model="item.carico"
                v-on:blur="item.carico_edit=false; $emit('update')"
                @keyup.enter="item.carico_edit=false; $emit('update')"
              /> -->
            </td>
            <td>
            

                <div >
                  <label @dblclick="item.note_edit = true">{{ item.note }}</label>
                </div>
              

              <!-- <input
                v-show="item.note_edit == true"
                v-model="item.note"
                v-on:blur="item.note_edit=false; $emit('update')"
                @keyup.enter="item.note_edit=false; $emit('update')"
              /> -->
            </td>

            <!-- <td>
              <button
                @click="removeRiscaldamento(index)"
                data-html2canvas-ignore="true"
                class="btn btn-danger"
              >Remove</button>
            </td> -->
          </tr>
        </draggable>
      </table>
      <br />
      <br />

      <h2 class="inline-block pull-left">
        <b>PARTE CENTRALE</b>
      </h2>

      <!-- <button
        class="btn btn-primary ml-4"
        data-html2canvas-ignore="true"
        @click="addAllenamento()"
      >ADD ALLENAMENTO</button> -->

      <div
        style="border-style: solid; border-color: coral;"
        v-for="(allenamento,n_all) in allenamenti_circuito"
      >
        <div div class="w-100 p-3">
          <h2 class="inline-block pull-left">ALLENAMENTO {{n_all}}</h2>
          <!-- <button
            class="btn btn-danger ml-4"
            data-html2canvas-ignore="true"
            @click="removeAllenamento(n_all)"
          >RIMUOVI ALLENAMENTO</button>

          <button
            class="btn btn-info ml-4"
            data-html2canvas-ignore="true"
            @click="addCircuito(n_all)"
          >ADD CIRCUITO</button>-->
        </div>
        <div v-for="(circuito,numero) in allenamento">
          <div div class="w-100 p-1">
            <h3>CIRCUITO {{numero}}</h3>

            <!-- <button
              class="btn btn-danger ml-4"
              data-html2canvas-ignore="true"
              @click="removeCircuito(n_all,numero)"
            >RIMUOVI CIRCUITO</button>

            <button
              class="btn btn-secondary ml-4"
              data-html2canvas-ignore="true"
              @click="addCircuitoAllenamento(n_all,numero)"
            >ADD ESERCIZIO</button> -->
          </div>
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Esercizio</th>
                <th scope="col">Serie</th>
                <th scope="col">Workout</th>
                <th scope="col">Carico</th>
                <th scope="col">Note</th>
              </tr>
            </thead>

            <draggable v-model="allenamenti_circuito[n_all][numero]" tag="tbody">
              <tr v-for=" (item, index )   in circuito" :key="item.name">
                <td scope="row">
              <div >
                <label
                  @dblclick="item.edit = true"
                >{{item.nome_allenamento}} </label>
              </div>

              <!-- <div
                v-show="item.edit == true"
                v-on:blur="item.edit=false; $emit('update')"
                @keyup.enter="item.edit=false; $emit('update'); updateComp(list,index)"
              >
                <model-list-select
                  :list="listaAllenamenti"
                  v-model="test"
                  option-value="id_allenamento"
                  option-text="nome_allenamento"
                  placeholder="select item"
                ></model-list-select>
              </div> -->
              <!-- <input v-show = "item.edit == true" v-model = "item.id"


                v-on:blur= "item.edit=false; $emit('update')"
              @keyup.enter = "item.edit=false; $emit('update')">-->
            </td>
            <td>
              
             

                <div>
                  <label >{{ item.serie }}</label>
                </div>
              

              <!-- <input
                v-show="item.serie_edit == true"
                v-model="item.serie"
                v-on:blur="item.serie_edit=false; $emit('update')"
                @keyup.enter="item.serie_edit=false; $emit('update')"
              /> -->
            </td>

            <td>
             


                <div >
                  <label >{{ item.workout }}</label>
                </div>
             

              <!-- <input
                v-show="item.workout_edit == true"
                v-model="item.workout"
                v-on:blur="item.workout_edit=false; $emit('update')"
                @keyup.enter="item.workout_edit=false; $emit('update')"
              /> -->
            </td>

            <td>
             

                <div >
                  <label >{{ item.carico }}</label>
                </div>
              

              <!-- <input
                v-show="item.carico_edit == true"
                v-model="item.carico"
                v-on:blur="item.carico_edit=false; $emit('update')"
                @keyup.enter="item.carico_edit=false; $emit('update')"
              /> -->
            </td>
            <td>
            

                <div >
                  <label @dblclick="item.note_edit = true">{{ item.note }}</label>
                </div>
              

              <!-- <input
                v-show="item.note_edit == true"
                v-model="item.note"
                v-on:blur="item.note_edit=false; $emit('update')"
                @keyup.enter="item.note_edit=false; $emit('update')"
              /> -->
            </td>
              </tr>
            </draggable>
          </table>
        </div>
      </div>
      <br />
      <br />
      <h2>
        <b>DEFATICAMENTO</b>
      </h2>

      <!-- <button
        class="btn btn-primary ml-4"
        data-html2canvas-ignore="true"
        @click="addDefaticamento()"
      >ADD ESERCIZIO</button>-->
      <hr data-html2canvas-ignore="true" />
      <br />
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Esercizio</th>
            <th scope="col">Serie</th>
            <th scope="col">Workout</th>
            <th scope="col">Carico</th>
            <th scope="col">Note</th>
          </tr>
        </thead>

        <draggable v-model="defaticamento" tag="tbody">
          <tr v-for=" (item, index )   in defaticamento" :key="item.name">
            <td scope="row">
              <div >
                <label
                  @dblclick="item.edit = true"
                >{{item.nome_allenamento}} </label>
              </div>

              <!-- <div
                v-show="item.edit == true"
                v-on:blur="item.edit=false; $emit('update')"
                @keyup.enter="item.edit=false; $emit('update'); updateComp(list,index)"
              >
                <model-list-select
                  :list="listaAllenamenti"
                  v-model="test"
                  option-value="id_allenamento"
                  option-text="nome_allenamento"
                  placeholder="select item"
                ></model-list-select>
              </div> -->
              <!-- <input v-show = "item.edit == true" v-model = "item.id"


                v-on:blur= "item.edit=false; $emit('update')"
              @keyup.enter = "item.edit=false; $emit('update')">-->
            </td>
            <td>
              
             

                <div>
                  <label >{{ item.serie }}</label>
                </div>
              

              <!-- <input
                v-show="item.serie_edit == true"
                v-model="item.serie"
                v-on:blur="item.serie_edit=false; $emit('update')"
                @keyup.enter="item.serie_edit=false; $emit('update')"
              /> -->
            </td>

            <td>
             


                <div >
                  <label >{{ item.workout }}</label>
                </div>
             

              <!-- <input
                v-show="item.workout_edit == true"
                v-model="item.workout"
                v-on:blur="item.workout_edit=false; $emit('update')"
                @keyup.enter="item.workout_edit=false; $emit('update')"
              /> -->
            </td>

            <td>
             

                <div >
                  <label >{{ item.carico }}</label>
                </div>
              

              <!-- <input
                v-show="item.carico_edit == true"
                v-model="item.carico"
                v-on:blur="item.carico_edit=false; $emit('update')"
                @keyup.enter="item.carico_edit=false; $emit('update')"
              /> -->
            </td>
            <td>
            

                <div >
                  <label @dblclick="item.note_edit = true">{{ item.note }}</label>
                </div>
              

              <!-- <input
                v-show="item.note_edit == true"
                v-model="item.note"
                v-on:blur="item.note_edit=false; $emit('update')"
                @keyup.enter="item.note_edit=false; $emit('update')"
              /> -->
            </td>
          </tr>
        </draggable>
      </table>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import moment from "moment";
import { ModelListSelect } from "vue-search-select";
import axios from "axios";
export default {
  name: "table-example",
  display: "Table",
  order: 8,
  components: {
    draggable
  },
  data() {
    return {
      list: [],
      test: { id_allenamento: "", nome_allenamento: "" },

      allenamenti_circuito: [],
      index: "",
      defaticamento: [],
      edited: null,
      dragging: false,
      listaAllenamenti: [],
      dummy: ""
    };
  },
  methods: {
    editTodo: function(todo) {
      this.edited = todo;
    },

    add: function() {},
    addRiscaldamento: function() {
      this.list.push({
        id_allenamento: 1,
        nome_allenamento: "Abby",
        serie: "n_serie",
        workout: "tempo",
        carico: "carico",
        note: " note",
        edit: true,
        serie_edit: true,
        workout_edit: true,
        carico_edit: true,
        note_edit: true
      });
    },
    removeRiscaldamento(index) {
      this.list.splice(index, 1);
    },

    addCircuito: function(n_all) {
      this.allenamenti_circuito[n_all].push([
        {
          id_allenamento: 1,
          nome_allenamento: "Abby",
          serie: "n_serie",
          workout: "tempo",
          carico: "carico",
          note: " note",
          edit: true,
          serie_edit: true,
          workout_edit: true,
          carico_edit: true,
          note_edit: true
        }
      ]);
    },

    removeCircuito(n_all, index) {
      this.allenamenti_circuito[n_all].splice(index, 1);
    },

    addAllenamento() {
      this.allenamenti_circuito.push([]);
    },
    removeAllenamento(index) {
      this.allenamenti_circuito.splice(index, 1);
    },

    addCircuitoAllenamento: function(n_all, index) {
      this.allenamenti_circuito[n_all][index].push({
        id_allenamento: 1,
        nome_allenamento: "Abby",
        serie: "n_serie",
        workout: "tempo",
        carico: "carico",
        note: " note",
        edit: true,
        serie_edit: true,
        workout_edit: true,
        carico_edit: true,
        note_edit: true
      });
    },

    removeCircuitoAllenamento: function(n_all, numero, index) {
      this.allenamenti_circuito[n_all][numero].splice(index, 1);
    },

    addDefaticamento: function() {
      this.defaticamento.push({
        id_allenamento: 1,
        nome_allenamento: "Abby",
        serie: "n_serie",
        workout: "tempo",
        carico: "carico",
        note: " note",
        edit: true,
        serie_edit: true,
        workout_edit: true,
        carico_edit: true,
        note_edit: true
      });
    },

    removeDefaticamento: function(index) {
      this.defaticamento.splice(index, 1);
    },

    //funzione per gestire solo allenamento e post allenamento
    updateComp(list, index) {
      console.log(index);
      this.list[index].nome_allenamento = this.test.nome_allenamento;
      this.list[index].id_allenamento = this.test.id_allenamento;
    },

    updateCompDefaticamento(list, index) {
      this.defaticamento[index].nome_allenamento = this.test.nome_allenamento;
      this.defaticamento[index].id_allenamento = this.test.id_allenamento;
    },

    //funzione per gestire campo select nome allenamento parte centrale
    updateCompCentrale(n_all, numero, index) {
      //   console.log("UPDATE COM CENTRALE");
      //   console.log(numero);
      //   console.log(index)

      //   console.log(this.allenamenti_circuito[n_all][numero][index].id_allenamento);
      //   console.log(this.test.id_allenamento);

      this.allenamenti_circuito[n_all][numero][
        index
      ].id_allenamento = this.test.id_allenamento;
      this.allenamenti_circuito[n_all][numero][
        index
      ].nome_allenamento = this.test.nome_allenamento;

      console.log("UPDATED");
      //console.log(this.allenamenti_circuito[0][0].id_allenamento);
      //this.allenamenti_circuito[numero][index].nome_allenamento=this.test.nome_allenamento;
      //this.allenamenti_circuito[numero][index].id_allenamento=this.test.id_allenamento;
    },

    generatePdf: function() {
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

      localStorage.setItem("formRiscaldamento", JSON.stringify(this.list));
      localStorage.setItem(
        "formAllenamento",
        JSON.stringify(this.allenamenti_circuito)
      );
      localStorage.setItem(
        "formDefaticamento",
        JSON.stringify(this.defaticamento)
      );

      //SALVA I DATI A DATABASE
      //this.sendAllenamenti();
      //Creazione del PDF
      var divHeight = $("#div_canva").height();
      var divWidth = $("#div_canva").width();
      var ratio = divHeight / divWidth;
      var doc = new jsPDF("", "mm", [divWidth, divHeight]);
      html2canvas(document.getElementById("div_canva")).then(canvas => {
        var image = canvas.toDataURL("image/jpeg");
        // using defaults: orientation=portrait, unit=mm, size=A4
        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();
        height = ratio * width;
        doc.addImage(image, "JPEG", 0, 0, width - 20, height);
        doc.save("myPage.pdf"); //Download the rendered PDF.
      });
    },

    sendAllenamenti() {
      const path = "http://localhost:4000/crea-scheda/" + this.$route.params.id;

      var allenamenti_totali = [];

      allenamenti_totali.push(this.$route.params.form);
      allenamenti_totali.push(this.list);
      allenamenti_totali.push(this.allenamenti_circuito);
      allenamenti_totali.push(this.defaticamento);

      axios
        .post(path, allenamenti_totali)
        .then(res => {
          var resp = res.data;

          console.log(resp.message);
          console.log("dati inseriti correttamente");

          //Rimuovo gli elementi nel local Storage

          if (localStorage.getItem("formRiscaldamento") !== null)
            localStorage.removeItem("formRiscaldamento");

          if (localStorage.getItem("formAllenamento") !== null)
            localStorage.removeItem("formAllenamento");

          if (localStorage.getItem("formDefaticamento") !== null)
            localStorage.removeItem("formDefaticamento");

          //indirizzo l'utente in home page

          this.$router.push({ name: "ListUser", params: { success: true } });
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
        });
    },

    showCaptureRef() {
      console.log("this.$refs.scheda: " + this.$refs.scheda);
      let vc = this;
      return vc.$refs.scheda;
    },
    downloadVisualReport() {
      let vc = this;
      // alert("Descargando reporte visual")
      console.log("campaign-view#downloadVisualReport");
      html2canvas(vc.showCaptureRef())
        .then(canvas => {
          document.body.appendChild(canvas);
        })
        .catch(error => {
          console.log("Erorr descargando reporte visual", error);
        });
    },

    //ritorna la lista degli allenamenti
    getAllenamentiList() {
      const path = "http://localhost:4000/esercizi";
      console.log("prova");
      axios
        .get(path)
        .then(res => {
          var allenamentoDict = res.data;

          //console.log(this.listaAllenamenti.nome_allenamento)

          for (var value of allenamentoDict) {
            //console.log(value);
            this.listaAllenamenti.push(value);
          }

          console.log("Lista Allenamenti");
          console.log(this.listaAllenamenti);
          console.log(this.options1);
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    },

    save() {
      console.log("salva");

      localStorage.setItem("formRiscaldamento", JSON.stringify(this.list));
      localStorage.setItem(
        "formAllenamento",
        JSON.stringify(this.allenamenti_circuito)
      );
      localStorage.setItem(
        "formDefaticamento",
        JSON.stringify(this.defaticamento)
      );
    },

    fetchRiscaldamento() {


      const path = "http://localhost:4000/lista-esercizi-riscaldamento/" + this.$route.params.id + "/" + this.$route.params.scheda_id;
      console.log(path);
      axios
        .get(path)
        .then(res => {

          var allenamentoDict = res.data;

            // console.log("ALLEDICT");
            // console.log(allenamentoDict);
          //console.log(this.listaAllenamenti.nome_allenamento)
            console.log("lunghezza");
            console.log(allenamentoDict.length);
            for (var j=0; j<allenamentoDict.length;j++){
                
                console.log("single");
                console.log(allenamentoDict[j]);

                this.list.push(allenamentoDict[j]);
            }

            // for (let value of allenamentoDict ){
                
            //     console.log(value);

            //      this.list.push(value);
            //      console.log("VALUE");
            //      console.log(value);

            // }
            

            console.log(this.list)

            
        
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    },

    fetchAllenamenti() {

        const path = "http://localhost:4000/lista-esercizi-allenamento/" + this.$route.params.id + "/" + this.$route.params.scheda_id;
      console.log(path);
      axios
        .get(path)
        .then(res => {

          var allenamentoDict = res.data;

            // console.log("ALLEDICT");
            // console.log(allenamentoDict);
          //console.log(this.listaAllenamenti.nome_allenamento)
            console.log("lunghezza");
            console.log(allenamentoDict.length);
            for (var j=0; j<allenamentoDict.length;j++){
                
                console.log("single");
                console.log(allenamentoDict[j]);

                this.allenamenti_circuito.push(allenamentoDict[j]);
            }

            // for (let value of allenamentoDict ){
                
            //     console.log(value);

            //      this.list.push(value);
            //      console.log("VALUE");
            //      console.log(value);

            // }
            

            console.log(this.list)

            
        
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });

    },

    
    
    fetchDefaticamento() {

const path = "http://localhost:4000/lista-esercizi-defaticamento/" + this.$route.params.id + "/" + this.$route.params.scheda_id;
      console.log(path);
      axios
        .get(path)
        .then(res => {

          var allenamentoDict = res.data;

            // console.log("ALLEDICT");
            // console.log(allenamentoDict);
          //console.log(this.listaAllenamenti.nome_allenamento)
            console.log("lunghezza");
            console.log(allenamentoDict.length);
            for (var j=0; j<allenamentoDict.length;j++){
                
                console.log("single");
                console.log(allenamentoDict[j]);

                this.defaticamento.push(allenamentoDict[j]);
            }

            // for (let value of allenamentoDict ){
                
            //     console.log(value);

            //      this.list.push(value);
            //      console.log("VALUE");
            //      console.log(value);

            // }
            

            console.log(this.list)

            
        
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });



    }
  },

  //   beforeCreate() {
  //     //verifica se la data e stata inserita correttamente altrimenti ritorna alla pagina scheda

  //     if (this.$route.params.form.fineScheda == "undefined" || this.$route.params.form.programmazioneScheda == "undefined" || this.$route.params.form.tipoCarico == "undefined") {
  //       this.$router.push({ name: "newScheda" });
  //     } else {
  //       if (this.$route.params.form.fineScheda === null ) {
  //         //redirect
  //         console.log("NULL");
  //         this.$router.push({ name: "newScheda", params: { errors: true } });
  //         return;
  //       }

  //       var now = moment().format("YYYY-MM-DD");

  //       if (this.$route.params.form.fineScheda <= now) {
  //         console.log("data minore");

  //         this.$router.push({ name: "newScheda", params: { dateError: true } });
  //         return;
  //       }

  //       //Se la data e corretta creo array con tutti esercizi presi dal database
  //     }
  //   },

  mounted() {
      
  
    //prendo gli allenamenti dal database
    //this.getAllenamentiList();
    //carico i form

    this.fetchRiscaldamento();
    this.fetchDefaticamento();
    this.fetchAllenamenti();
  },

  //   mounted() {
  //     console.log("Mounted");

  //     if (localStorage.getItem("formRiscaldamento") !== null) {
  //       this.list = JSON.parse(localStorage.getItem("formRiscaldamento"));
  //     }

  //     if (localStorage.getItem("formAllenamento") !== null) {
  //       this.allenamenti_circuito = JSON.parse(
  //         localStorage.getItem("formAllenamento")
  //       );
  //     }

  //     if (localStorage.getItem("formDefaticamento") !== null) {
  //       this.defaticamento = JSON.parse(
  //         localStorage.getItem("formDefaticamento")
  //       );
  //     }
  //   },
  //   beforeRouteLeave(to, from, next) {
  //     // const answer = window.confirm('Do you really want to leave? you have unsaved changes!')

  //     // if (answer) {
  //     //   next()
  //     // } else {
  //     //   next(false)
  //     // }

  //     //salvo i dati nel local storage prima di lasciare la pagina
  //     localStorage.setItem("formRiscaldamento", JSON.stringify(this.list));
  //     localStorage.setItem(
  //       "formAllenamento",
  //       JSON.stringify(this.allenamenti_circuito)
  //     );
  //     localStorage.setItem(
  //       "formDefaticamento",
  //       JSON.stringify(this.defaticamento)
  //     );
  //     next();
  //   },

  components: {
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
  margin-top: 0.2em;
}

h2,
h3 {
  display: inline-block;
}
/*
Se non visualizzo tutta la scheda devo aumentare la height 
*/
.html2canvas-container {
  width: auto !important;
  height: auto !important;
}
</style>