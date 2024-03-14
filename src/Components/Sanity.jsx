import { resources } from "../assets/ressurser"

export default function HeadlessCMS () {

  const filterCMS = resources.filter(item => item.category === "headless-cms")

    return (
        <div>
            <h2 id="text">Headless CMS</h2>

            <ul>
              {filterCMS.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.title}</a>
            </li>
            ))}
            </ul>
        </div>
    )
}