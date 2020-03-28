import React, { useState }from 'react';
import { Link, useHistory } from 'react-router-dom';

import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroImg from '../../assets/heroes.png';


export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handlerLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id })

            localStorage.setItem('ongId', id); //armazenar no navegar, ja que vai exibir durante toda a aplicação
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch(err){
            alert('Erro');
        }

    }
    return (
        <div className='logon-container'>
            <section className='form'>
                <img src={logoImg} alt='Be the hero logo'/>
                <form onSubmit={handlerLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder='Sua ID'
                        value={id}
                        onChange={ e => setId(e.target.value)}
                    />
                    <button type='submit'className='button'>Entrar</button>
                    
                    <Link to='/register' className='back-link'>
                        <FiLogIn size={16} color='#e02041'/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
                <img src={heroImg} alt='Heroes'/>
        </div>
    );
}