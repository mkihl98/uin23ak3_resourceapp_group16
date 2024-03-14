import { resources } from "../assets/ressurser"//imports the different resources from ressurser

export default function HeadlessCMS () {

  const filterCMS = resources.filter(item => item.category === "headless-cms")//filters through the different categories until it finds "headless-cms"

    return (
        <div>
            <h2 id="text">Headless CMS</h2>

            <ul>
              {filterCMS.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.title}</a>
                {/*after finding the correct category, it uses the title as a means to show the link*/ }
            </li>
            ))}
            </ul>
        </div>
    )
}