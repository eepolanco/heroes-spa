import { authReducer } from "../../../src/context/authReducer";
import { types } from "../../../src/types/types";

describe('Tests in authReducer.js', () => { 

    test('debe retornar el estado por defecto', () => { 
        const initialState = {
            logged: false,
            user: "Emmanuel Polanco"
        };
        const newState = authReducer(initialState, {});

        expect( newState ).toBe( initialState );
     })

     test('debe de llamar al login autenticar y establecer el user', () => { 

        const action = {
            type: types.login,
            payload: "Emmanuel Polanco"
        };

        const newState = authReducer({}, action);

        expect( newState.user ).toBe( action.payload );
        expect( newState.logged ).toBeTruthy();
     })

     test('debe de hacer logout y borrar el name del usuario', () => { 
        const logoutState = authReducer({logged: true}, { type: types.logout } );

        expect( logoutState.user ).toBeUndefined();
        expect( logoutState.logged ).toBeFalsy();

     })


 })