import React from 'react';
import './Ad.css';
import axios from 'axios';
import { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
class Ads extends Component {
    constructor() {
        super();
    }
    state = {
        data: []
    }
    loadData = async (itemId) => {
        console.log("Test");
        axios.get("http://18.219.17.99:3000/ads?filter[include][0][relation]=pictures&filter[include][1][relation]=owner&filter[where][id]=" +
            itemId
        ).then((response) => {
            this.setState({ data: response.data })
            console.log(response.data);

        });

    }

    componentDidMount() {
        const { match: { params } } = this.props;

        console.log(params.id)
        this.loadData(params.id)
    }
    renderData = () => {
        return this.state.data.map((item) => {
            const { id, item_name, item_description } = item //destructuring
            return (
                <div key={id}>
                    <h1>{id}</h1>
                    <h1>{item_name}</h1>
                    <p>{item_description}</p>

                </div>

            )
        })
    }

    renderImages = () => {
        if (this.state.data.length > 0) {
            let images = []
            const pictures = this.state.data[0].pictures;
            if (pictures) {
                
                pictures.forEach(o => {
                    images.push({
                        url: "http://18.219.17.99:3000/" + o.location
                    })

                });
            }

            
            return <div className="images">
                
                <SimpleImageSlider 
                    width={300}
                    height={450}
                    images={images}
                />
            </div>
            // return pictures.map((item) => {
            //     const { id, location } = item
            //     return (
            //         <div key={id}>
            //             <img
            //                 src={`http://18.219.17.99:3000/${location}`}

            //                 alt="Image Not Found"
            //             />

            //         </div>

            //     )
            // })
        }

    }

    render() {
        return (
            <div>
                <div className="Ads">
                    {this.renderData()}
                </div>

                <div className="Ads">
                    {this.renderImages()}

                </div>
            </div>



        );

    }
}

export default Ads;