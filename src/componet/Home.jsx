import React from "react"
import { connect } from "react-redux"
import { changeName, deleteBtn, editBtn, cancelBtn, updateBtn, delAllBtn } from '../Store/action'
class Home extends React.Component {
  constructor(e) {
    super(e)
    this.state = {
      inputData: "",
      edit: false,
      updateVal: ''
    }
  }



  render() {
    console.log(this.state.inputData)
    console.log(this.props.data)
    return (
      <div>
        <div className="App-header">
          <h1 id="h1">TODO APP</h1>
          <input id="input" type="text" value={this.state.inputData} placeholder="Write Something...."
            onChange={(e) => this.setState({ inputData: e.target.value })} />
          <button id="btn" onClick={() => {
            this.setState({
              inputData: ""
            })
            this.props.changeName(this.state)

          }}>Add</button>
          <button id="btn2" onClick={() => this.props.delAllBtn()}>Delete All</button>
          {this.props.data && this.props.data.map((v, i) =>
            v.edit ?
              <div>
                <input id="input" placeholder="Update data" type="text" value={this.state.updateVal} onChange={(e) => this.setState({ updateVal: e.target.value })} />
                <button id="btn3" onClick={() => this.props.cancelBtn(i)}>Cancel</button>
                <button id="btn4" onClick={() => this.props.updateBtn(
                  {
                    inputData: this.state.updateVal,
                    edit: false,
                  }
                  , i)}>update</button>
              </div>
              :
              <li key={i}>{v.inputData}
                <button id="edit" onClick={() => {
                  this.setState({ updateVal: v.inputData })
                  this.props.editBtn(i)
                }
                }
                >Edit</button>
                <button id="delete" onClick={() => this.props.deleteBtn(i)}>Delete</button>
                {console.log(v.edit)}
              </li>
          )}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    data: state.data
  }
}
const mapDispitchToProps = dispatch => {
  return {
    changeName: (data) => dispatch(changeName(data)),
    deleteBtn: (i) => dispatch(deleteBtn(i)),
    editBtn: (v) => dispatch(editBtn(v)),
    cancelBtn: (v) => dispatch(cancelBtn(v)),
    updateBtn: (val, update) => dispatch(updateBtn(val, update)),
    delAllBtn: () => dispatch(delAllBtn()),
  }
}

export default connect(mapStateToProps, mapDispitchToProps)(Home)
