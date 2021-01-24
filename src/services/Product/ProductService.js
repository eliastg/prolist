import axios from 'axios';
import Configuration from '../../config/Configuration';

class ProductService{
    PRODUCT_LIST_ENDPOINT = `${Configuration.API_ENDPOINT_BASE}products.json`;

    getProducts = () => {
        console.log(`[ProductService] PRODUCT_LIST_ENDPOINT: ${this.PRODUCT_LIST_ENDPOINT}`);
        return axios.get(this.PRODUCT_LIST_ENDPOINT, Configuration.headers).then(
            response => {
                return new Promise(
                    (resolve, reject) => {
                        if(response.data.products && Array.isArray(response.data.products)){
                            resolve(response.data.products);
                        }
                        reject(null);
                    }
                );
            }, 
            error => {return null}
        );
    }
}

export default ProductService;