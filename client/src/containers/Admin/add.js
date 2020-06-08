import React, { Component } from 'react'

class AddBook extends Component {

    state = {
        formdata:{
            name:'',
            author:'',
            review:'',
            pages:'',
            rating:'',
            price:''
            
        }
    }

    submitForm = (e) =>{


    }

    render() {
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Add a review</h2>

                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Enter name"
                            value={this.state.formdata.name}/>
                   </div>         

                   <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Enter author"
                            value={this.state.formdata.author}/>
                   </div>
                   
                   <textarea
                        value={this.state.formdata}
                   
                   />

                </form>

            </div>
        )
    }
}
export default AddBook;