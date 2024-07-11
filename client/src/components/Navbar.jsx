import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {

const isAuth = true

const activeStyles = {
    color: 'white',
}

  return (
    <div className='flex py-4 justify-between items-center'>
        <span className='flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm'>
            E
        </span>

        {
            isAuth && (
                <ul className='flex gap-8'>
            <li>
                <NavLink
                    to={'/'}
                    href='/'
                    className='text-xs text-gray-400 hover:text-white'
                    style={({isActive})=>
                        isActive ? activeStyles : undefined
                    }
                >Главная</NavLink>
            </li>
            <li>
                <NavLink
                    to={'/posts'}
                    href='/'
                    className='text-xs text-gray-400 hover:text-white'
                    style={({isActive})=>
                        isActive ? activeStyles : undefined
                    }
                >Мои посты</NavLink>
            </li>
            <li>
                <NavLink
                    to={'/new'}
                    href='/'
                    className='text-xs text-gray-400 hover:text-white'
                    style={({isActive})=>
                        isActive ? activeStyles : undefined
                    }
                >Добавить пост</NavLink>
            </li>
        </ul>
        )
        }

        <div className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2'>
            {isAuth ? <button>Выйти</button> : <Link to={'/login'}> Войти </Link> }
        </div>
    </div>
  )
}
