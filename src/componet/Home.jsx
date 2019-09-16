import React from "react"
import { connect } from "react-redux"
import { changeName } from '../Store/action'
class Home extends React.Component {
  constructor(e) {
    super(e)
    this.state = {
      inputData: ""
    }
  }
  deleteBtn (i) {
    alert("working")
          this.state.data.data.splice(i , 1);
  }

  
  render() {
    console.log(this.state)
    console.log(this.props.data)
    return (
      <div>
        <div className="App-header">
          <h1 id="h1">TODO APP</h1>
          <input id="input" type="text" value={this.inputData} placeholder="Write Something...." onChange={(e) => this.setState({ inputData: e.target.value })} />
          <button id="btn" onClick={() => this.props.changeName(this.state.inputData)}>Add</button>
          <button id="btn2">Delete All</button>

          <ol>
            {this.props.data.data.map((v, i) => {
              // this.props.data[i] ?
              //   <div><input id="input" placeholder="Update data" type="text" />
              //     <button id="btn3">Cancel</button>
              //     <button id="btn4">update</button>

              //   </div>
              //   :
                console.log(v);
              return (
                <li key={i}>{v}
                  <button id="edit">Edit</button>
                  <button id="delete" onClick={()=>this.props.deleteBtn.bind(this.i)}>Delete</button>
                </li>
              )
            }
            )}
          </ol>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    data: state
  }
}
const mapDispitchToProps = dispatch => {
  return {
    changeName: (data) => dispatch(changeName(data))
  }
}

export default connect(mapStateToProps, mapDispitchToProps)(Home)








// class Home extends React.Component {
//     constructor (e){
//         super(e)
//         this.state = {
//             todo: [],
//             inputData: ""
//         }
//     }
//     functodo() {
//       let {todo , inputData} = this.state;
//       var obj1 = {
//         value:inputData,
//         edit: false
//       }
//       console.log(obj1);
//       todo.push(obj1);
//       console.log(todo)
//       this.setState({ 
//       todo: todo,
//       inputData: ""
//     })

//     }
//     editBtn(i , v) {
//       console.log("edit todo", i , v.inputData)
//       let { todo } = this.state;
//       todo[i].edit = true;
//       console.log(v.value);
//       this.setState({
//         todo : todo,
//         updateVal:v.value
//       })
//     }
//     deleteBtn(i) {
//       this.state.todo.splice(i , 1);
//       this.setState({
//         todo: this.state.todo
//       })
//     }
//  cancel(i){
//   let { todo } = this.state;
//   todo[i].edit = false;
//   this.setState({
//     todo:todo
//   })

//  }
//  update(v,i){
//   let { todo,updateVal } = this.state;
//   todo[i].edit = false;
//   todo[i].value = updateVal;
//   this.setState({
//     todo:todo
//   })

//  }
//     render(){
//       let {todo , inputData,updateVal} = this.state;
//       console.log(updateVal);
//       // console.log(inputData)
//         // console.log(e.target.value);
//         return(
          // <div className="App-header">
          //   <h1 id="h1">TODO APP</h1>
          //   <input id="input" value={inputData} type="text" placeholder="Write Something...." onChange={(e)=>this.setState({inputData: e.target.value})}/>
          //   <button id="btn" onClick={this.functodo.bind(this)}>Add</button>
          //   <button id="btn2" onClick={()=>this.setState({todo: []})}>Delete All</button>

          //   <ol>
          //     {todo.map((v , i)=>
          //     todo[i].edit? <div><input id="input" placeholder="Update data" type="text" value={updateVal} onChange={(e)=>this.setState({
          //       updateVal:e.target.value
          //     })}/>
          //     <button id="btn3" onClick={this.cancel.bind(this,i)}>Cancel</button>
          //     <button id="btn4" onClick={this.update.bind(this,v,i)}>update</button>

          //     </div>
          //     :
          //     <li key={i}>{v.value}
          //     <button id="edit" onClick={this.editBtn.bind(this ,i , v)}>Edit</button>
          //     <button id="delete" onClick={this.deleteBtn.bind(this ,i)}>Delete</button>
          //     </li>)}
          //   </ol>
          // </div>
//         )
// }

// }

// export default Home