import React , {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {fetchPost} from "../actions/postAction"

 class Posts extends Component{

  componentWillMount(){
    this.props.fetchPost()
  }
  componentWillReceiveProps(nextProps){
      if(nextProps.newPost){
        this.props.posts.unshift(nextProps.newPost)
      }
  }
  render(){
    const postsItems = this.props.posts.map(post => (
      <div key = {post.id}>
         <h3>{post.title}</h3>
         <p>{post.body}</p>
      </div> 
    ))
    return(
      <div>Posts
        {postsItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPost : PropTypes.func.isRequired,
  posts : PropTypes.array.isRequired,
  newPost : PropTypes.object

}

const mapStateToProps = state =>({
  posts : state.posts.items,
  newPost : state.posts.item
})
export default connect(mapStateToProps, {fetchPost})(Posts)