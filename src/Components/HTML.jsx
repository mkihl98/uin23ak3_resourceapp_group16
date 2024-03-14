import { resources } from "../assets/ressurser"

export default function HTML () {

  const FilterHTML = resources.filter(item => item.category === "html")

    return (
        <div>
            <h2 id="text">HTML</h2>

            <ul>
              {FilterHTML.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.title}</a>
            </li>
            ))}
            </ul>
        </div>
    )
}