import axios from "axios"

const streamingBackendApi = {
    createStreamingConnection: async ({ nickname, avatarSeed }) => {
        const urlBase = 'http://localhost:8080'

        const url = `${urlBase}/streaming-connections?nickname=${nickname}&avatar=${avatarSeed}`
        return new EventSource(url)    
    },

    getDacebearSeed: async () => {
        const urlBase = 'http://localhost:8080'
        const url = `${urlBase}/dicebear-seed`
        const response = await axios.get(url)
        
        return response.data
    }
}


export default streamingBackendApi