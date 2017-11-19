import React from 'preact-compat';
import { h, render, Component } from 'preact';
import request from '../../../utils/request';
import helpers from '../../../utils/helpers';
import {countries, languages} from '../../../config/Constants'
import empty from "is-empty"
import Rating from '../index'
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

var s = require('./style.scss');




export default class WriteReview extends Component {
	constructor(props){
		super(props)
    this.state = {clicked:false}
	}


	render() {
    const{clicked} = this.state;
		const{language} = this.props;
    var _this = this;
		if(!clicked)
			{

				document.querySelector("body,html").style.overflow = "auto";
				document.querySelector("body,html").style.height = "scroll";
				document.querySelector("body,html").style.margin = "auto";
			}

			else {

				document.querySelector("body,html").style.overflow = "hidden";
				document.querySelector("body,html").style.height = "100%";
				document.querySelector("body,html").style.margin = "0";

			}


  return (
      <div>

      <a onClick = {()=>this.setState({clicked:true})}  id="rvButton" class="button is-primary">
      <span class="star" >&#9733;</span>
    			<FormattedMessage id="Rating.WriteaReview" /> 
      </a>
    {clicked?<div tabIndex="1" onFocus={ ()=>  this.setState({clicked:false})}  id="overlay">
     <div tabIndex="0" onCLick={ ()=>  this.setState({clicked:true})} id = "model" >
          <div class="shopName column">
							<p>Cairo Sales Stores</p>
					</div>
					<div style="margin-top:-1rem;" class="rating column">
							<Rating target={"comment"} />
					</div>
     </div>

</div>:null}

      </div>
  )
	}
}
