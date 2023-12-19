// GoogleMap.jsx
import React from "react";

const GoogleMaps = () => {
  return (
    <section className="google-maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.7105876043765!2d25.9456517!3d43.799618099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae5fac19dbdba7%3A0x84a8b2c907c631e1!2sSJ%20Products!5e0!3m2!1sbg!2sbg!4v1702926044910!5m2!1sbg!2sbg"
        width="600"
        height="300"
        style={{border: "0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="maps-img"
      ></iframe>
    </section>
  );
};

export default GoogleMaps;
