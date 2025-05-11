'use client'
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';

import '@/styles/footer.css'; 
export default function Footer() {
  return (
    <footer className="footer">
      <div className='upper-footer'>
          <div className='first'>
          <Link href="/">
          <Image
            src="/assets/Logos/ClassyGamesStudios_Logo.webp"
            alt="Logo"
            width={50}
            height={50}
            className='footer-logo'
          />
        </Link>
        <p className='first-text'>
        Creating games that ignite your imagination
        and bring out your inner child.
        </p>
        <div className='socials'>
          <Link href= 'https://www.linkedin.com/company/classy-games-studios' target="_blank"  title="LinkedIn">
         <Image
                         src={`/assets/SocialIcons/icon1.png`}
                         alt={`icon`}
                         width={25}
                         height={25}
                         className="social-icon"
                       />
          </Link>
          <Link href='https://store.steampowered.com/developer/classygamesstudios' target="_blank"  title="Steam">
          <Image
                         src={`/assets/SocialIcons/icon2.png`}
                         alt={`icon`}
                         width={25}
                         height={25}
                         className="social-icon"
                       />
          </Link>
          <Link href='https://discord.com/invite/RnFAM8xV' target="_blank"  title="Discord">
          <Image
                         src={`/assets/SocialIcons/icon3.png`}
                         alt={`icon`}
                         width={25}
                         height={25}
                         className="social-icon"
                       />
          </Link>
          <Link href='https://www.reddit.com/r/classygamesstudios/' target="_blank"  title="Reddit">
          <Image
                         src={`/assets/SocialIcons/icon4.png`}
                         alt={`icon`}
                         width={25}
                         height={25}
                         className="social-icon"
                       />
          </Link>
          <Link href='https://www.tiktok.com/@classygamesstudios' target="_blank" title="TikTok">
          <Image
                         src={`/assets/SocialIcons/icon5.png`}
                         alt={`icon`}
                         width={25}
                         height={25}
                         className="social-icon"
                       />
          </Link>
          <Link href='https://bsky.app/profile/classygamesstudios.com' target="_blank"   title="Bluesky">
          <Image
                         src={`/assets/SocialIcons/icon7.png`}
                         alt={`icon`}
                         width={25}
                         height={25}
                         className="social-icon"
                       />
          </Link>
          <Link href='https://www.youtube.com/@ClassyGamesStudios' target="_blank"  title="YouTube">
          <Image
                         src={`/assets/SocialIcons/icon6.png`}
                         alt={`icon`}
                         width={25}
                         height={25}
                         className="social-icon"
                       />
          </Link>
          
          <Link href='https://www.instagram.com/classy_games_studios/' target="_blank" title="Instagram">
          <Image
                         src={`/assets/SocialIcons/icon8.png`}
                         alt={`icon`}
                         width={25}
                         height={25}
                         className="social-icon"
                       />
          </Link>
        </div>
          </div>
          <div className='second'>
            <h2>MENU</h2>
            <Link href="/" >Home</Link>
            <Link href="/about-us" >About</Link>
            <Link href="/games/orbital" >Orbital</Link>
            <Link href="/games/sillysuspects" >SillySuspects</Link>

          </div>
          <div className='third'>
          <h2>COMPANY</h2>
            <Link href="/contact" >Contact</Link>
            <Link href="/careers" >Careers</Link>
            <Link href="/" >Privacy Policy</Link>
            <Link href="/" >Terms of Service</Link>

          </div>
          <div className='fourth'>
          <h2>CONTACT</h2>
          <div className='btn-cnt'>
          <Link href="mailto:info@classygamesstudios.com" className='email-container'>
          <FaEnvelope  size={25} className='cnt-icon'/>
          <div className='cnt'>
            <div className='title'>
              Email:
            </div>
            <div className='email'>
                info@classygamesstudios.com
            </div>
            </div>
          </Link>
          <Link href = "https://www.google.com/maps?q=Northern+Ireland+and+United+Arab+Emirates"  target = "_blank" className='location-container'>
          
          <FaMapMarkerAlt  size={25} className='cnt-icon'/>
          <div className='cnt'>
            <div className='title'>
              Location:
            </div>
            <div className='location'>
            Northern Ireland<br></br> & United Arab Emirates

            </div>
            </div>
          </Link>
          </div>
          </div>

      </div>
      <div className='lower-footer'>
        <div className='l'><span>© 2025 </span>Classy Games Studios</div>   
      </div>
      
    </footer>
  );
}