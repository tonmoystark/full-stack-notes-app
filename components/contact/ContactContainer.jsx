import { connectDB } from "@/lib/db";
import { contactModel } from "@/lib/models/contact.model";
import React from "react";
import ContactCard from "./ContactCard";

const ContactContainer = async () => {
  await connectDB();
  const contacts = await contactModel.find().sort({ createdAt: -1 }).lean();

  if (contacts.length === 0) {
    return <div className="text-center">No contacts found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {contacts.map((contact) => (
        <ContactCard
          key={contact._id}
          id={contact._id}
          name={contact.name}
          email={contact.email}
          message={contact.message}
          status={contact.status}
        />
      ))}
    </div>
  );
};

export default ContactContainer;
