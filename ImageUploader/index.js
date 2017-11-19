import { h, render, Component } from 'preact';
import React from 'preact-compat';
import Dropzone from 'react-dropzone';
import request from '../../../utils/request';

var browserImageSize = require('browser-image-size')

var s = require('./style.scss');



export default class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {loading:false,imagePreviewUrl: '',closePreview:false};
  }


  onDrop(acceptedFiles, rejectedFiles){
    var _this = this;
    if(acceptedFiles.length > 0) {
      this.setState({loading:true})
      browserImageSize(acceptedFiles[0]['preview']).then(dimension=>{
        if(dimension.height < 100 || dimension.width < 100){
          this.setState({loading:false})
          console.log('Minimum width and height are 200 px')
          return alert('Minimum width and height are 200 px');
        }

        var data = new FormData()
        data.append('file', acceptedFiles[0])
        request(serverApi+'/pictures',{method:'post',body:data})
        .then(r=>{
          if(!r){
            alert('Image upload not successful')
            this.setState({loading:false})
          }

          this.setState({
            imagePreviewUrl: r.pic_url,
            loading:false,
            error:null,
          })
        })
        .catch(err=>{
          alert('Image upload not successful', err)
          this.setState({loading:false})
        })
      })

    }

  }

  render() {
    let {imagePreviewUrl,closePreview,loading} = this.state;
    let $imagePreview = null;
    if(loading)
    {
      render(
        <div>
          Uploading
          <Loading small={true}/>
        </div>
          ,document.getElementById('ImgPreview')
      )
    }

    if(closePreview)
    {
      document.getElementById("PreviewImg").innerHTML = '';
      this.setState({
        loading: false,
        imagePreviewUrl: '',
        closePreview:false
      });
    }
    if (imagePreviewUrl && !closePreview ) {
      this.setState({loading:false})
      render(
        <div class="previewContainer"  class="columns">
        <img  src={imagePreviewUrl} />
        <div class="close"  class="column">
        <span onClick={()=>this.setState({closePreview:true})} class="typcn typcn-delete">
        </span>
        </div>

        </div>
        ,document.getElementById('ImgPreview'));
    }

    return (


     <Dropzone
     multiple={false}
     className="dropZone"
     activeClassName="active"
     rejectClassName="reject"
     accept="image/png,image/jpeg"
     onDrop={this.onDrop.bind(this)}
        />




   )
  }
}
