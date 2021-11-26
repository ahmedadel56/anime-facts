import React from 'react';

const Nav = () => (
  <div className="container header-container p-2">

    <div className="arrow-link row">
      <div className="col-9 row mx-0 px-0">
        <p className=" my-2 p-0 text-center col-9">
          Click on  your Anime
        </p>
        <p className=" my-2 p-0 text-center col-3">

          <span className="mic"><i className="fa fa-microphone" aria-hidden="true" /></span>
          <span><i className="fa fa-cog" aria-hidden="true" /></span>
        </p>

      </div>

    </div>

  </div>
);
export default Nav;
