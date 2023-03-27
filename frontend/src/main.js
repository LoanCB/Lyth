import { createApp } from 'vue'
import router from "@/router"
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import {api} from "@/services/api"
import {fr} from "vuetify/locale"


const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi'
    },
    locale: {
        locale: 'fr',
        messages: { fr }
    }
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

app.config.globalProperties.$api = api
