import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div className='main-nav'>
        <nav>
          <ul>
            <li>
              <Link className='hyp' href='#'>
                Тесты и учебники
              </Link>
            </li>
            <li>
              <Link className='hyp' href='#'>
                Цены
              </Link>
            </li>
            <li>
              <Link className='hyp' href='#'>
                Полезно знать
              </Link>
            </li>
            <li>
              <Link className='hyp' href='#'>
                Автошколы-партнёры
              </Link>
            </li>
            <li>
              <Link className='hyp' href='#'>
                О нас
              </Link>
            </li>
            <li>
              <Link className='hyp' href='#'>
                Liikluslab в СМИ
              </Link>
            </li>
            <li>
              <Link className='hyp' href='#'>
                Автошколам
              </Link>
            </li>
            <li>
              <Link className='hyp' href='#'>
                Контакты
              </Link>
            </li>
            <li>
              <Link className='hyp' href='#'>
                Экзамен по коду
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <header className='header-homepage'>
        <div className='header-content content'>
          <div className='header-center'>
            <div className='header-logo'>
              <Link href='/'>
                <img
                  className='main-ico'
                  alt='Liikluslab'
                  src='assets/icons/logos/logo.svg'
                />
                <img
                  className='reverse-ico'
                  alt='Liikluslab'
                  src='assets/icons/logos/logo-white.svg'
                />
              </Link>
            </div>
            <div className='header-nav-wrapper'>
              <Link href='#' className='header-hamburger'>
                <img
                  className='main-ico'
                  alt='menu-hamburher'
                  src='assets/icons/hamburger.svg'
                />
                <img
                  className='reverse-ico'
                  alt='menu-colsed'
                  src='assets/icons/close-white.svg'
                />
              </Link>
            </div>
            <div className='header-buttons'>
              <Link className='btn btn-link' href='#'>
                Войти
              </Link>
              <Link className='btn btn-transparent' href='#'>
                Войти
              </Link>
              <div className='lng-toggler'>
                <Link className='btn btn-link btn-lng' href='#'>
                  EST
                </Link>
                <div className='lng-popup'>
                  <Link className='btn btn-link btn-lng-item' href='#'>
                    END
                  </Link>
                  <Link className='btn btn-link btn-lng-item' href='#'>
                    RUS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
