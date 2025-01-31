import NavbarMenu from '../../components/NavbarMenu/NavbarMenu'
import './BasePage.css'

const BasePage = ({ children }) => (
    <>
        <NavbarMenu />
        <div className="content d-flex flex-column">
            { children }
        </div>
    </>
)

export default BasePage;