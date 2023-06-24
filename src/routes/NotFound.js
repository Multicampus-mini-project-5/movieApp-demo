import { Navigate, useNavigate } from "react-router-dom";

function NotFound () {
  const navigate = useNavigate(); // useNavigate 훅을 실행하면 페이지를 이동할 수
                                  // 있게 함수를 반환함

  return (
    <div className="page-container">
      <div style={{
        marginTop: '64px',
        fontSize: '48px',
        fontWeight:'bold',
        marginBottom: '32px'
      }}>
        해당 페이지를 찾지 못했습니다.
      </div>
      
      <div
        onClick={() => {navigate('/')}}
        style={{
          fontSize: "32px",
          lineHeight: '2.0',
          fontWeight:'bold',
          color: 'tomato',
          cursor: 'pointer'
        }}>
        메인페이지로 돌아가기</div>
      </div>
  );
}

export default NotFound;