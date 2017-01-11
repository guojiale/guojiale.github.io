/**
 * Created by h on 2017/1/3.
 */
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import {Message} from "./js/message";
import React from 'react';
import ReactDOM from "react-dom";
ReactDOM.render(
    <Message ></Message>,
    document.getElementById('app')
);
var pic = require('./js/createImg');
document.getElementById('img').appendChild(pic());

