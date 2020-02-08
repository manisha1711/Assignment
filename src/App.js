import React ,{Component} from 'react';
import './App.css';
import Card from './Components/Card'

class App extends Component {
  state = {  
    list:[{
      "name": "Sports",
      "image_url": "http://lorempixel.com/400/200/sports/"
      }, {
      "name": "Abstract",
      "image_url": "http://lorempixel.com/800/200/abstract/"
      }, {
      "name": "Animals",
      "image_url": "http://lorempixel.com/200/900/animals/"
      }, {
      "name": "Business",
      "image_url": "http://lorempixel.com/400/200/business/"
      }, {
      "name": "Cats",
      "image_url": "http://lorempixel.com/8000/200/cats/"
      }, {
      "name": "Nightlife",
      "image_url": "http://lorempixel.com/400/600/nightlife/"
      }, {
      "name": "Fashion",
      "image_url": "http://lorempixel.com/400/400/fashion/"
      }, {
      "name": "Food",
      "image_url": "http://lorempixel.com/400/500/food/"
      }, {
      "name": "Nature",
      "image_url": "http://lorempixel.com/400/1000/nature/"
      }, {
      "name": "People",
      "image_url": "http: //lorempixel.com/400/1000/people/"
      }],
      editImageUrl:'',
      newImage:false,
      newImageUrl:'',
      editImageIndex:''
  }
  removeImage = (index) => {
    var currentList = [...this.state.list];
    currentList.splice(index, 1);
    this.setState({list: currentList});
  }
  editImage = (index) => {

    this.setState({editImageUrl: this.state.list[index].image_url,
      newImage:false,
      editImageIndex:index
    });
  }
  fileInput = (e) =>{
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        newImage:true,
        newImageUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  saveImage = () => {
    var currentList = [...this.state.list];
    currentList[this.state.editImageIndex].image_url = this.state.newImageUrl;
    this.setState({list: currentList});
  }
  render(){
    const {list} = this.state;
    return (
      <div className="App">
        <h1>Fynd Assignment</h1>
        <div className="row col-md-12">
          {list && list.map((item,index) =>
            <Card item={item} key={index} index={index} onDeleteClick={this.removeImage} onEditClick={this.editImage}></Card>
          )}
        </div>
        <div className="modal fade" id="imageModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Edit Image</h4>
                    </div>
                    <div className="modal-body clearfix">
                        <div className="col-md-6">
                            <div className="marginB20">Original Image</div>
                            <img src={this.state.editImageUrl} alt=""/>
                        </div>
                        <div className="col-md-6">
                            <div className="marginB20">New Image</div>
                            <img  src="http://via.placeholder.com/150" alt="No img" className={this.state.newImage?"hide":''}/>
                            <img src={this.state.newImageUrl} className={!this.state.newImage?"hide":''} alt='New img'/>
                             <form className="marginTB15"> 
                             <input className="choose-file" type="file" onChange={(e)=>this.fileInput(e)} />  
                             </form>
                             <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.saveImage}>confirm Image</button>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
      </div>
    );
  } 
}

export default App;
