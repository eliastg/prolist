import config from "./config.json";

class Configuration{;
    static API_ENDPOINT_BASE = `https://${config.API_ENDPOINT_BASE}`;
    static headers = {
        headers: {
            "X-Shopify-Access-Token": config.API_SECRET,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    };
}

export default Configuration;