import React, {Component} from 'react';
import { Tr, Td } from 'react-responsive-list';
import './ProductListItem.css';

class ProductList extends Component
{
    render(){
        return (
            <Tr>
                <Td>
                    <div><img src={this.props.product.image.src}/></div>
                </Td>
                <Td>
                    <h4>{this.props.product.title}</h4>
                    <h1>{this.props.product.variants[0].price + ' EUR'}</h1>
                    <div><p>{this.props.product.body_html.replace(/<\/?[^>]+(>|$)/g, "")}</p></div>
                </Td>
            </Tr>
        );
    }
}

export default ProductList;