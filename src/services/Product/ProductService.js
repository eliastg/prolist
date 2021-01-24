import axios from 'axios';
import Configuration from '../../config/Configuration';

class ProductService{
    PRODUCT_LIST_ENDPOINT = `${Configuration.API_ENDPOINT_BASE}products.json`;

    handleResponse = (response) => {
        console.log(`[ProductService.handleResponse] response: ${response}`);
        return response;
    }

    getProducts(){
        console.log(`[ProductService] PRODUCT_LIST_ENDPOINT: ${this.PRODUCT_LIST_ENDPOINT}`);
        return axios.get(this.PRODUCT_LIST_ENDPOINT).then(
            response => {this.handleResponse(response)}, 
            error => {return null}
        );
    }
}

export default ProductService;