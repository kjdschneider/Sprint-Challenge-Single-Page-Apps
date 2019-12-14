import React from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Button color='secondary'>
        <Link to='/'>Home</Link>
      </Button>
      <Button color='secondary'>
        <Link to='/characters'>Characters</Link>
      </Button>
      
    </header>
  );
}
