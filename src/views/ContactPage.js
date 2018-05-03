import React, { Component } from 'react';
import SideNav from '../components/Nav/SideNav/SideNav';
import BottomNav from '../components/Nav/BottomNav/BottomNav';
import ContactDetails from '../components/Details/ContactDetails/ContactDetails';

class ContactPage extends Component {
  render() {
    return (
      <div className="ContactPage">
        <SideNav />
        <ContactDetails />
        <BottomNav />
      </div>
    );
  }
}

export default ContactPage;