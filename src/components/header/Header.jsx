import * as _ from "../../styles/main/header/Header.style";
import {DeconhubLogo} from "./Logo";
import {Link} from "react-router-dom";

function Header() {
    return (
        <_.HeaderContainer>
            <DeconhubLogo />
            <_.TitleContainer>
                <_.Title>
                    <Link to='/' >대회 조회</Link>
                </_.Title>
                <_.Title>
                    <Link to='/create' >대회 생성</Link>
                </_.Title>
                <_.Title>
                    <Link to='/qna' >QnA</Link>
                </_.Title>
            </_.TitleContainer>
        </_.HeaderContainer>
    );
}

export default Header;