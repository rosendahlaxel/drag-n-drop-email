import EmailEditor from './components/EmailEditor';
import './styles/app.css';

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <div className="brand-mark">✉️</div>
          <div>
            <p className="brand-name">Drag &amp; Drop Email</p>
            <p className="brand-subtitle">GrapesJS-powered builder</p>
          </div>
        </div>
        <p className="hint">Drag blocks onto the canvas to design your email.</p>
      </header>
      <EmailEditor />
    </div>
  );
}

export default App;
