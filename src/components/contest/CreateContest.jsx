import React, {useState} from "react";
import styled from "styled-components"
import Header from "../header/Header";
import {postContest} from "../../utils/apis";

const CreateContest = () => {
    const [title, setTitle] = useState("");
    const [introduce, setIntroduce] = useState("");
    const [place, setPlace] = useState("");
    const [signPeriod, setSignPeriod] = useState("");
    const [period, setPeriod] = useState("");
    const [signWay, setSignWay] = useState("");
    const [sponsor, setSponsor] = useState("");
    const [siteAddress, setSiteAddress] = useState("");
    const [signCondition, setSignCondition] = useState("");
    const [category, setCategory] = useState("");
    const api = () => {
        postContest(title, introduce, period, place, signPeriod, sponsor, siteAddress, signCondition, signWay, category)
    }

    return <Wrapper>
        <Header/>
        <CreateContestContainer>
            <LeftSection>
                <Title>대회 생성</Title>
                <Input type="text" placeholder="대회 제목을 입력해주세요." onInput={(e) => setTitle(e.target.value)}/>
                <p>ex) 세계 최강 알고리즘 대회</p>
                <Input type="text" placeholder="대회 한 줄 소개를 입력해주세요." onInput={(e) => setIntroduce(e.target.value)}/>
                <p>ex) 이 대회는 누구나 참여 가능합니다.</p>
                <Input type="text" placeholder="대회 장소를 입력해주세요." onInput={(e) => setPlace(e.target.value)}/>
                <p>ex) 대덕소프트웨어마이스터고등학교</p>
                <Input type="text" placeholder="대회 신청 기간을 입력해주세요." onInput={(e) => setPeriod(e.target.value)}/>
                <p>ex) 2022-10-25 ~ 2022-10-29</p>
                <Input type="text" placeholder="대회 기간을 입력해주세요." onInput={(e) => setSignPeriod(e.target.value)}/>
                <p>ex) 2022-10-30</p>
            </LeftSection>
            <RightSection>
                <div>
                    <button>이미지 업로드</button>
                    <button
                        onClick={() =>  api()}>
                        대회만들기
                    </button>
                </div>
                <Input type="text" placeholder="대회 참가 조건을 입력해주세요." onInput={(e) => setSignCondition(e.target.value)}/>
                <p>ex) 학생</p>
                <Input type="text" placeholder="대회 참가 방법을 입력해주세요." onInput={(e) => setSignWay(e.target.value)}/>
                <p>ex) 홈페이지를 참고해주세요.</p>
                <Input type="text" placeholder="대회 후원사를 입력해주세요." onInput={(e) => setSponsor(e.target.value)}/>
                <p>ex) 손재민, 장석연, 김호영, 이준범</p>
                <Input type="text" placeholder="대회 사이트를 입력해주세요." onInput={(e) => setSiteAddress(e.target.value)}/>
                <p>ex) 링크</p>
                <Input type="text" placeholder="대회 카테고리를 입력해주세요." onInput={(e) => setCategory(e.target.value)}/>
                <p>ex) OFFLINE, 학생</p>
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
     >p{
        color:red;
        font-size:16px;
        align-self:flex-start;
    }
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
        font-size:16px;
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