import { resources } from "../assets/ressurser"//imports the different resources from ressurser

export default function CSS () {

  const FilterCSS = resources.filter(item => item.category === "css")//filters through the different categories until it finds "css"

    return (
        <div>
            <h2 id="text">CSS</h2>

            <ul>
              {FilterCSS.map((item, index) => ( 
              <li key={index}>
                <a href={item.url}>{item.title}</a>
                {/*after finding the correct category, it uses the title as a means to show the link*/ }
            </li>
            ))}
            </ul>
        </div>
    )
}