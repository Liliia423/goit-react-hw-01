import './Profile.module.css'
//import { useState } from 'react'
//import viteLogo from '/vite.svg'

export default function Profile() {
    //const [count, setCount] = useState(0)
    return (
        <>
<div>
    <div>
        <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
        />
        <p>Petra Marica</p>
        <p>@pmarica</p>
        <p>Salvador, Brasil</p>
    </div>

    <ul>
        <li>
            <span>Followers</span>
            <span>1000</span>
        </li>
        <li>
            <span>Views</span>
            <span>2000</span>
        </li>
        <li>
            <span>Likes</span>
            <span>3000</span>
        </li>
    </ul>
</div>
            
            {/*<div>
                <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
        </a >
            </div >
            <h1>User name</h1>
            <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        </div>
        <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
        </>
    )
}
