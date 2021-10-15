import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import MyInfo from './components/MyInfo';
import Sty from './components/Sty';
import maptest from './components/maptest';
import MemeGenarator from './components/MemeGenarator';
import Header from './components/Header';

// function handclick()
//   {
//     console.log("hey")
//   }
class App extends Component {
  // constructor(){
  //   super()
  //   {
  //     this.state={
  //      isloading : true
  //     }
  //   }
    // this.handclick=this.handclick.bind(this)
  //}
  // componentDidMount()
  // {
  //   setTimeout ( ()=> {
  //     this.setState(
  //       {
  //         isloading :false
  //       })
  //   },1500
  //   )
  // }
  // handclick()
  // {
  //   this.setState((prevState) => {
  //        return{
  //          age: prevState.age + 1
         
  //        }
  //   } )
  // }
  //  constructor()
  //   {
  //       super()
        
  //       this.state={
  //         firstname:"",
  //         lastname:"",
  //         checked:false,
  //          gender:"",
  //          dest:"select colour"
  //       }
  //       this.handlechange=this.handlechange.bind(this)
    
  //   }
  //   handlechange(event)
  //   {
  //     const{name,value,type,checked} =event.target

  //     type==="checkbox" ?this.setState({
  //       [name]:checked
  //     })
  //     :
  //     this.setState({
  //       [name] : value
  //     })
  //   }
    // componentDidMount()
    // {
    //     fetch("")
    //     .then(response =>response.json)
    //     .then( data =>
    //         {
    //             this.setState(
    //                 {
    //                     character:data
    //                 }
    //             )
    //         })
    // }
    
  
  render(){
  return (
    // <form className="App">
    //  <input 
    //  type="text" 
    //  name="firstname" 
    //  placeholder="frist name" 
    //  onChange={this.handlechange}/>
    //   <h1>{this.state.firstname}</h1>
    //   <br/>
    //   <input 
    //   type="text" 
    //   name="lastname" 
    //   placeholder="last name" 
    //   onChange={this.handlechange}/>
    //   <h1>{this.state.lastname}</h1>
    //   <br/>
    //   <label>
    //     <input
    //     type="checkbox"
    //     name="checked"
    //     onChange={this.handlechange}
    //     />
    //   </label>
    //   <br/>
    //   <label>
    //     <input
    //     type="radio"
    //     name="gender"
    //     value="female"
    //     checked={this.state.gender === "female" }
    //     onChange={this.handlechange} 
    //     /> female
    //   </label>
    //   <br/>
    //   <label>
    //     <input
    //     type="radio"
    //     name="gender"
    //     value="male"
    //     checked={this.state.gender === "male" }
    //     onChange={this.handlechange} 
    //     /> male
    //   </label>
    //   <br/>
    //   <select value={this.state.dest} name="dest" onChange={this.handlechange}>
    //     <option value="green"> green</option>
    //     <option  value="red"> blue</option>
    //     <option value="blue"> red</option>
    //   </select>
    // </form> 
    <div>
      <Header/>
      <MemeGenarator />
      </div>
      
      );
  }
  }


export default App;
