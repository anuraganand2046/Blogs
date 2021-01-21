import React from 'react';
import UserHeader from './UserHeader';
import {connect} from 'react-redux';
import {fetchPostsAndUser} from '../actions';
class PostList extends React.Component {
    componentDidMount(){
        this.props.fetchPostsAndUser();
    }
    renderList(){
        return this.props.posts.map(p => {
            return (
                <div className= "item" key= {p.id}>
                    <i className= "large middle aligned icon user"></i>
                    <div className= "content">
                        <div className= "description">
                            <h2>{p.title}</h2>
                            <p>{p.body}</p>
                        </div>
                        <UserHeader userId= {p.userId}></UserHeader>
                    </div>
                </div>
            );
        })
    }
    render(){
       return(
           <div className= "ui relaxed divided list">{this.renderList()}</div>
       );
    }
}
const mapStateToProps= (state)=>{
    return {posts: state.posts};
};
export default connect(mapStateToProps, {fetchPostsAndUser} )(PostList);