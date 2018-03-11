import React,{Component} from 'react'
import Element from './formatName1'
import Timer from './timer'
import Clock from './clock'
import Toggle from './toggle'
//import LoggingButton from './loggingbutton'
import TextareaComponent from './textarea'

class Person extends Component
{
constructor(props)
{
    super(props)
   // this.props=props;
}

render()
{
    return(
        <div>
        <h1> Hello thara welcome to React js </h1>
        <div className="comp1">
        <h4 >Prop component</h4>
        <h2>{this.props.name} </h2>
        </div>
        <div className="comp1">
        <h4 >Elemen component</h4>
        <Element />
        </div>
        <div className="comp1">
        <h4 >Timer component</h4>
        <Timer />
        </div>
       
        <div className="comp1">
        <h4 >Clock component</h4>
         <Clock />
         </div>
         <div className="comp1">
        <h4 >TextArea component</h4>
         <TextareaComponent />
        </div>
<div className="comp1">
<h4 >Button Events component</h4>
        <Toggle />
        </div>
        </div>
       
    )
}
}
export default Person;