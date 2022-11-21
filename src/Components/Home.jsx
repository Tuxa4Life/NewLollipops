import React, {useState} from "react";
import styles from '../Assets/Styles/Home.css'
import DisplayCards from "./DisplayCards";
import PriceCard from "./PriceCard";

const Home = () => {
    const [priceCard, setPriceCard] = useState(false)

    const [data, setData] = useState([
        {
            header: 'ფასები',
            btn: 'გახსნა',
            func: () => setPriceCard(!priceCard) ,
            img: 'https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/314936046_571316681661991_8516809869554653512_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGYIHyTFucjAID-1KI4N6nskV2vTVe686ORXa9NV7rzo_A9UBn8eP0atgBuudeMVa3Ox_ZOoeMvZI4CxZnu0TTt&_nc_ohc=YmvGJ_GdKg0AX8Lv7YO&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfAweBJLD9FMcwHh251bTCCKXjcOec_rPTE1rIM2U_Wf9A&oe=637FB1A5'
        },
        {
            header: 'გალერეა',
            btn: 'გახსნა',
            func: () => {
                window.history.pushState({}, '', '/gallery')

                const navEvent = new PopStateEvent('popstate')
                window.dispatchEvent(navEvent)
            },
            img: 'https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/311595696_547633674030292_6057187144871349001_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHRwStZOu-RuH1cJSFkm_ueq-9Nm6oXWBur702bqhdYG2squ1zSi-cO5l6RvTTi9sMldMxV-OQR5I1RuFsoDD7B&_nc_ohc=jOtho1E20xQAX92Dn_4&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfDDtYPzU9x3uiu5C07TWoALceF0YG74VYbH3VB15Rb_Cw&oe=637F11C8'
        },
        {
            header: 'სცენები',
            btn: 'გახსნა',
            func: () => window.location.href = 'https://www.facebook.com/lollipopsstudiorustavi',
            img: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/315908012_576643024462690_3300716531271925796_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG7f0LXOObSAU9NtDKbzJHZsogfV5py_layiB9XmnL-Vp9v2tmkNwOz_5uG2ORSpUm74J6xHQxORg2-yNYR1G4O&_nc_ohc=iKoqBPXlKfAAX-hNaFo&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfB5MsQ78ZdOiJI6VZwqopkJTUkAgIMasAf-F5i6dHmSkw&oe=637FAC27'
        },
        {
            header: 'პირობები',
            btn: 'გახსნა',
            func: () => window.location.href = 'https://www.facebook.com/messages/t/532847357102265',
            img: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/314372539_568531481940511_2847317218502150683_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGOMa8Pm3qHR-8KW34-za7eYlerstpwLMViV6uy2nAsxURJkkh6Hesmf18y7Y4ZNwaAV-8IGKKpWC1_jXLUghkj&_nc_ohc=FlOWf1ag-hEAX9S86O_&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfCrVUZREZEWv3FeJotbz6ZhjOMKVg-cZh0Uta3KehOLoQ&oe=637EAC4F'
        },
    ])



    return (
        <main style={styles}>
            { priceCard ? <PriceCard closeFunc={() => setPriceCard(!priceCard)}/> : null }
            <DisplayCards data={data}/>
        </main>
    )
}

export default Home;