# Kiwi

React project template which combines:

  * react
  * react-router-component
  * react-async
  * cortex (model layer)
  * express
  * absurd (css precompiler)


Quickstart:

    % git clone https://github.com/shilpan/react-quickstart.git
    % npm install
    % node server.js

Compiling and live editing/compiling in absurd (currently live reload is pref'd off):

  % grunt css
Start editing the absurd file, it will automatically be compiled into css

TODOs:

  * have a DEV and PROD environment
  * attach live reloading script while in DEV mode
  * defer bundle loading (figure out why it doesn't work with the current configuration)
  * direct data access during server rendering (so we don't have to do XHR requests from server to get data)
