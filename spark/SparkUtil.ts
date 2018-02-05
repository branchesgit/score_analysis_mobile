export default class SparkUtil {
    private constructor() { }

    static instance: SparkUtil;
    static getInstance(): SparkUtil {
        if (!SparkUtil.instance) {
            SparkUtil.instance = new SparkUtil();
        }

        return SparkUtil.instance;
    }
}
