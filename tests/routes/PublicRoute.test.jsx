import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/context/AuthContext"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Pruebas en el PublicRoute', () => { 
    
    test('debe mostrar el children si no está autenticado', () => {
        const contextValue = {
            logged: false
        }

        render(
        <AuthContext.Provider value={ contextValue }>
            <PublicRoute>
                <h1>Ruta Pública</h1>
            </PublicRoute>
        </AuthContext.Provider>
        )

        expect( screen.getByText('Ruta Pública')).toBeTruthy();
     })

     test('debe navegar si está autenticado', () => { 
        
        const contextValue = {
            logged: true,
            user: {
                name: 'Emmanuel',
                id: '123'
            }
        }

        render(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="login" element={ 
                        <PublicRoute>
                        <h1>Ruta Pública</h1>
                        </PublicRoute> } >
                    </Route>
                    <Route path="marvel" element={ <h1> Página de Marvel</h1> } ></Route>
                </Routes>
                
            </MemoryRouter>
        </AuthContext.Provider>
        )

        expect( screen.getByText('Página de Marvel')).toBeTruthy();

      })
 })