import React from 'react';
import './form.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const Form = () => {

    // schema: shape of how our data should look...
    const schema = yup.object().shape({
        fullName: yup.string(),
        email: yup.string().email(),
        age: yup.number().positive().integer().min(18),
        password: yup.string().min(4).max(20),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match")
    });

    // register: used in each input for validation by registring the inputa with name.

    const { register, handleSubmit, formState: {errors} } = useForm({
        // /resolvers/:helps with the integration btw react-hook-form lib & yup lib
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }



    return (
        <div className='formDiv'>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <input className='inputForm' type="text" placeholder='Full Name...' {...register("fullName")} required/>
                <p className='formP'>{errors.fullName?.message}</p>

                {/* email */}
                <input className='inputForm' type="email" placeholder='Email...' {...register("email")} required />
                <p className='formP'>{errors.email?.message}</p>

                {/* age */}
                <input className='inputForm' type="number" placeholder='Age...' {...register("age")} required />
                <p className='formP'>{errors.age?.message}</p>

                {/* password */}
                <input className='inputForm' type="password" placeholder='Password...' {...register("password")} required />
                <p className='formP'>{errors.password?.message}</p>

                {/* confirm password */}
                <input className='inputForm' type="password" placeholder='Confirm Password...' {...register("confirmPassword")} required />
                <p className='formP'>{errors.confirmPassword?.message}</p>


                {/* submit */}
                <input className='submitBtn' type="submit" />
            </form>
        </div>
    )
}

export default Form
