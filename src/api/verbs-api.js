import axios from "axios";


export const verbsAPI = {
    getVerbs: () => {
        return axios.get(`${process.env.PUBLIC_URL}/verbs.json`).then(r => r.data)
    }
}