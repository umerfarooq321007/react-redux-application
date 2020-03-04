import React from 'react';
import './Ads.css';
import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { LOADDATA } from '../constants/actionTypes';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ ...state.item });


const mapDispatchToProps = dispatch => ({

    onLoad: (data) => {
        dispatch({ type: LOADDATA, payload: data })
    }


});

class Ads extends Component {
    constructor() {
        super();
    }
    
    loadData = async (e) => {
        console.log("Test");
        const response = axios.get("http://18.219.17.99:3000/ads?filter[offset]=0&filter[limit]=100&filter[skip]=0"
        ).then((response) => {
            this.setState({ data: response.data })
            this.props.onLoad(response.data)
            console.log(this.state.data);

        });

    }
    viewDetails = (id) => {
        console.log(id);
    }

    componentDidMount() {
        this.loadData()
    }
    renderData = () => {
        console.log(this.props)
        return this.props.items.map((item) => {
            const { id, item_name, item_description } = item //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{item_name}</td>
                    <td>{item_description}</td>
                    <td><Link to={{ pathname: '/item-details/' + id }}>
                        Details
                    </Link>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="Ads">
                <table id="customers">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ads);