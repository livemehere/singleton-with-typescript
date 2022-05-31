class AxiosManager{
    private static instance:AxiosManager;
    public time:Date | undefined;
    public count;

    private constructor() {
        this.count = 0;
    }

    static getInstance(){
        if(!AxiosManager.instance){
            AxiosManager.instance = new AxiosManager();
        }
        return AxiosManager.instance;
    }
    addCount(){
        this.count++;
    }
}

export default AxiosManager.getInstance();