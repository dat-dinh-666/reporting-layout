import Menu from "../Menu";
import './styles.less';

export default function Sidebar({logoUrl}) {
    return (
        <div className="sidebar">
            <div className="sidebar-inner">
                <img src={logoUrl ?? 'http://picsum.photos/200/50'} width="200" height="50" alt=""/>
                <Menu/>
            </div>
        </div>
    )
}