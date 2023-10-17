import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//vuex store
import store from './store'

// Importing the Vuetify modules
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
    components,
    directives
})

createApp(App)
    .use(store)
    .use(vuetify)
    .mount('#app')
