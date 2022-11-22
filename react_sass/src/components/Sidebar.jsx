import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'
import Avatar from '../img/Eu56.jpg'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Maria Cláudia" />
        <p className="title">Desenvolvedora Front End</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">
            Download Currículo
        </a>
    </aside>
}

export default Sidebar