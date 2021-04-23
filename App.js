import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tm_Id:"",
      tm_approver:"",
      finalList:[]
    }
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.renderList = this.renderList.bind(this);
    this.handleAprroverDelete = this.handleAprroverDelete.bind(this);
    this.handleTimesheetDelete = this.handleTimesheetDelete.bind(this);
  }

  handleAprroverDelete(index,index1){
    let temp_finalList = this.state.finalList
    temp_finalList[index].approvers.splice(index1,1)
    this.setState({
      finalList:temp_finalList
    })
  }

  handleTimesheetDelete(index){
    let temp_finalList = this.state.finalList
    temp_finalList.splice(index,1)
    this.setState({
      finalList:temp_finalList
    })
  }

  handleOnchange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  // renderApproverList(approverList,index)
  // {
  //   console.log("index",index)
  //   return(

  //   )
  // }

  renderList(finalList,index){
    return(
        <div className="timesheet-chaser-list">
          <i className="fa fa-times" style={{alignSelf:"flex-end"}} onClick={() => this.handleTimesheetDelete(index)}></i>
          <div className="tm-approver-wrapper">
          <div class="tm-id" ><span>{finalList.id}</span></div>
          <div style={{border:"1px solid #000"}}>
          {finalList.approvers.map((approverList,index1) => {
            return(
              <div className = "timesheet-approver-section">
              {approverList}
              <span className="cancel-tm-approver" onClick={() => this.handleAprroverDelete(index,index1)}>
                <i class="fa fa-times" aria-hidden="true" style={{fontSize:"13px"}} ></i>
              </span>
            </div>
            )
          })}
          </div>
          </div>
        </div>
      )
  }

  handleAdd(e){
    this.setState({
      finalList:[...this.state.finalList,{"id":this.state.tm_Id,"approvers":this.state.tm_approver.split(",")}],
      tm_Id:"",
      tm_approver:""
    })
  }
  render(){
    return (
      <div className="App">
        Enter TimeSheet:<input type="text" name="tm_Id" value = {this.state.tm_Id} onChange={this.handleOnchange} ></input>
         <br />
        Enter Approvers:<textarea type="text" name="tm_approver" value = {this.state.tm_approver} onChange={this.handleOnchange}></textarea><br />
        <button onClick={this.handleAdd}>Add</button>
  
        <div class="timesheet-chaser-container" >
              {this.state.finalList.map(this.renderList)}
  
        {/* {todo.map( (item,index) => {
          return (
                  <div className="timesheet-approver-section">
                      {item}
                      <span className="cancel-tm-approver">
                        <i class="fa fa-times" aria-hidden="true" onClick = {e => handleDelete(index,e)} style={{fontSize:"13px"}}></i>
                      </span>
                  </div>)
        })} */}
      </div>
      </div>
    );
  }
  
}

export default App;
