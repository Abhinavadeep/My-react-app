import React from "react";

function Form(){
    return <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name" id="name-label">
          Enter Your Name
        </label>
        <input type="text" id="name" />
</form>;
}

export default Form;