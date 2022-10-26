import React from "react";
import { Form} from 'semantic-ui-react';

function Search({ onChange }) {


  return (
    <Form>
      <Form.Field class="ui category search">
        <input
          placeholder='Search Action here ...'
          onChange={onChange}
        />
      </Form.Field>
    </Form>
  )
}

export default Search;
