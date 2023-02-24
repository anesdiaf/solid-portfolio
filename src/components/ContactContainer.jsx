import { For } from 'solid-js';
import { socials } from '../utils/constants';

function ContactContainer() {
  return (
    <div class="flex items-center gap-x-4">
    <button class="bg-neutral-800 hover:bg-neutral-800/90 text-white px-8 h-12 rounded-full transition">Contact me</button>
    <div class="flex gap-x-3">
        <For each={socials}>{(link, i) => 
            <a href={link.url} target='_blank' rel="noreferrer" class='text-neutral-800 hover:text-white'>
                {link.icon}
            </a>
        }
        </For>
    </div>
</div>
  )
}

export default ContactContainer