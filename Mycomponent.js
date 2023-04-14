import React from 'react';
//import React from '.../react';
// event is globle -> that contain all variable   -> in file input -> value cua in put hien tai 
// setState -> goi 1 lan -> goi ham render lai 
class Mycomponent extends React.Component {
  state = {
    tuan: 'hello',
    channal: 'alo coca'
  }

  handleclick = () => {
    alert('click me')
  }

  handdlechange = (event) => {
    console.log(event.target.value)
  }

  handdlechangestate = (event) => {
  
    this.setState({
        tuan:event.target.value,
    })



  }

  render() {
    let name = '2002'

    return (
      <div>
        <div>hello {name}</div>

        <div>....{this.state.channal}</div>
        <div>coooo</div>

        <div >
            <input type='text' onChange={(event)=>this.handdlechange(event)}
            
            >
            </input>
        </div>


        <div >
            <input type='text'  onChange={(event)=>this.handdlechangestate(event)  }>
            </input>
            <p>state hien tai la {this.state.tuan}</p>
        </div>




        <div >
            <input type='text' onChange={(event)=>this.handdlechange(event)}>
            </input>
        </div>


        <div>
          <button type="button" onClick={() => { this.handleclick() }}>click me</button>
        </div>







      </div>
    )
  }
}






//export default Mycomponent;
//export default handleFrom;
export { Mycomponent  };
