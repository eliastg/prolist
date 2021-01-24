import config from "./config.json";

class Configuration{;
    static API_ENDPOINT_BASE = `${config.CORS_PROXY}https://${config.API_ENDPOINT_BASE}`;
    static STORE_URL = config.STORE_URL;
    static headers = {
        headers: {
            "X-Shopify-Access-Token": config.API_SECRET,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    };
}

export default Configuration;