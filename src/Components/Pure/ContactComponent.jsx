import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../Models/contact.class';

const ContactComponent = ({contact}) => {
    const {name, surname, email, state} = contact

    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Surname: {surname}</h2>
            <h2>Email: {email}</h2>
            <h2>State: {state ? "Contacto En Línea" : "Contacto No Disponible"}</h2>
        </div>
    );
};

ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};

export default ContactComponent;