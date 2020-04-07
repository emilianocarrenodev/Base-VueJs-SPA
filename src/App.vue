<template>
  <div id="app">

    <header>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <a class="navbar-brand" href="#">Alinea</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link> 
              </li>
              <li class="nav-item">                
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
            </ul>
          </div>

        </nav>
      </div>
    </header>

    <main>
      <div class="container-fluid">
        <router-view/>
      </div>
    </main>

  </div>
</template>