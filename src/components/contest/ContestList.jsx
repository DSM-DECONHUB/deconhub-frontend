import React from "react"
import styled from "styled-components"
import Header from "../header/Header";

const ContestList = () => {
    return (<Wrapper>
        <Header/>
        <CreateContestContainer>
            <LeftSection>
                <Title>대회 조회</Title>
                <List>
                    <div>
                        <h2>
                            최강 알고리즘을 위한 알고리즘 대회
                        </h2>
                        <p>
                            이 대회는 대덕소프트웨어마이스터고등학교에서 하는 대회입니다.
                        </p>
                    </div>
                    <button>삭제</button>
                </List>
                <List>
                    <div>
                        <h2>
                            최강 백엔드를 위한 대회
                        </h2>
                        <p>
                            이 대회는 이경수님이 진행하십니다.
                        </p>
                    </div>
                    <button>삭제</button>
                </List>
                <List>
                    <div>
                        <h2>
                            2022 겨울 해커톤
                        </h2>
                        <p>
                            이 대회는 이경수님이 우승하실 것입니다.
                        </p>
                    </div>
                    <button>삭제</button>
                </List>
            </LeftSection>
        </CreateContestContainer>
    </Wrapper>)
}

export default ContestList;

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
margin-bottom:60px;
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
margin-bottom:50px;
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
>h1{
font-size: 30px;
}
>h2{
font-size:25px;
>p{
font-size:16px;
}
}    
`
