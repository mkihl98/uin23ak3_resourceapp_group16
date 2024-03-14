import { resources } from "../assets/ressurser"

export default function ReactComponent () {

  const FilterReact = resources.filter(item => item.category === "react")

    return (
        <div>
            <h2 id="text">React</h2>

            <ul>
              {FilterReact.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.title}</a>
            </li>
            ))}
            </ul>
        </div>
    )
}