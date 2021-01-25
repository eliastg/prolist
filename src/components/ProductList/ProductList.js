import React, {Component} from 'react';
import ProductService from '../../services/Product/ProductService';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-responsive-list';
import 'react-responsive-list/assets/index.css';
import ProductListItem from '../ProductListItem/ProductListItem';
import Loader from 'react-loader-spinner';

class ProductList extends Component
{
    constructor(props){
        super(props);

        this.productService = new ProductService();

        this.state = {
            products: null,
            loading: true
        }
    }

    responseError = () => {
        return !Array.isArray(this.state.products)
    }

    componentDidMount(){
        this.productService.getProducts().then(
            (productList) => { this.setState({products: productList, loading: false}) },
            () => { this.setState({products: null, loading: false}) }
        );
    }

    render(){
        if(this.state.loading){
            return (<div><Loader type="Oval" color="#000000" height={100} width={100} /></div>);
        }
        else if (this.responseError()){
            return (<div><h2>An error occurred. Please check your connection.</h2></div>);
        }
        else{
            if(this.state.products.length === 0){
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


