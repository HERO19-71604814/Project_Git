import { Button } from "@mui/material";

import './Header.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogOut } from "./useLogOut";
import profileAImageA from './profileA-imageA.png';//이미지 파일 임포트


const Header = ({ isLogin, setIsLogin }) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const naviagte = useNavigate();

    const { logOut } = useLogOut();

    // ===== ===== ===== ===== ===== ===== ===== ===== =====
    // ===== ===== ===== ===== ===== ===== ===== ===== =====
    // ===== ===== ===== ===== ===== ===== ===== ===== =====

    // 로그아웃
    const toLogout = async () => {
        logOut().then((res) => {
            sessionStorage.removeItem('jwt');
            setIsLogin(res);
            naviagte('/');
        });
    }

    // ===== ===== ===== ===== ===== ===== ===== ===== =====
    // ===== ===== ===== ===== ===== ===== ===== ===== =====
    // ===== ===== ===== ===== ===== ===== ===== ===== =====

    const move = (e) => {
        naviagte(e.target.value);
    }

    // ===== ===== ===== ===== ===== ===== ===== ===== =====
    // ===== ===== ===== ===== ===== ===== ===== ===== =====
    // ===== ===== ===== ===== ===== ===== ===== ===== =====

    return (
        <div className="header">
            <div className="top-memu">
                {
                    isLogin ?
                        <>
                            <Button onClick={toLogout}>로그아웃</Button>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <Button onClick={move} value='/myPage'>👤 마이페이지</Button>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <Button onClick={move} value='/mycart'>🛒 장바구니</Button>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <Button onClick={move} value='/packreservation/memberpackreservation'>⏱ 예약 목록</Button>
                            
                        </>
                        :
                        <Button onClick={move} value='/login'>로그인</Button>
                        
                        
                }
            </div>
            <div className="bottom-memu"
                onMouseEnter={() => setIsMenuVisible(true)}
            >
                {/* 메뉴 링크들 */}
                <a href="/Main"><img src={profileAImageA} alt="Profile" className="profileA-imageA"/></a>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <Button onClick={move} value="/board">게시판</Button>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <Button onClick={move} value="/map">여행지도</Button>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <Button onClick={move} value="/calendar">여행달력</Button>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <Button onClick={move} value="/packreservationList">여행상품</Button>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <Button onClick={move} value="/festivals">축제관리</Button>
                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <Button onClick={move} value='/connectionlog'>⏱ 최근 본 내역</Button>
                
            </div>

            {isMenuVisible && (
                <div className="bottom-subMenu"
                    onMouseLeave={() => setIsMenuVisible(false)}
                >
                    <ul style={{ margin: 10 }}>
                        <li><Button onClick={move} value="/boardList/free">게시판(자유)</Button></li>
                        <li><Button onClick={move} value="/boardList/notic">게시판(공지)</Button></li>
                        <li><Button onClick={move} value="/boardList/promotion">게시판(행사)</Button></li>
                        <li><Button onClick={move} value="/boardList/event">게시판(이벤트)</Button></li>
                        <li><Button onClick={move} value="/boardList/qa">게시판(QA)</Button></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;