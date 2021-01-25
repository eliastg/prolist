import React, { Component } from 'react';
import { Tr, Td } from 'react-responsive-list';
import Configuration from '../../config/Configuration';
import './ProductListItem.css';

class ProductList extends Component {
    render() {
        return (
            <Tr>
                <Td>
                    <div><img alt="Product" src={this.props.product.image.src} /></div>
                </Td>
                <Td>
                    <a rel="noreferrer" target="_blank" href={`${Configuration.STORE_URL}/products/${this.props.product.handle}`}>
                        <h3>{this.props.product.title}</h3>
                    </a>
                    <h1>{this.props.product.variants[0].price + ' EUR'}</h1>
                    <div><p>{this.props.product.body_html.replace(/<\/?[^>]+(>|$)/g, "")}</p></div>
                </Td>
            </Tr>
        );
    }
}

export default ProductList;