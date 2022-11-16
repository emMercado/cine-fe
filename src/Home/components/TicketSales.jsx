import { Formik } from 'formik'
import React from 'react'

const Formulario = () => {
  return (
    <div>

        <Formik
            onSubmit={() => {
                console.log('Formulario enviado');
        }}       
        
        >            

        {( {handleSubmit} )=> (
            <form className="Formulario" onSubmit={handleSubmit} >
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" id="email" name="email" placeholder="Email" />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="email" id="phone" name="phone" placeholder="Phone" />
            </div>
            <button type="submit">select seat</button>
        </form>
        )}


        </Formik>
        
    </div>
  )
}

export default Formulario