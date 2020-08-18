import React , {Component} from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {createPost} from "../actions/postAction"
 class PostForm extends Component{

   constructor(props){
     super(props)
     this.state ={
       title :'',
       body : '' 
     }
     this.onChangeHandle = this.onChangeHandle.bind(this)
     this.onSubmit = this.onSubmit.bind(this)
   }


   onChangeHandle(e){
     this.setState({
       [e.target.name] : e.target.value
     })
   }
   onSubmit(e){
     e.preventDefault()
     const post = {
       title : this.state.title,
       body : this.state.body
     }
    this.props.createPost(post)
   } 
  render(){
    return(
      <div>
        <h1>add Post</h1>
        <form onSubmit = {this.onSubmit}>
          <div>
            <label> Title : </label><br />
            <input 
               name = "title" 
               type="text" 
               value = {this.state.title} 
               onChange = {this.onChangeHandle}
               />
          </div>
          <div>
            <label> Body: </label><br />
            <textarea 
              name ="body" 
              value={this.state.body} 
              onChange = {this.onChangeHandle}
              />
          </div><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost : PropTypes.func.isRequired
}
export default connect(null, {createPost})(PostForm)