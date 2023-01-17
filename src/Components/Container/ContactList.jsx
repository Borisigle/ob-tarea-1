import React from 'react';
import { Contact } from '../../Models/contact.class';
import ContactComponent from '../Pure/ContactComponent';

const ContactList = () => {
    const defaultContact = new Contact("Boris", "Iglesias", "Boris@iglesias", true)

    return <ContactComponent contact={defaultContact} />

};

export default ContactList;