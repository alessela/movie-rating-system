import NavbarMenu from '../../components/NavbarMenu/NavbarMenu'
import './BasePage.css'

const BasePage = ({ children }) => (
    <div>
        <NavbarMenu />
        <div className="content d-flex flex-column">
            { children }
        </div>
    </div>
)

export default BasePage;