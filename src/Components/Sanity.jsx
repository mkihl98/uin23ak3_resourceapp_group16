import { resources } from "../assets/ressurser"

export default function Sanity () {

  const filterSanity = resources.filter(item => item.category === "headless-cms")

    return (
        <div>
            <h2 id="text">Sanity</h2>

            <ul>
              {filterSanity.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.title}</a>
            </li>
            ))}
            </ul>
        </div>
    )
}