import axios from "axios"

const DicebearApi = {
    getAvatarBySeed: async (seed) => {
        const urlBase = 'https://api.dicebear.com/9.x/adventurer/svg'
        const url = `${urlBase}?seed=${seed}`
        const response = await axios.get(url)

        return response.data
    }
}


export default DicebearApi