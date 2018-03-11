import React , {Component} from 'react';
import ReactDom from 'react-dom';
import Person from '../component/index';
import css from '../css/style.css';


const ele=document.getElementById("root");


 ReactDom.render(<Person name="React is Beatiful"/>,ele);

