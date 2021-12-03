
import axios from 'axios'

export const MixinsUsers = {
    methods: {
        getDataUser: async function() {
            let dta = await axios.get('http://demo2725834.mockable.io/api/v1/list');
            this.$store.commit('get_success', dta.data.data)
            return dta.data.data
        },
    }
  }
  