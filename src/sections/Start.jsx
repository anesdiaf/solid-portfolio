import { ContactContainer } from "../components";

function Start() {
  return (
    <div class="flex gap-x-5">
        <div class="w-[70%] h-[28rem] flex flex-col justify-between bg-gradient-to-br from-[#eff9fe] via-[#daeeff] to-[#6db6f9]  text-neutral-800 p-12 rounded-3xl font-light">
            <div>
                <p class="text-5xl font-semibold mb-12 leading-[4.5rem]">Hi, my Anes Diaf, <br/>I'm a Software Engineer</p>
                <p>I Design & Develop Accessible, Elegant Apps using modern tech stacks.</p>
            </div>
            <ContactContainer/>
        </div>
        <div class="w-[30%] h-[28rem] rounded-3xl overflow-hidden">
            <img class="object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Profile"/>
        </div>
    </div>
  )
}

export default Start