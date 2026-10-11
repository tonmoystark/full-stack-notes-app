import ContactForm from "@/components/contact/ContactForm";
import React from "react";
import { contactForm } from "../actions/contact";

const createContact = () => {
  return (
    <div>
      <ContactForm action={contactForm} />
    </div>
  );
};

export default createContact;
