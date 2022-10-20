import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

class CssTr extends Component{
    
    state = {
        show:true
    }

    showDiv = () => {
        this.setState({
            show: !this.state.show
        })
    }
    
    render(){
        return(
            <div>
            <CSSTransition
                in={this.state.show}
                timeout={500}
                classNames='cssSQ'
            >
                <div className='cssSQ'>
                    hello
                </div>
            </CSSTransition>
                <button
                    onClick={this.showDiv}
                >
                    toggle it
                </button>
            </div>
        )
    }
}


export default CssTr;