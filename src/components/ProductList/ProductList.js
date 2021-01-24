import React, {Component} from 'react';
import ProductService from '../../services/Product/ProductService';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-responsive-list';
import 'react-responsive-list/assets/index.css';
import ProductListItem from '../ProductListItem/ProductListItem';

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
                        <Table breakPoint={700}>
                            <Tbody>
                                {
                                    this.state.products.map((product) => {
                                        return (<ProductListItem product={product} key={product.id}/>);
                                    })
                                }
                            </Tbody>
                            </Table>
                    </div>
                );
            }
        }
    }
}

export default ProductList;


