import React from 'preact-compat';
import { h, render, Component } from 'preact';
import request from '../../../utils/request';
import helpers from '../../../utils/helpers';
import {countries, languages} from '../../../config/Constants'
import empty from "is-empty"
import Rating from './index'
import {Stars} from './index'
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

var s = require('./style.scss');


export default class Overall extends Component {
	constructor(props){
		super(props)
    this.state = {OvModel:false}
	}


	render() {
    const {OvModel} = this.state;
      var _this = this;
			if(!OvModel)
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


    return(
      <div >
        <p onClick = {()=>this.setState({OvModel:true})}>Over all</p>
        {OvModel?
          <div tabIndex="0" onFocus={ ()=>this.setState({OvModel:false}) } class = "model">
            <div tabIndex="0"onCLick={ ()=>  this.setState({OvModel:true})} id = "OvModel">
                <div id="AvgRat"  class="columns">
                    <div  class = "column is-4">
                    <div id="Avg"><span>4.5</span></div>
                    <div id="AverageRating"  >
                        <span ><FormattedMessage id="Rating.Average Rating" /></span>
                    </div>
                    </div>


                          <div class="column">
                              <div class="columns">
                                    <div   class ="column is-3 nStars "> 5 star</div>
                                    <div class="bar"   >
																				<div class="selectedBar" ></div>
																		</div>
                                    <div    class ="column is-3 percentage">70%</div>
                              </div>
                              <div class="columns">
                                    <div style="    font-size: 10pt;  line-height: 1.3rem;"  class ="column is-3"> 4 star</div>
                                    <div  style="    background-color: whitesmoke;  margin-top: 1rem;  padding-bottom: 0px;  width: 100%;" ><div  style="    background-color: #3d0f62;;width: 60%;height: 12px;"></div></div>
                                    <div  style="    font-size: 10pt;  line-height: 1.3rem;"  class ="column is-3">60%</div>
                              </div>
                              <div class="columns">
                                    <div style="    font-size: 10pt;  line-height: 1.3rem;"  class ="column is-3"> 3 star</div>
                                    <div  style="    background-color: whitesmoke;  margin-top: 1rem;  padding-bottom: 0px;  width: 100%;" ><div  style="    background-color: #3d0f62;;width: 40%;height: 12px;"></div></div>
                                    <div  style="    font-size: 10pt;  line-height: 1.3rem;"  class ="column is-3">40%</div>
                              </div>
                              <div class="columns">
                                    <div style="    font-size: 10pt;  line-height: 1.3rem;"  class ="column is-3"> 2 star</div>
                                    <div  style="    background-color: whitesmoke;  margin-top: 1rem;  padding-bottom: 0px;  width: 100%;" ><div  style="    background-color: #3d0f62;;width: 50%;height: 12px;"></div></div>
                                    <div  style="    font-size: 10pt;  line-height: 1.3rem;"  class ="column is-3">50%</div>
                              </div>
                              <div class="columns">
                                    <div style="    font-size: 10pt;  line-height: 1.3rem;"  class ="column is-3"> 1 star</div>
                                    <div  style="    background-color: whitesmoke;  margin-top: 1rem;  padding-bottom: 0px;  width: 100%;" ><div  style="    background-color: #3d0f62;;width: 10%;height: 12px;"></div></div>
                                    <div  style="    font-size: 10pt;  line-height: 1.3rem;"  class ="column is-3">10%</div>
                              </div>
                          </div>

                </div>
            </div>
          </div>
          :null}
      </div>
    )





	}
}
