import React, {Component} from 'react';
import ProductService from '../../services/Product/ProductService';
import {ProductCard} from 'react-ui-cards';

class ProductList extends Component
{
    constructor(props){
        super(props);

        this.productService = new ProductService();

        this.state = {
            products: null
        }
    }

    componentDidMount(){
        this.productService.getProducts().then(
            (productList) => { this.setState({products: productList}) },
            () => { this.setState({products: null}) }
        );
    }

    render(){
        if (!Array.isArray(this.state.products)){
            return (<div><h2>Please check your connection.</h2></div>);
        }
        else{
            if(this.state.products === []){
                return (<div><h1>No products available.</h1></div>);
            }
            else {
                return (
                    <div>
                        {
                            this.state.products.map(product => {
                                return(
                                    <div key={product.id}>
                                        <ProductCard
                                        photos={[
                                            product.images[0].src
                                        ]}
                                        price={product.variants[0].price + ' EUR'}
                                        productName={product.title}
                                        />
                                    </div>

                                );
                            })
                        }
                    </div>
                );
            }
        }
    }
}

export default ProductList;


