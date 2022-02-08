import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'; // Desafio componentes I



const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">

                        <a class="navbar-brand" href="#"> LOGO </a> 

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                             <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">

                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>

                                <li class="nav-item">
                                <a class="nav-link" href="#"> Contacto </a>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#"> Velas </a></li>
                                        <li><a class="dropdown-item" href="#"> Perfuminas </a></li>
                                        <li><a class="dropdown-item" href="#"> Difusores </a></li>
                                    </ul>
                                </li>

                                <li>
                                <button type="button" class="btn btn-outline-secondary"><ShoppingCartOutlined/></button>
                                </li>
                            </ul>
                        </div>

                    </div>
            </nav>

        </div>
    )
}

export default Navbar
