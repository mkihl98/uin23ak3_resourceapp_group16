import { resources } from "../assets/ressurser"

export default function JavaScript () {

  const filterJava = resources.filter(item => item.category === "javascript")

    return (
        <div>
            <h2 id="text">Javascript</h2>

            <ul>
              {filterJava.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.title}</a>
            </li>
            ))}
            </ul>
        </div>
    )
}