import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({

    //state parola chiave per creare tutti valori che voglio salvare
    state: {

        formUtente: {
            email: 'eric',
            cellulare:"",
            name: '',
            stileVita: null,
            motivoRichiesta:"",
            aiutoServizio:"",
            aspettativaServizio:"",
            numAllenamenti: "",
            oreDisponibili:"",
            allenamentoSvolto:"",
            somatotipo:"",
            allenamentoDesiderato:"",
            infortunio:"",
            malattie:"",
            checked: []
          }
    },
    getters:{

        getFormUtente: state=>{

            return state.formUtente;
        }


    },
    mutations:{

        updateFormUtente:(state,form)=>{

            //valore salvato in vuex = valore deriva dal form con v-model
            state.form=form

            localStorage.setItem('utenteData',      
            JSON.stringify(state.form));
        }
    }

})