import React from "react"
import styled from "styled-components"
import Header from "../header/Header";

const QnA = () => {
    return (<Wrapper>
        <Header/>
        <CreateContestContainer>
            <LeftSection>
                <Title>QnA</Title>
                <List>
                    <div>
                        <h2>
                            최강 알고리즘을 위한 알고리즘 대회
                        </h2>
                        <h3>
                            어떤 언어를 사용할 수 있나요?
                        </h3>
                        <Input type="text" placeholder="답변을 입력하세요. (Enter를 누르세요)"/>
                    </div>
                </List>
                <List>
                    <div>
                        <h2>
                            최강 백엔드를 위한 대회
                        </h2>
                        <h3>
                            이경수님이 누구인가요?
                        </h3>
                        <Input type="text" placeholder="답변을 입력하세요. (Enter를 누르세요)"/>
                    </div>
                </List>
                <List>
                    <div>
                        <h2>
                            2022 겨울 해커톤
                        </h2>
                        <h3>
                            주제는 언제 알려주나요?
                        </h3>
                        <Input type="text" placeholder="답변을 입력하세요. (Enter를 누르세요)"/>
                    </div>
                </List>
            </LeftSection>
        </CreateContestContainer>
    </Wrapper>)
}

export default QnA;

const Wrapper = styled.div`
    width:100%;
    height: calc(100vh - 60px);
    margin-top:60px;
    display:flex;
    flex-direction:column;
    align-items:center;
     margin-bottom: 75px;

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
font-weight: 600;
font-size: 30px;
line-height: 48px;
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
line-height: 48px;
/* or 160% */
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
margin-bottom:75px;
color: #000000;
button{
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 39px;
/* identical to box height, or 162% */

color: #FF6363;
}
>div{
display:flex;
flex-direction:column;
align-items:flex-start;
>h2{
font-size:25px;
>h3{
font-size:24px;
>p{
font-size:16px;
}
}    
`

const Input = styled.input`
    width: 500px;
    height: 48px;
    left: 0px;
    top: 148px;
    border:none;
    outline:none;
    padding:0px 0px;
    ::placeholder{
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 48px;
        color: #FFB156;;
    }
`
