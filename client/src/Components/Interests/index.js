import React, { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import './index.css'

function Interests() {
    return(
        <div class="container">

            <div class="categories">
                <button class="button is-small">Indoor Hobbies</button>
                <button class="button is-small">Outdoor Hobbies</button>
                <button class="button is-small">Collection Hobbies</button>
                <button class="button is-small">Competetive Hobbies</button>
                <button class="button is-small">Observation Hobbies</button>
            </div>
      
            
            <details>
                <summary>
                    A
                </summary>
                <div>
                    <button class="button">Acrobatics</button>
                    <button class="button">Acting</button>
                    <button class="button">Action Figures</button>
                    <button class="button">Air Sports</button>
                    <button class="button">Aircrafts</button>
                    <button class="button">Airsoft</button>
                    <button class="button">Amateur Radio</button>
                    <button class="button">American Football</button>
                    <button class="button">Animation</button>
                    <button class="button">Antiquing</button>
                    <button class="button">Antiquities</button>
                    <button class="button">Aquascaping</button>
                    <button class="button">Archery</button>
                    <button class="button">Art</button>
                    <button class="button">Astrology</button>
                    <button class="button">Astronomy</button>
                    <button class="button">Astrophysics</button>
                    <button class="button">Auto Racing</button>
                    <button class="button">Automobiles</button>
                    <button class="button">Aviation</button>
                </div>
            </details>

            <details>
                <summary>
                    B
                </summary>
                <div>
                    <button class="button">Backpacking</button>
                    <button class="button">Badminton</button>
                    <button class="button">Baking</button>
                    <button class="button">Base Jumping</button>
                    <button class="button">Baseball</button>
                    <button class="button">Basketball</button>
                    <button class="button">Baton Twirling</button>
                    <button class="button">Beach Volleyball</button>
                    <button class="button">Beatboxing</button>
                    <button class="button">Beekeeping</button>
                    <button class="button">Beer</button>
                    <button class="button">Billiards</button>
                    <button class="button">Birdwatching</button>
                    <button class="button">Blacksmithing</button>
                    <button class="button">Board Games</button>
                    <button class="button">Board Sports</button>
                    <button class="button">Bodybuilding</button>
                    <button class="button">Book Restoration</button>
                    <button class="button">Books</button>
                    <button class="button">Bowling</button>
                    <button class="button">Boxing</button>
                    <button class="button">Brazilian Jiu-Jitsu</button>
                    <button class="button">Breadmaking</button>
                    <button class="button">Breakdancing</button>
                    <button class="button">Brewing</button>
                    <button class="button">Bridge</button>
                    <button class="button">Butterfly Watching</button>
                </div>
            </details>

            <details>
                <summary>
                    C
                </summary>
                <div>
                    <button class="button">Cabaret</button>
                    <button class="button">Calligraphy</button>
                    <button class="button">Camping</button>
                    <button class="button">Candlemaking</button>
                    <button class="button">Canoeing</button>
                    <button class="button">Canyoning</button>
                    <button class="button">Cards</button>
                    <button class="button">Cartography</button>
                    <button class="button">Cheerleading</button>
                    <button class="button">Cheesemaking</button>
                    <button class="button">Chess</button>
                    <button class="button">Climbing</button>
                    <button class="button">Coffee Roasting</button>
                    <button class="button">Coins</button>
                    <button class="button">Collecting</button>
                    <button class="button">Color Guard</button>
                    <button class="button">Color Theory</button>
                    <button class="button">Coloring</button>
                    <button class="button">Comic Books</button>
                    <button class="button">Composting</button>
                    <button class="button">Computational Thinking</button>
                    <button class="button">Computer Programming</button>
                    <button class="button">Computing</button>
                    <button class="button">Confectionery</button>
                    <button class="button">Cooking</button>
                    <button class="button">Cosplaying</button>
                    <button class="button">Couponing</button>
                    <button class="button">Creative Writing</button>
                    <button class="button">Cricket</button>
                    <button class="button">Crocheting</button>
                    <button class="button">Cross-Stitch</button>
                    <button class="button">Crossword Puzzles</button>
                    <button class="button">Cryptography</button>
                    <button class="button">Curling</button>
                    <button class="button">Cycling</button>
                </div>
            </details>

            <details>
                <summary>
                    D
                </summary>
                <div>
                    <button class="button">D-I-Y</button>
                    <button class="button">Dance</button>
                    <button class="button">Darts</button>
                    <button class="button">Debate</button>
                    <button class="button">Deltiology</button>
                    <button class="button">Diecasting</button>
                    <button class="button">Digital Art</button>
                    <button class="button">Disc Golf</button>
                    <button class="button">Distro Hopping</button>
                    <button class="button">Dogs</button>
                    <button class="button">Dowsing</button>
                    <button class="button">Drama</button>
                    <button class="button">Drawing</button>
                    <button class="button">Driving</button>
                </div>
            </details>

            <details>
                <summary>
                    E
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    F
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    G
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    H
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    I
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    J
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    K
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    L
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    M
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    N
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    O
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    P
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    Q
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    R
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    S
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>

            <details>
                <summary>
                    T
                </summary>
                <div>
                    <button class="button">Default</button>
                </div>
            </details>
           

        </div>
       
    )
}

export default Interests