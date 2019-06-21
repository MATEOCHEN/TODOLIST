import React from 'react';
import styled from 'styled-components';


const Block = styled.div`
  display:block;
  width: 20%;
  height: 300px;
  border-radius:20px;
  background-color: #FFC0CB;
  margin:40px 0px 0px 25px;
  text-align:center;
  word-wrap: break-word;
  opacity: ${props=> props.status ? 0.5:1};
`

const Title = styled.p`
    font-weight:bold;
    font-size:32px;
    color: deeppink;
    :hover {
        cursor: default;
    }  
`

const Content = styled.p`
    font-size:24px;
    font-weight:bold;
    color:black;
    font-family:"微軟正黑體";
    :hover {
        cursor: default;
    }   
`
const ButtonBlock = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
`
const Button = styled.input`
    background-color: cornflowerblue;
    position:relative;
    top:100px;
    border-radius:5px;
    text-align:center;
    visibility:${props=>props.status?"hidden":"visible"};
    :hover {
        cursor: pointer;
    }   
`
 class List extends React.Component{
    render(){
        const event = this.props.event;
        const index = this.props.index;
        const CancelFunction = this.props.CancelClick;
        const FinishFunction = this.props.FinishClick;
        const status = this.props.status;
        return(
            <Block status={status}>
                <Title>Task{index + 1}</Title>
                    <Content>{event}</Content>
                    <ButtonBlock>
                        <Button status={status} type="button" onClick={()=>FinishFunction(index)} value="Finish"/>
                        <Button status={status} type="button" onClick={()=>CancelFunction(index)} value="Cancel"/>
                    </ButtonBlock>
            </Block>
        );
    }
}
export default List;