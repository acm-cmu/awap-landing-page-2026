import React, { useState } from "react";
import "../styles/Sponsors.css";   // keep your existing stylesheet

// Reuse ResponsiveImage logic
function ResponsiveImage({ src, alt, className }) {
  const publicSrc = `${process.env.PUBLIC_URL}/${src}`;
  const webpSrc = publicSrc.replace(/\.png$/, ".webp");

  const handleError = (e) => {
    if (e.target.src.endsWith(".webp")) {
      e.target.src = publicSrc;
    }
  };

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" onError={handleError} />
      <source srcSet={publicSrc} type="image/png" />
      <img
        src={publicSrc}
        alt={alt}
        className={className}
        loading="lazy"
        onError={handleError}
      />
    </picture>
  );
}

export default function Sponsors() {
  const sponsors = [
    {
      name: "Ripple",
      image: "images/sponsors/ripple.png",
      link: "https://ripple.com/impact/ubri/",
    },
    {
      name: "QNX",
      image: "images/sponsors/qnx.png",
      link: "https://qnx.software/en",
    },
    {
      name: "Citadel",
      image: "images/sponsors/citadel.png",
      link: "https://www.citadel.com",
    },
    {
      name: "The Trade Desk",
      image: "images/sponsors/thetradedesk.png",
      link: "https://www.thetradedesk.com/us",
    },
    {
      name: "HRT",
      image: "images/sponsors/hrt.png",
      link: "https://www.hudsonrivertrading.com/",
    },
    {
      name: "Stripe",
      image: "images/sponsors/stripe.png",
      link: "https://stripe.com",
    },
    {
      name: "D. E. Shaw",
      image: "images/sponsors/deshaw.png",
      link: "https://www.deshaw.com",
    },
    {
      name: "Jane Street",
      image: "images/sponsors/janestreet.png",
      link: "https://www.janestreet.com",
    },
    {
      name: "Anthropic",
      image: "images/sponsors/anthropic.png",
      link: "https://www.anthropic.com",
    },
    {
      name: "Ethereum",
      image: "images/sponsors/ethereum.png",
      link: "https://ethereum.org",
    },
    {
      name: "Jump Trading",
      image: "images/sponsors/jump.png",
      link: "https://www.jumptrading.com/",
    },
    {
      name: "Y Combinator",
      image: "images/sponsors/YC.png",
      link: "https://www.ycombinator.com/",
    },
    {
      name: "Bloomberg",
      image: "images/sponsors/bloomberg.png",
      link: "https://www.bloomberg.com/",
    },
    {
      name: "Roblox",
      image: "images/sponsors/roblox.png",
      link: "https://corp.roblox.com/",
    },
        {
      name: "Lockheed Martin",
      image: "images/sponsors/lockheed.png",
      link: "https://www.lockheedmartin.com",
    },
    {
      name: "Sandia",
      image: "images/sponsors/sandia.png",
      link: "https://www.sandia.gov",
    },
    {
      name: "SCM",
      image: "images/sponsors/scm.png",
      link: "https://www.scm-lp.com/",
    }
  ];

  return (
    <div className="sponsors">
      <div className="section-header sponsors-title">Sponsors</div>

    <div className="sponsor-blurb">
      Our work here at ACM@CMU would not be possible without the help of our amazing
      sponsors! We are immeasurably thankful for their support.
    </div>

      <div className="sponsors-content">
        <div className="sponsor-grid">
          {sponsors.map((sponsor, idx) => (
            <a
              key={idx}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-card"
            >
              <ResponsiveImage
                src={sponsor.image}
                alt={sponsor.name}
                className="sponsor-logo"
              />
            </a>
          ))}
        </div>

        <div className="sponsor-footer">
          Interested in sponsoring us? Email{" "}
          <a href="mailto:acm-exec@cs.cmu.edu">acm-exec@cs.cmu.edu</a>
        </div>
      </div>
    </div>
  );
}
