import React from 'preact-compat';
import { h, render, Component } from 'preact';
import request from '../../utils/request';
import helpers from '../../utils/helpers';
import {countries, languages} from '../../config/Constants'
import empty from "is-empty"
import Reviews  from './Reviews'
import Overall from './Overall'
import ImageUploader from './ImageUploader'
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

var s = require('./style.scss');

const Div = styled.div`


`
export class Star extends Component {
	constructor(props){
		super(props)
	}
  render()
  {
    const {key,onMouseOver,hover,onMouseOut,target,clicked,colored,onClick} = this.props;
    if(target == 'comment')
    {

      return(
        <span
					id ="mStar"
          style = {`${(hover) ? 'color:orange' : clicked ? 'color:orange' : null }`}
          onMouseOut = {onMouseOut}
          onMouseOver = {onMouseOver}
					onClick = {onClick}
         >&#9733;</span>
      )
    }
    return(
      <span id ="mStar"   style = {` ${colored ? 'color:orange' : null }`} >&#9733;</span>
    )
  }
}


export class Tag extends Component{
	constructor(props){
		super(props)
    this.state = {clicked:false}
	}
	render()
	{
		const{clicked} = this.state;
		const{name,addTag,removeTag} = this.props;
		return(
				<p
				style = {`${clicked ? 'background:orange' :null}`}
				onClick = {()=>{
					if(!clicked)
						addTag();
					else
						removeTag();
					this.setState({clicked:!clicked})
				}}

				><FormattedMessage id ={`RatingCmnt.${name}`} /></p>
		)
	}
}



export default class Rating extends Component {
	constructor(props){
		super(props)
    this.state = {
			hoverid:-1,
			clickid:-1
			,temp:-1
			,txt:''
			,Rv:{stars:-1,txt:'',tags:[]}
			,tags:""
		}
	}



	render() {
    const {hoverid,clickid,temp,txt,Rv,tag,msg,tags} = this.state;
		const {target,backgroud} = this.props;
		let stars = [0,1,2,3,4];
		let selectedStars = 3;
		if(target == 'comment')
		{
			var tgs = ['Transparent and consistent prices','Easy Return','Great service and support'];
			var input;
			return(<div class="column">
					<div class="columns">
						{stars.map(starIndex=><Star
								target = {"comment"}
			          onMouseOut = {()=>this.setState({hoverid:-1,clickid:temp	})}
			           onMouseOver = {()=>{this.setState({hoverid:starIndex,clickid:-1});}}
			           key={starIndex}
			           hover = {starIndex <= hoverid ? true : false}
								 onClick = {()=>this.setState({clickid:starIndex,temp:starIndex		})}
								 clicked = {starIndex <=clickid ? true : false}
			            />)
							}

					</div>
					<div id="question"   class="columns ">
					<span ><FormattedMessage id="RatingCmnt.How do You find the shop ?" />  </span>
					</div>
					<div class="columns">

					<div class = "column  tags">

					{tgs.map(x=><Tag
						addTag = {()=>{
							if(tags.length > 0)
							{
								var tag = tags;
								tag +=",";
								tag+=x;
								this.setState({tags:tag})
							}
							else this.setState({tags:x})
						}
						}
						removeTag = {()=>{
							if(tags.length > 0)
							{
								var tag = tags.replace(x,'')
								this.setState({tags:tag})
							}
						}}
						name = {x}
						/>
					)}

					</div>
					</div>

					<div style="border:1px solid black;" class="columns">
								<textarea   ref={node => {
						input = node}}  placeholder=" Write Your Comment"  >
								</textarea>
						<div class="column" id="uploadImg">
							<ImageUploader />
						</div>
					</div>
					<div id="ImgPreview" class="columns">

					</div>
					{msg && msg.length > 0?
						<div style="margin-top:1rem;" class=" columns">
								<p style="color:red">{msg}</p>
						</div>
					:null}
					<div style="margin-top:1rem;border-radius:5px;" class="columns">
					<a onClick = {
						()=>
						{
								if(clickid == -1 || (clickid == -1 &&(!input || input.value.length) == 0))
									this.setState({msg:'Please Rate to submit your review	'})
								else if(!input || input.value.length== 0)
									this.setState({msg:'Please Explain Your Rate To Submit Your Review	'})
								else this.setState({msg:'',Rv:{stars:clickid,txt:input.value,tags:tags.split(",")}})

						}
					}
					 style="border-radius: 5px;    background: rgba(50, 2, 90, 0.95); "   class="button is-primary">
					<FormattedMessage id ="RatingCmnt.Post a Review" />
					</a>
					</div>
				</div>


			)

		}





	return(<div class="columns">
		<div class="rating column ">
	{stars.map(x=><Star  colored = {x <=selectedStars ? true : false } />)}


			<div class="reviews ">

			<Reviews  />

			</div>
			<div class="overall ">
				<Overall />
			</div>
		</div>

		</div>
	)


	}
}
