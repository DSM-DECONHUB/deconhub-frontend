import React from "react"
import styled from "styled-components"
import Header from "../header/Header";

const CreateContest = () => {
    return <Wrapper>
        <Header/>
        <CreateContestContainer>
            <LeftSection>
                <Title>대회 생성</Title>
                <Input type="text" placeholder="대회 제목을 입력해주세요."/>
                <Input type="text" placeholder="대회 한 줄 소개를 입력해주세요."/>
                <Input type="text" placeholder="대회 장소를 입력해주세요."/>
                <Input type="text" placeholder="대회 신청 기간을 입력해주세요."/>
                <Input type="text" placeholder="대회 기간을 입력해주세요."/>

            </LeftSection>
            <RightSection>
                <div>
                    <button>이미지 업로드</button>
                    <button>대회 만들기</button>
                </div>
                <Input type="text" placeholder="대회 참가 조건을 입력해주세요."/>
                <Input type="text" placeholder="대회 참가 방법을 입력해주세요."/>
                <Input type="text" placeholder="대회 후원사를 입력해주세요."/>
                <Input type="text" placeholder="대회 사이트를 입력해주세요."/>
                <Input type="text" placeholder="대회 카테고리를 입력해주세요."/>
                <p>카테고리가 많을 경우 ,로 구분해주세요.</p>
            </RightSection>
        </CreateContestContainer>
    </Wrapper>
}

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
    width:720px;
    height:fit-content;
`

const RightSection = styled.div`
    width:600px;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    button{
        background: #FFB156;
        width: 148px;
        margin-left:30px;
        
height: 48px;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 29px;
/* identical to box height, or 161% */


/* White */

color: #FFFFFF;
        border-radius: 4px;
    }
    >p{
        color:red;
        font-size:13px;
        align-self:flex-start;
    }
`

const Title = styled.h1`
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 48px;

/* identical to box height, or 160% */


color: #000000;
`
const Input = styled.input`
    margin-top:70px;
    width:100%;
    height:50px;
    border:none;
    border-bottom:1px solid #CCCCCC;
    outline:none;
    padding:0px 10px;
    ::placeholder{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        color: #CCCCCC;
    }
`

export default CreateContest