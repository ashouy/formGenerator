
import './template.css';
export const CustomHeader = () => {
  return (
    <header className="header-container">
        <nav className="custom-nav">
            <ul className="nav-list">
                <li className='nav-item'><a className='a-link' href="/">Home</a></li>
                <li className='nav-item'><a className='a-link' href="/create-form">Create Form</a></li>
                <li className='nav-item'><a className='a-link' href="/examples">Examples</a></li>
            </ul>
        </nav>
    </header>
  );
}