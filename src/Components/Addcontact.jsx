/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
export const Addcontact = () => {
  let Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  function createContact(e) {
    e.preventDefault();
    const new_contact = {
      id: Math.floor(Math.random()),
      name: name,
      phone: phone,
      email: email,
    };
    dispatch(addContact(new_contact));
    Navigate("/");
  }
  return (
    <div>
      <div className='card border-0 shadow'>
        <div className='card-header'>Add a contact</div>
        <div className='card-body'>
          <form onSubmit={(e) => createContact(e)}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='enter the name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='enter the email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='enter the phone number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button className='btn btn-primary' type='submit'>
              Add contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
