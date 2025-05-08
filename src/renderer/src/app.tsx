

// 创建一个路由配置示例
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';

// 示例组件 - 在实际应用中你会导入真正的组件
// const Home = () => <div>首页</div>;
// const About = () => <div>关于页面</div>;

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
