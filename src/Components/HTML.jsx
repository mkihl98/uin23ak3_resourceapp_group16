import { resources } from "../assets/ressurser"//imports the different resources from ressurser

export default function HTML () {

  const FilterHTML = resources.filter(item => item.category === "html")//filters through the different categories until it finds "html"

    return (
        <div>
            <h2 id="text">HTML</h2>

            <ul>
              {FilterHTML.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.title}</a>
                {/*after finding the correct category, it uses the title as a means to show the link*/ }
            </li>
            ))}
            </ul>
        </div>
    )
}