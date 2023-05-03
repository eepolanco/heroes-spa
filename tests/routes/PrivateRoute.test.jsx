import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/context/AuthContext";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el PrivateRoute', () => { 
    
    test('debe mostrar el children si está autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true
        }

        render(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <PrivateRoute>
                    <h1>Ruta Privada</h1>
                </PrivateRoute>
            </MemoryRouter>
        </AuthContext.Provider>
        )

        expect( screen.getByText('Ruta Privada')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/");
     })
 })