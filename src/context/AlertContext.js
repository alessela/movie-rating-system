import { createContext, useContext, useState } from "react";
import { Alert } from "react-bootstrap";

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({ message: '', variant: 'primary', show: false})

    const showAlert = (message, variant) => {
        setAlert({ message, variant, show: true})
        setTimeout(() => setAlert({ message: '', variant: 'primary', show: false}), 3000)
    }

    return (
        <AlertContext.Provider value={showAlert}>
            { children }
            <Alert show={alert.show} variant={alert.variant} dismissible
                onClose={() => setAlert({...alert, show: false })}
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    zIndex: 1050,
                }}>
                    { alert.message}
            </Alert>
        </AlertContext.Provider>
    )
}

export const useAlert = () => useContext(AlertContext)