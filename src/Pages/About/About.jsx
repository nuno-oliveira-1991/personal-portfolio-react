import { useModeContext } from "../../contexts/ModeContext";
import style from "./about-styles.module.scss";

const About = () => {
  const {
    isMobile,
  } = useModeContext();

  return (
    <div className={style['container']}>
      <div className={style['about-section']}>
        {!isMobile && <h2>About</h2>}
        <p>
          Nuno O. is an architect, web developer and multi-disciplinary artist, based in Porto. He is a founding member of the art collective and record label <a href="http://www.faveladiscos.pt/" target="_blank">Favela Discos</a>, where he develops most of his artistic and cultural promotion practices since 2013.
        </p>  
        <p>
          As an artist he works in various media, from video to painting, from music to performance, navigating on those fields or their intersections. As a musician he works with various instruments and genres and is part of projects such as <a href="https://www.youtube.com/watch?v=r1vMcjZKh34" target="_blank">Batsaykhan</a>, <a href="https://www.youtube.com/watch?v=HBruemHIxEA" target="_blank">Sistro</a>, <a href="https://www.youtube.com/watch?v=UbNGOwa8Xwk" target="_blank">Judas Triste</a>, <a href="https://www.youtube.com/watch?v=5Lq8s52Yzpk" target="_blank">Milteto</a>, and <a href="https://www.youtube.com/watch?v=tCFxqheyso8" target="_blank">José Pinhal Post-Mortem Experience</a>. He regularly participates in the collective efforts of Favela Discos, such as <a href="https://www.youtube.com/watch?v=bt-3gihf3YY" target="_blank">residencies</a>, site-specific compositions, performances and exhibitions, as well as being involved in actions with other collectivities or institutions.
        </p>
        <p>
          Currently working as a Web Developer.
        </p>
      </div>
      <div className={style['contact-section']}>
        <h2>Contact</h2>
        <a href="mailto:contact.nuno.o@gmail.com" target="_blank">contact.nuno.o@gmail.com</a>
        <a href="https://www.instagram.com/nuno.olivieri/" target="_blank">Instagram</a>
      </div>
    </div>
  )
};

export default About;