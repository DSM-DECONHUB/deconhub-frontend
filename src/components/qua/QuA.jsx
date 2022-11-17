import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "../header/Header";
import {postQnA, getQnAList} from "../../utils/apis";

const QnA = () => {
    const [state, setState] = useState([])
    const [text, setText] = useState("");
    const Api = getQnAList();
    useEffect(() => {
        Api.then((res) => {
            setState(res)
            console.log(res)
        });

    }, [])

    return (
        <Wrapper>
            <Header/>
            <CreateContestContainer>
                <LeftSection>
                    <Title>QnA 리스트</Title>
                    {
                        state.map((value) => (
                            <List>
                                <div>
                                    <h2>{value.contest_name}</h2>
                                    <h3>{value.question_title}</h3>
                                </div>
                                <Input type="text" placeholder="답변을 입력하세요." onInput={(e)=>setText(e.target.value)}/>
                                <button onClick={() => postQnA(value.question_id, text)}>등록</button>
                            </List>
                        ))
                    }
                </LeftSection>
            </CreateContestContainer>
        </Wrapper>
    )
}

export default QnA;

const Wrapper = styled.div`
    width:100%;
    height: calc(100vh - 60px);
    margin-top:60px;
    display:flex;
    flex-direction:column;
    align-items:center;

`;

const CreateContestContainer = styled.div`
 margin-top:50px;
 width:1420px;
 display: flex;
 flex-direction: row;
 justify-content:space-between;
`

const LeftSection = styled.div`
    width:1420px;
    height:fit-content;
`
const Title = styled.h1`
font-family: 'Pretendard';
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 44px;
margin-bottom:75px;
/* identical to box height, or 160% */

color: #000000;
`

const List = styled.div`
width: 1410px;
height: 99px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
line-height: 64px;
/* or 160% */
display:flex;
flex-direction:row;
align-items:center;
margin-bottom:100px;
color: #000000;

button{
        background: #FFB156;
        width: 120px;
        height: 48px;   
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 29px;
        color: #FFFFFF;
        border-radius: 4px;
}

>div{
display:flex;
flex-direction:column;
align-items:flex-start;
>h2{
    font-size:40px;
}
>h3{
    font-size:20px;
    color: #6AC0FF;
}
>p{
font-size:16px;
}    
}
`

const Input = styled.input`
    width: 200px;
    height: 48px;
    left: 0px;
    top: 148px;
    border:none;
    outline:none;
    margin-left: 750px;
    padding:0px 0px;
    ::placeholder{
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 48px;
        color: #FFB156;;
    }
`
