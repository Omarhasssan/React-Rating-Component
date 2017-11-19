import React from 'preact-compat';
import { h, render, Component } from 'preact';
import request from '../../../utils/request';
import helpers from '../../../utils/helpers';
import {countries, languages} from '../../../config/Constants'
import empty from "is-empty"
import Rating from '../index'
import {Star} from '../index'
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

var s = require('./style.scss');


export default class Reviews extends Component {
	constructor(props){
		super(props)
    this.state = {RvsModel:false,clickedElement:''}
	}

	render() {
    const {RvsModel,clickedElement} = this.state;
      var _this = this;
			if(!RvsModel)
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

		let stars = [0,1,2,3,4];
		let selectedStars = 2;
    return(
      <div >
        <p onClick = {()=>this.setState({RvsModel:true})}>70 reviews</p>
        {RvsModel?
          <div tabIndex="0" onFocus={ ()=>this.setState({RvsModel:false}) }   class = "model">
            <div 			tabIndex="0" onCLick={ ()=>  this.setState({RvsModel:true})} id = "RvsModel">
                <div class="column">
                    <div  id="imgg">

                    </div>
                    <div style="display:flex;" class="column is-7"  >
                        <p id="name"  >omar hassan

                        </p>

                        <p id="date"  >3 <FormattedMessage id="RatingCmnt.monthes ago" /></p>
                    </div>
								<div  class = "columns container">
                  <div  class="column is-5 rvStars">
									{stars.map(x=><Star   colored = {x <=selectedStars ? true : false } />)}
									</div>
												<div class = "column is-9"  id="tags">
												<p>Transparent and consistent prices,</p>
												<p>Transparent and consistent prices,</p>
													<p>Easy Return</p>
												</div>
										</div>

							<div class="comment" class="columns">
							<p  >loLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </p>
							</div>
							<div class="border" ></div>

                </div>


								<div class="column">
										<div  id="imgg">

										</div>
										<div style="display:flex;" class="column is-7"  id="name">
												<p style="  font-weight: bold;">omar hassan

												</p>

												<p style="margin-left: 1rem;">3 monthes ago</p>
										</div>
							<div style = "    margin-top: -1rem;  margin-right: 5rem;" class = "columns">
									<div style=" margin-right: -1rem;" class="column is-5">
									{stars.map(x=><Star   colored = {x <=selectedStars ? true : false } />)}
									</div>
												<div class = "column is-9"  id="tags">
													<p>Transparent and consistent prices,</p>
													<p>Easy Return</p>
												</div>
							</div>

							<div class="columns">
							<p style="text-align: left;margin-left: 5rem;">
									nice , great work
							</p>
							</div>
							<div style="border: 1px solid whitesmoke;width: 71%;  margin-left: 6rem;margin-top: 1rem;"></div>

								</div>
								<div class="column">
										<div  id="imgg">

										</div>
										<div style="display:flex;" class="column is-7"  id="name">
												<p style="  font-weight: bold;">omar hassan

												</p>

												<p style="margin-left: 1rem;">3 monthes ago</p>
										</div>
<div style = "    margin-top: -1rem;  margin-right: 5rem;" class = "columns">
									<div style=" margin-right: -1rem;" class="column is-5">
									{stars.map(x=><Star   colored = {x <1 ? true : false } />)}
									</div>
												<div class = "column is-9"  id="tags">
													<p>Easy Return</p>
												</div>
</div>

							<div class="columns">
							<p style="text-align: left;margin-left: 5rem;">loLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </p>
							</div>
							<div style="border: 1px solid whitesmoke;width: 71%;  margin-left: 6rem;margin-top: 1rem;"></div>

								</div>







            </div>
          </div>
          :null}
      </div>
    )





	}
}
