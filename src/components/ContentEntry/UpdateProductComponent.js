import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

var UpdateProductComponent = React.createClass({
    getInitialState: function () {
        return {
            categories: [],
            selectedCategoryId: 0,
            id: 0,
            name: '',
            description: '',
            price: 0,
            successUpdate: null,
            link: '',
            photo: '',
            yt_link: ''
        };
    },
    componentDidMount: function () {
        this.serverRequestCat = $.get("api/read_all_categories.php", function (categories) {
            this.setState({
                categories: JSON.parse(categories)
            });
        }.bind(this));

        var productId = localStorage.getItem("productId");
        this.serverRequestProd = $.post("api/read_one_product.php",
            {prod_id: productId},
            function (product) {
                var p = JSON.parse(product)[0];
                this.setState({selectedCategoryId: p.category_id});
                this.setState({id: p.id});
                this.setState({name: p.name});
                this.setState({description: p.description});
                this.setState({price: p.price});
                this.setState({link: p.link});
                this.setState({photo: p.photo});
                this.setState({yt_link: p.yt_link});
            }.bind(this));

        $('.page-header h1').text('Update product');
    },
    componentWillUnmount: function () {
        this.serverRequestCat.abort();
        this.serverRequestProd.abort();
    },
    // handle category change
    onCategoryChange: function (e) {
        this.setState({selectedCategoryId: e.target.value});
    },

// handle name change
    onNameChange: function (e) {
        this.setState({name: e.target.value});
    },

// handle description change
    onDescriptionChange: function (e) {
        this.setState({description: e.target.value});
    },

// handle price change
    onPriceChange: function (e) {
        this.setState({price: e.target.value});
    },

    onLinkChange: function (e) {
        this.setState({link: e.target.value});
    },

    onPhotoChange: function (e) {
        this.setState({photo: e.target.value});
    },

    onYTChange: function (e) {
        this.setState({yt_link: e.target.value});
    },
    onSave: function (e) {
        $.post("api/update_product.php", {
                id: this.state.id,
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
                category_id: this.state.selectedCategoryId,
                link: this.state.link,
                photo: this.state.photo,
                yt_link: this.state.yt_link,
            },
            function (res) {
                this.setState({successUpdate: res});
            }.bind(this)
        );
        e.preventDefault();
    },
    render: function () {
        var categoriesOptions = this.state.categories.map(function (category) {
            return (
                <option key={category.id} value={category.id}>{category.name}</option>
            );
        });

        return (
            <div>
                {
                    this.state.successUpdate == "true" ?
                        <div className='alert alert-success'>
                            Articolul a fost updatat.Te rugam sa reincarci pagina ca sa vezi rezultatele.
                        </div>
                        : null
                }

                {
                    this.state.successUpdate == "false" ?
                        <div className='alert alert-danger'>
                            Articolul nu a putut fi updatat. Te rugam sa incerci din nou.
                        </div>
                        : null
                }
                <Link to="/content.php"
                      className="btn btn-primary margin-bottom-1em"
                      onClick={() => this.props.changeAppMode('readOne', this.props.productId)}
                >
                    Reincarca pagina
                </Link>

                <form onSubmit={this.onSave}>
                    <table className='table'>
                        <tbody>
                        <tr>
                            <td>Nume</td>
                            <td>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={this.state.name}
                                    required
                                    onChange={this.onNameChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Descriere</td>
                            <td>
                            <textarea
                                type='text'
                                className='form-control'
                                required
                                value={this.state.description}
                                onChange={this.onDescriptionChange}></textarea>
                            </td>
                        </tr>

                        <tr>
                            <td>Pret</td>
                            <td>
                                <input
                                    type='number'
                                    step="0.01"
                                    className='form-control'
                                    value={this.state.price}
                                    required
                                    onChange={this.onPriceChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Genul</td>
                            <td>
                                <select
                                    onChange={this.onCategoryChange}
                                    className='form-control'
                                    value={this.state.selectedCategoryId}>
                                    <option value="-1">Select category...</option>
                                    {categoriesOptions}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Demo link</td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.link}
                                    required
                                    onChange={this.onLinkChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Poza de coperta</td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.photo}
                                    required
                                    onChange={this.onPhotoChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Link spre trailer Youtube</td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.yt_link}
                                    onChange={this.onYTChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>
                                <Link to="/content.php"
                                      className='btn btn-primary'
                                      onClick={this.onSave}>Salveaza
                                </Link>
                                <Link to="/content.php"
                                      className="btn btn-danger"
                                      onClick={() => this.props.changeAppMode('readOne', this.props.productId)}
                                >
                                    Anuleaza
                                </Link>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
});

export default UpdateProductComponent