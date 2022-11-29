const { render, screen } = require("@testing-library/react")
const { GifItem } = require("../../src/components/GifItem")

describe('Pruebas en <GifItem/>', () => { 
    const title = 'Dragonball';
    const url = 'https://one-punch.com/'
    test('Debe hacer march con el snapshowt ', () => { 
        const{ container } = render( <GifItem title={title} url={url}/> );
        expect(container).toMatchSnapshot();
     })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render( <GifItem title={ title} url={url} />);
        //expect ( screen.getByRole('img').src ).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    })

    test('Debe mostrar el titulo en el componente', () => { 
        render( <GifItem title={title} url={ url}/>);
        expect( screen.getByText( title )).toBeTruthy();
    })
 })