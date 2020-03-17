import Home from './component/Home.vue'
import User from './component/user/User.vue'
import ListUser from './component/user/ListUser.vue'
import NewUser from './component/user/NewUser.vue'
import UserProfile from './component/user/UserProfile.vue'
import NewAllenamento from './component/scheda/NewAllenamento.vue'
import NewScheda from './component/scheda/NewScheda.vue'

export const routes=[

    {path:"",component:Home},
    {path:"/user",component:User,children:[
        {path:"/user/",component:ListUser},
        {path:"/user/:id",component:UserProfile,name:"userProfile"},
        {path:"/user/:id/crea-allenamento",component:NewAllenamento,name:"newAllenamento"},
        {path:"/user/:id/crea-scheda",component:NewScheda,props:true,name:"newScheda"},

    ]},
    {path:"/new",component:NewUser}

]