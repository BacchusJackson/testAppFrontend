import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class Content extends Component {
    backendUrl;
    constructor(props) {
        super(props);
        this.state = {date: new Date(), posts: ["Start"], response: ""};

        this.backendUrl = process.env.REACT_APP_BACKEND_API + "/test";
    }

    async sendRequest() {
        console.log(this.backendUrl);

        try {
            const res = await axios.get(this.backendUrl);
            console.log(res.data);
            this.setState({response: res.data.message});
        } catch (err) {
            console.log(err);
            this.setState({response: "Request failed... check log."});
            return null;
        }



    }

    render() {
        return (
            <div>
                <button onClick={() => this.sendRequest()}>Send Request</button>
                <p>{this.state.response}</p>
            </div>
        )
    }
}

const mainApp = (
    <div className="App">
        <h1>This is the Frontend App</h1>
        <p>The app will send GET requests to the Backend App.</p>
        <h2>Responses</h2>
        <Content />
    </div>
);
ReactDOM.render(mainApp, document.getElementById('root'));
