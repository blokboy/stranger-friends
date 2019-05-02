import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import 'bulma/css/bulma.css'

function LandingPage() {
    return(
        <section class="hero is-info is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
            <p class="title">
                Stranger Friends
            </p>
            <p class="subtitle">
                text strangers while maintaining privacy.
            </p>
            </div>
        </div>

        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
                <ul>
                <li>
                    <a>Register</a>
                </li>
                <li>
                    <a>Log In</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
        </section>
    )
}

export default LandingPage