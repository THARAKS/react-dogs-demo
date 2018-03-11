import React, {Component} from 'react';
import { USER as user } from '../const/const';

function formatName(user) {
    let myName="thara"
    console.log("hello"+myName);
    return `${user.firstName} ${user.lastName}`;
  }
  
const Element = () => (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  
  
  export default Element;