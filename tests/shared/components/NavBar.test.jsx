import { fireEvent, render, screen } from "@testing-library/react"
import { Navbar } from "../../../src/shared/components/NavBar"
import { AuthContext } from "../../../src/context/AuthContext"
import { MemoryRouter, useNavigate } from "react-router-dom"

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}))

describe('Pruebas en el NavBar', () => { 
        
    const contextValue = {
        logged: true,
        user: "Emmanuel Polanco",
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );

    test('debe mostrar el navbar si el usuario está autenticado', () => { 

        render(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                    <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
        )

        expect( screen.getByText(contextValue.user) ).toBeTruthy();
     })

     test('debe llamar el boton on logout', () => { 
        
        render(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                    <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
        )

        const button = screen.getByRole( 'button' );
        fireEvent.click( button );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});
     })
 })