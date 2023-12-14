//parent that we are going to use for all of our components
import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <div className='App'>
        <Sidebar />
        <div className='page'>
        <span className='tags top-tags'>
            <span className='bottom-tag-html'>&lt;html&gt;</span>
        <br />
            <span>&lt;body&gt;</span>
        </span>
            <Outlet />

            <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
        </div>
    </div>
    )
}

export default Layout