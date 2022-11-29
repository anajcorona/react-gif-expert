import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({onAddCategory}) => {

  const [inputValue, setinputValue] = useState( '' )

  const onInputChange = ({ target }) => {
    //console.log( target.value );
    setinputValue( target.value );
  }

  const onSubmit = ( event) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1) return;
    //console.log( inputValue );
    setinputValue('');
    onAddCategory( inputValue.trim() );
    // setcategories( categories => [ inputValue, ...categories ]);
  }

  return (
    // Poner solo OnSubmit es igual a // (event) => onSubmit(event) porque nada mas es un parametro
    <form onSubmit={ onSubmit } aria-label>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
}