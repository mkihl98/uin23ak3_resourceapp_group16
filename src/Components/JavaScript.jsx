import { resources } from "../assets/ressurser"//imports the different resources from ressurser

export default function JavaScript () {

  const filterJava = resources.filter(item => item.category === "javascript")//filters through the different categories until it finds "javascript"

    return (
        <div>
            <h2 id="text">Javascript</h2>

            <ul>
              {filterJava.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.title}</a>
                {/*after finding the correct category, it uses the title as a means to show the link*/ }
            </li>
            ))}
            </ul>
        </div>
    )
}