import './style/App.css'; // 전체 스타일 유지
import MainApp from './components/mainApp'; // ✅ 새로운 메인 진입점

function App() {
  return <MainApp />; // ✅ 바로 렌더링
}

export default App;
