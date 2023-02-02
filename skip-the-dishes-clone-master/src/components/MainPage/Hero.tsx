import React from 'react';
import './style/Hero.scss';
import { Navbar } from './Navbar';
import { useWindowSize } from '../../hooks/useWindowSize';

export const Hero = () => {
  const isMobile = useWindowSize();

  return (
    <div className='hero-container'>
      <Navbar />
      <div className='centerMenu'>
        <h1>DO WHAT FEEDS YOU.</h1>
        <form>
          <svg viewBox='0 0 24 24'>
            <g transform='translate(2 1.5)'>
              <path d='m9.738 3.7341c-1.6134 0-2.9214 1.3079-2.9214 2.9214s1.308 2.9215 2.9214 2.9215c1.6135 0 2.9214-1.308 2.9214-2.9215s-1.3079-2.9214-2.9214-2.9214'></path>
              <g transform='translate(11.06 8.7779)'>
                <path d='m4.4895 6.141c-1.013 0-1.8351-0.82212-1.8351-1.8351 0-1.013 0.82212-1.8351 1.8351-1.8351s1.8351 0.82212 1.8351 1.8351c0 1.013-0.82212 1.8351-1.8351 1.8351m0-6.1171c-2.4293 0-4.3999 1.9705-4.3999 4.3998 0 2.6202 2.7739 6.2312 3.9167 7.6076 0.25115 0.3023 0.7153 0.3023 0.96645 0 1.1428-1.3764 3.9167-4.9874 3.9167-7.6076 0-2.4293-1.9706-4.3998-4.3999-4.3998'></path>
              </g>
              <path d='m10.043 13.202c0-0.85982 0.19843-1.6741 0.55143-2.3999-0.28055-0.012903-0.58599-0.019078-0.92516-0.019078-2.1851 0-3.0721 0.36645-4.4966 0.98055-0.38857 0.16737-0.74627 0.6682-1.0629 1.2972 1.1221 1.9471 3.2236 3.2617 5.6276 3.2617 0.35871 0 0.71051-0.029862 1.0535-0.086083-0.49613-1.132-0.74802-2.1484-0.74802-3.0344'></path>
              <g transform='translate(0 .02212)'>
                <path d='m11.729 18.016l-0.0035945-0.0059908c-0.20184-0.33843-0.58461-0.52986-0.9753-0.47834-0.33143 0.043687-0.66931 0.066636-1.0125 0.066636-4.4365 0-8.0186-3.7276-7.779-8.2154 0.21954-4.1123 3.6668-7.3686 7.785-7.3654 3.505 0.0025806 6.4741 2.3324 7.4464 5.5242 0.076958 0.25263 0.2553 0.46332 0.49853 0.56627 0.66912 0.28304 1.2712 0.69438 1.7747 1.2039-0.25908-5.1641-4.541-9.2681-9.7754-9.2418-5.3699 0.026912-9.739 4.4632-9.6876 9.8328 0.050968 5.3345 4.3911 9.643 9.7375 9.643 0.94452 0 1.8574-0.13493 2.721-0.38581-0.24682-0.3647-0.49318-0.74765-0.72959-1.1441'></path>
              </g>
            </g>
          </svg>
          <input placeholder='Enter Your Address' />
          <button>
            <svg
              focusable='false'
              viewBox='0 0 24 24'
              color='black'
              aria-hidden='true'
            >
              <path d='M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,8,12,8z M20.94,11C20.48,6.83,17.17,3.52,13,3.06V2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v1.06C6.83,3.52,3.52,6.83,3.06,11H2c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h1.06c0.46,4.17,3.77,7.48,7.94,7.94V22c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-1.06c4.17-0.46,7.48-3.77,7.94-7.94H22c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H20.94z M12,19c-3.87,0-7-3.13-7-7s3.13-7,7-7s7,3.13,7,7S15.87,19,12,19z'></path>
            </svg>
          </button>
        </form>
        <button>Find Restaurants In Your Area</button>
      </div>
      {isMobile ? (
        <img src='images/mobile-large.jpeg' alt='mobile-large' />
      ) : (
        <img src='images/desktop-large.jpeg' alt='desktop-large' />
      )}
    </div>
  );
};
