import React from "react";
import { Button, Form, Message } from 'semantic-ui-react';

function Search({ onChange }) {


  return (
    <Form>
      <Form.Field size='small' class="ui category search">
        <input
          placeholder='Search Action here ...'
          onChange={onChange}
        />
      </Form.Field>
    </Form>
  )
}

export default Search;
