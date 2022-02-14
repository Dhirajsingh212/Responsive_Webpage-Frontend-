import React from 'react';
import './app.css';
import { useState } from 'react';

export default function App() {
  const [flag, setflag] = useState(false);

  return (
    <>
      {/* ************NAVBAR*************** */}
      <div className="app">
        <div className="navbar">
          <h4 className="apptitle">navbar</h4>
          <ul className="appul">
            <li className="appli">Home</li>
            <li className="appli">About</li>
            <li className="appli">Contact</li>
          </ul>
          <button
            className="appbtn"
            onClick={() => {
              setflag(!flag);
            }}
          >
            Menu
          </button>
        </div>
      </div>
      <div className={flag ? 'appdrop' : 'appdropalt'}>
        <ul className="dropdown">
          <li className="appdropli">Home</li>
          <li className="appdropli">About</li>
          <li className="appdropli">Contact</li>
        </ul>
      </div>
      {/* **************************************************** */}

      {/* ********************HEADER************************** */}

      <div className="appheader">
        <div className="appheaderpara container">
          <h1>this is heading</h1>
          <p>
            Ipsum commodo ullamco aute dolor minim pariatur est sint incididunt
            labore incididunt incididunt mollit. Pariatur adipisicing sunt in id
            dolor.
          </p>
        </div>
        <img
          src="https://staticg.sportskeeda.com/editor/2021/11/68be6-16377634656546-1920.jpg"
          alt="hellow"
        />
      </div>

      {/* **************************************************** */}

      {/* ************MAIN COMPONENT********************* */}
      <div className="main container">
        <img
          className="container"
          src="https://cdn.mos.cms.futurecdn.net/g4gP5HwwWKnAtRpE4nYAkQ.jpg"
          alt="hellow"
        />
        <div className="mainpara container">
          <p>
            Ipsum commodo ullamco aute dolor minim pariatur est sint incididunt
            labore incididunt incididunt mollit. Pariatur adipisicing sunt in id
            dolor. Magna minim ullamco nostrud aliquip laborum sit laborum
            anihsdf aliquip amet in reprehenderit excepteur.Ipsum commodo
            ullamco aute dolor minim pariatur est sint incididunt labore
            incididunt incididunt mollit. Pariatur adipisicing sunt in id dolor.
            Magna minim ullamco nostrud aliquip laborum sit laborum anihsdf
            aliquip amet in reprehenderit excepteur.
          </p>
          <button className="mainparabtn">more</button>
        </div>
      </div>

      <div className="main container">
        <img
          className="container"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVXSOM9iThmCyP6MnuIXSMrsR2qs9g0A6wZD0FHILaHKBo82ApOXmTDWf6gbiyNEwnPI&usqp=CAU"
          alt="hellow"
        />
        <div className="mainpara container">
          <p>
            Ipsum commodo ullamco aute dolor minim pariatur est sint incididunt
            labore incididunt incididunt mollit. Pariatur adipisicing sunt in id
            dolor. Magna minim ullamco nostrud aliquip laborum sit laborum
            anihsdf aliquip amet in reprehenderit excepteur.Ipsum commodo
            ullamco aute dolor minim pariatur est sint incididunt labore
            incididunt incididunt mollit. Pariatur adipisicing sunt in id dolor.
            Magna minim ullamco nostrud aliquip laborum sit laborum anihsdf
            aliquip amet in reprehenderit excepteur.
          </p>
          <button className="mainparabtn">more</button>
        </div>
      </div>
      {/* *************************************************** */}

      {/* *******************FOOTER************************** */}

      <div className="appfooter">
        <p className="container">
          Ipsum commodo ullamco aute dolor minim pariatur est sint incididunt
          labore incididunt incididunt mollit. Pariatur adipisicing sunt in id
          dolor. Magna minim ullamco nostrud aliquip laborum sit laborum anihsdf
          aliquip amet in reprehenderit excepteur.Ipsum commodo ullamco aute
          dolor minim pariatur est sint incididunt labore incididunt.
        </p>
        <h6 className="my-0">
          Copyright 1999-2022 by Refsnes Data. All Rights Reserved.
        </h6>
      </div>

      {/* *************************************************** */}
    </>
  );
}
