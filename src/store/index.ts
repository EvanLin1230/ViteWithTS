import { defineStore } from "pinia";

export const firstStore = defineStore('firstStore', {
    // state() {
        
    // },
    state: (()=> ({
        hello: '',
    })),
    actions: {
        // 現在 actions 中的第一個參數不是 state，而是 this
        // TODO: 需要另外寫一個模擬的api
        async loadUser (id: number) {
            // if (this.userId !== null) throw new Error('Already logged in')
            // const res = await api.user.load(id)
            const res = {hello: id};
            this.updateUser(res)
        },
        // mutation 现在可以成为 action 了，不再用 `state` 作为第一个参数，而是用 `this`。
        updateUser(payload: any){
            this.hello = payload['hello'];
        },
        clearStore(){
            this.$reset(); // 使用 $reset 可以輕鬆清掉state中的資料
        }
    }
})