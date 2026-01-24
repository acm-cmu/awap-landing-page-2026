import "../styles/About.css";
import FAQButton from "./FAQButton";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="section-header">What's AWAP?</div>
        <div>
          <p className="about-description">
            Algorithms With A Purpose (AWAP) is an annual algorithms hackathon
            where teams of up to 4 students create solutions to an open-ended
            problem set in society and compete to win prizes.
          </p>
        </div>
        <FAQButton
          key={2}
          question="Q: What is this year's game about?"
          answer="This year's game is a competitive, real-time cooking challenge! Teams program autonomous bots to gather ingredients, cook dishes, and fulfill orders while competing head-to-head against other teams. The team with the best algorithm wins!"
        />
        <FAQButton
          key={3}
          question="Q: What if I don't have a team yet?"
          answer="No worries! We will have a team matching channel on Discord :) Join at https://discord.gg/G7k63AYd"
        />
        <FAQButton
          key={1}
          question="Q: Do I need to have experience?"
          answer="Not necessarily! The competition will have two divisions, experienced and
                    beginner, so that each team will have the chance to
                    participate on a level playing field. Only basic Python knowledge is needed to start developing competitive algorithms 
                    from our game guide."
        />
        <FAQButton
          key={4}
          question="Q: But what if I'm really, really beginner, like really?"
          answer="We will have office hours available to help you out!"
        />
        <FAQButton
          key={5}
          question="Q: Will there be prizes or swag?"
          answer="Yes, we'll have prizes for both the beginner and advanced track. We'll also have free food, swag, and t-shirts for all participants!"
        />
        <FAQButton
          key={7}
          question="Q: Who runs this amazing event?!"
          answer={
            <>
              AWAP is run by the{" "}
              <a
                href="https://www.acmatcmu.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--main-color)", fontWeight: 600 }}
              >
                ACM@CMU chapter
              </a>
              , a student organization at Carnegie Mellon University.
            </>
          }
        />
        <FAQButton
          key={6}
          question="Q: What if I have more questions?"
          answer="Email us at acm-exec@cs.cmu.edu, or join our Discord server at https://discord.gg/G7k63AYd!"
        />
      </div>
    </div>
  );
};

export default About;
