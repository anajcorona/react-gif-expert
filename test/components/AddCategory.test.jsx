import { render, screen, fireEvent} from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => { 
    test('Debe cambiar el valor de un texto', () => { 
        render( <AddCategory onAddCategory={ () => {}}/>);
            const input = screen.getByRole('textbox');
            fireEvent.input( input, { target: {value: 'Goku'}});
            
            expect( input.value ).toBe('Goku');
     })

    test('Debe de llamar AddCategory si el input tiene un valor', () => { 
        const inputValue = 'Goku';
        const onNewCategory = jest.fn();
        render( <AddCategory onAddCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue}});
        fireEvent.submit(form);

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    })

    test('No debe de llamar el onCategory si el input está vacío', () => { 
        const onNewCategory = jest.fn();
        render( <AddCategory onAddCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled;
    })
 })