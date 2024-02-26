import React,{ useState} from 'react'

function Screen6(props) {
    const [tab,setTab] = useState(0)

    const toggleTab =(tab) => {
        setTab(tab)
    }


return(
    <div>
        <h1>Tab Switching using state</h1>

        <nav className='tab'>
            <a onClick={() => toggleTab('home')} href="#">Home</a>
            <a onClick={() => toggleTab('about')} href="#">About</a>
            <a onClick={() => toggleTab('jobs')} href="#">Jobs</a>
            <a onClick={() => toggleTab('services')} href="#">Services</a>
            <a onClick={() => toggleTab('products')} href="#">Products</a>
        </nav>

        <section className="container">
            {
                tab === "home" ? (
                    <div id="home">
                        <h1>Home Section</h1>
                    </div>
                ) : null
            }
            {
                tab === "about" ? (
                    <div id="about">
                        <h1>About Section</h1>
                    </div>
                ) : null
            }
            {
                 tab === "jobs" ? (
                    <div id="job">
                        <h1>Jobs Section</h1>
                    </div>
                ) : null
            }
            {
                 tab === "services" ? (
                    <div id="service">
                        <h1>Service Section</h1>
                    </div>
                ) : null
            }
            {
                 tab
                  === "products" ? (
                    <div id="product">
                        <h1>Products Section</h1>
                    </div>
                ) : null
            }
        </section>
    </div>
)
        }


export default Screen6