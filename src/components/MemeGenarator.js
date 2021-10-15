import React, { Component } from 'react';


class MemeGenarator extends Component {
    constructor()
    {
        super()
        this.state={
            toptext :"",
            bottomtest :"",
            randomimg :""
        }
    }
    componentDidMount()
    {
        fetch("")
        .then(response =>response.json)
        .then( data=>
            {
                this.setState(
                    {
                        
                    }
                )
            })
    }
    handlechange(event)
    {
        const{name,value}=event.target
        this.setState({
            [name]:value
        })
    }
    render() {
        return
       ( <div>
        <h3>generator </h3>
        </div>);
    }
}
export default MemeGenarator