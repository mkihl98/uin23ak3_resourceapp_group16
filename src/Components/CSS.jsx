import { resources } from "../assets/ressurser"

export default function CSS () {

  const FilterCSS = resources.filter(item => item.category === "css")

    return (
        <div>
            <h2 id="text">CSS</h2>

            <ul>
              {FilterCSS.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.title}</a>
            </li>
            ))}
            </ul>
        </div>
    )
}