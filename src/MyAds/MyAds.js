import React from 'react';
import './MyAds.css';
import axios from 'axios';
import { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';

class MyAds extends Component {
    constructor() {
        super();
    }
    state = {
        data: []
    }
    loadData = async (e) => {
        console.log("Test");
        axios.get("http://18.219.17.99:3000/ads?filter[where][ownerId]=" + localStorage.getItem("userId")
        ).then((response) => {
            this.setState({ data: response.data })
            console.log(this.state.data);

        });

    }

    componentDidMount() {
        if (localStorage.getItem('userId')) {
            this.loadData()
        }else{
            this.setState({ redirect: "/login" });
        }

    }
    renderData = () => {
        return this.state.data.map((item) => {
            const { id, item_name, item_description } = item //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{item_name}</td>
                    <td>{item_description}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="MyAds">
                
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

export default MyAds;