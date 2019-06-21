import React from 'react';
import styled from 'styled-components';
import List from './List'

const Header = styled.div`
  width:100&;
  height: 100px;
  background-color: skyblue;
  text-align:center;
`
const Body = styled.div`
  margin-top:50px;
  text-align:center;
`
const Title = styled.p`
  font-size:50px;
  font-family:"微軟正黑體";
`
const Input = styled.input`
  margin-left:25px;
  border-radius:10px;
  font-size:48px;
  font-family:"微軟正黑體";
  width: 55%;
`
const Label = styled.label`
  font-size:48px;
  width: 50px;
`
const AddButton = styled.button`
  position:relative;
  font-size:16px;
  top:40px;
  right:50px;
  cursor: pointer;
`

const ListBlock = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
`
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enentValue:"",
      eventArray:[],
      eventStatus:[]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this);
    this.handleFinishButtonClick = this.handleFinishButtonClick.bind(this);
  };

  handleInputChange(e) {
    this.setState({enentValue:e.target.value})
  }

  handleAddButtonClick(){
    if(this.state.enentValue !=""){
      let newEventArray = Object.assign([],this.state.eventArray);
      let newEventStatus = Object.assign([],this.state.eventStatus);
      newEventArray.push(this.state.enentValue);
      newEventStatus.push(false);
      this.setState({eventArray:newEventArray,eventStatus:newEventStatus});
    } else {
      alert("Please input the event !!")
    }
  }

  handleFinishButtonClick(index){
    let newEventStatus = Object.assign([],this.state.eventStatus);
    newEventStatus[index] = true;
    this.setState({eventStatus:newEventStatus});
  }

  handleCancelButtonClick(index){
    let existedEventArray = Object.assign([],this.state.eventArray);
    let existedEventStatus = Object.assign([],this.state.eventStatus);
    existedEventArray.splice(index,1);
    existedEventStatus.splice(index,1);
    var newArray = existedEventArray;
    var newStatus = existedEventStatus;
    console.log(newArray);
    this.setState({eventArray:newArray,eventStatus:newStatus});
  }
  render() {
    const todoList = this.state.eventArray;
    return (
      <>
      <Header>
        <Title>todo-list</Title>
      </Header>
      <Body>
        <Label htmlFor="eventInput">TODO:</Label>
        <Input id="eventInput" type="text" onChange={this.handleInputChange} placeholder="Please input the event"/>
        <AddButton onClick={this.handleAddButtonClick}>ADD</AddButton>        
      </Body>
      <ListBlock>
      {todoList.map((item,index)=>(
        <List 
        status={this.state.eventStatus[index]} 
        key={index} 
        FinishClick={this.handleFinishButtonClick}
        CancelClick={this.handleCancelButtonClick} 
        event={item} 
        index={index}
        />))}
      </ListBlock>
      </>
    );
  }
}

export default App;