import { socials } from "../utils/constants";
import ContactContainer from "./ContactContainer";

function Footer() {
  return (
    <div class="w-full h-[24rem] flex flex-col justify-between p-12 rounded-2xl bg-gradient-to-br from-[#9795EF] to-[#F9C5D1] text-white font-light">
        <div class="flex flex-col gap-y-4">
            <p class="text-4xl font-semibold mb-12">Want to get something developed ?</p>
            <p>Feel free to contact me using email or pm me on the mentioned social accounts.</p>
            <a class="hover:underline" href="mailto:realanesdiaf@gmail.com">realanesdiaf@gmail.com</a>
        </div>
        <ContactContainer/>
    </div>
  )
}

export default Footer