import { instance } from './api'


export const authApi = {
    getChat() {
        return instance.get("/chat.get");
    },

};