export default class AppContext {
    private constructor() {
    }

    static _instance: AppContext;

    static getInstance(): AppContext {
        if (!AppContext._instance) {
            AppContext._instance = new AppContext();
        }

        return AppContext._instance;
    }

    store;
    setStore(store) {
        this.store = store;
    }

    getStore() {
        return this.store;
    }

    initContext() {
        console.log("init app context here~");
    }

}