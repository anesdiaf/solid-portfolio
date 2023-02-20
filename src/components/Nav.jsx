import { section_links } from "../utils/constants"

function Nav() {
  return (
    <nav class="flex justify-between items-center py-4 px-2">
        <div class="flex items-center gap-x-2 text-lg font-medium">
            <div class="bg-blue-500 w-5 h-5 rounded-full pt-1"></div>
            <p class="">
                Anes
                <span class="text-blue-500 text-2xl">.</span>
                Dev
            </p>
        </div>
        <ul class="flex items-center gap-x-4">
            {section_links.map(link => {
                const {title} = link;
                return(
                    <a href={'#' + title}>{title}</a>
                )
            })}
        </ul>
    </nav>
  )
}

export default Nav