import React from 'react';
import './AddItem.css';
import axios from 'axios';
import { Component } from 'react';
class AddItem extends Component {
    constructor() {
        super();
    }
    state = {
        item: {
            "item_name": "",
            "item_description": "",
            "price": 0
        },
        selectedFile: []
    }

    addItem = async (e) => {
        console.log(this.state.item)
        const response = axios.post(
            'http://18.219.17.99:3000/ads/',
            {
                "item_name": this.state.item.item_name,
                "item_description": this.state.item.item_description,
                "price": parseInt(this.state.item.price)
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                    //other header fields
                }
            }
        ).then((response) => {
            console.log("Add Item Response")
            console.log(response.data);
            this.uploadHandler();

        });
    }

    componentDidMount() {
        
    }

    changeItemName = (ev) => {
        this.setState({
            item: {
                ...this.state.item,
                item_name: ev.target.value
            }
        })
        console.log(this.state);
    }
    changeItemDescription = (ev) => {
        this.setState({
            item: {
                ...this.state.item,
                item_description: ev.target.value
            }
        })
    }
    changeItemPrice = (ev) => {
        this.setState({
            item: {
                ...this.state.item,
                price: ev.target.value
            }
        })
    }
    fileChangedHandler = (event) => {
        this.setState({ selectedFile: event.target.files });
        console.log(event.target.files)
    }
    uploadHandler = () => {
        console.log('Upload Handler');
        console.log(this.state.selectedFile);
        const formData = new FormData();
        formData.append("adId", String(31));
        for (let file of this.state.selectedFile) {
            formData.append("files[]", file);
          }
        axios.post('http://18.219.17.99:3000/ads/upload-ad-image', formData,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            console.log("Image Upload Response")
            console.log(response.data);

        });
      }


    render() {
        return (
            <div className="AddItem">
                <h1>ADD ITEM</h1>
                <form>
                    <fieldset>
                        <fieldset className="form-group">
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Item name"

                                onChange={this.changeItemName} />
                        </fieldset>
                        <fieldset className="form-group">
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Item Description"

                                onChange={this.changeItemDescription} />
                        </fieldset>
                        <fieldset className="form-group">
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Price"

                                onChange={this.changeItemPrice} />
                          
                        </fieldset>
                        <fieldset className="form-group">
                        <input type="file" onChange={this.fileChangedHandler}></input>
                        </fieldset>
                        <button
                            className="btn btn-lg btn-primary pull-xs-right"
                            type="button" onClick={this.addItem}>
                            Add Item
                        </button>
                    </fieldset>
                </form>
            </div>


        );

    }
}

export default AddItem;