import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

var CreateProductComponent = React.createClass({
    getInitialState: function () {
        return {
            categories: [],
            selectedCategoryId: -1,
            name: '',
            description: '',
            price: 0,
            successCreation: null,
            link: '#',
            photo: '',
            yt_link: '#',
        };
    },
    componentDidMount: function () {
        this.serverRequest = $.get("api/read_all_categories.php", function (categories) {
            this.setState({
                categories: JSON.parse(categories)
            });
        }.bind(this));

        $('.page-header h1').text('Create product');
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
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
        this.setState({yt_link: e.target.value})
    },

    onSave: function (e) {
        $.post("api/create_product.php", {
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
                category_id: this.state.selectedCategoryId,
                link: this.state.link,
                photo: this.state.photo,
                yt_link: this.state.yt_link,
            },
        );
        e.preventDefault();
    },
    render: function () {

        // make categories as option for the select tag.
        var categoriesOptions = this.state.categories.map(function (category) {
            return (
                <option key={category.id} value={category.id}>{category.name}</option>
            );
        });

        /*
         - tell the user if a product was created
         - tell the user if unable to create product
         - button to go back to products list
         - form to create a product
         */
        return (
            <div>
                {

                    this.state.successCreation == "true" ?
                        <div className='alert alert-success'>
                            Article has been saved. Please reload the page in order to view the changes.
                        </div>
                        : null
                }

                {

                    this.state.successCreation == "false" ?
                        <div className='alert alert-danger'>
                            Article cannot be saved. Please try again.
                        </div>
                        : null
                }
                <Link to="/content.php"
                      className="btn btn-primary margin-bottom-1em"
                      onClick={() => this.props.changeAppMode('readOne', this.props.productId)}
                >
                    Reload page
                </Link>


                <form onSubmit={this.onSave}>
                    <table className='table'>
                        <tbody>
                        <tr>
                            <td>Name</td>
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
                            <td>Description</td>
                            <td>
                        <textarea
                            type='text'
                            className='form-control'
                            required
                            cols="25"
                            rows="10"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}>
                        </textarea>
                            </td>
                        </tr>

                        <tr>
                            <td>Type</td>
                            <td>
                                <select
                                    onChange={this.onCategoryChange}
                                    className='form-control'
                                    value={this.state.selectedCategoryId}>
                                    <option value="-1">Selecteaza genul articolului...</option>
                                    {categoriesOptions}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Picture</td>
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
                            <td></td>
                            <td>
                                <Link to="/content.php"
                                      className='btn btn-primary'
                                      onClick={this.onSave}>Save
                                </Link>
                                <Link to="/content.php"
                                      className="btn btn-danger"
                                      onClick={() => this.props.changeAppMode('readOne', this.props.productId)}
                                >
                                    Cancel
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

export default CreateProductComponent