import { resources } from "../assets/ressurser"//imports the different resources from ressurser

export default function ReactComponent () {

  const FilterReact = resources.filter(item => item.category === "react")//filters through the different categories until it finds "react"

    return (
        <div>
            <h2 id="text">React</h2>

            <ul>
              {FilterReact.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.title}</a>
                {/*after finding the correct category, it uses the title as a means to show the link*/ }
            </li>
            ))}
            </ul>
        </div>
    )
}