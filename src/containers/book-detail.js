import React, { Component } from 'React';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book){
            return <div>Select a book to get started.</div>;
        };
        return (
            <div className="ui olive card">
                <div className="content">
                <h3>Details for:</h3>
                <div className="description">
                    <div>Title: { this.props.book.title }</div>
                    <div>Pages: { this.props.book.pages }</div>
                </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);