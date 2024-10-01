import React from "react";

function speakers() {
  return (
    <>
      <Header />
      <Speakermain />
    </>
  );
}

function Header(params) {
  return (
    <div className="speaker-header">
      <div className="Speakers overlay">
        <h1 className="Speaker-heading">Speakers</h1>
      </div>
    </div>
  );
}

function Speakermain(params) {
  return (
    <div className="speakermain-container">
      <div className="backgrounds">
        <div className="background1"></div>
      </div>
      <GlowingStar size={50} x="450px" y="230px" rotate={65} />
      <GlowingStar size={50} x="713px" y="295px" rotate={60} />
      <GlowingStar x="758px" y="611px" />
      <GlowingStar x="747px" y="890px" />
      <div className="BoxforDean">
        <BoxForDean
          heading={"Mr. Dean"}
          para={
            "Sit viverra tincidunt pharetra sit ornare posuere sapien diam. Nisl orci ut scelerisque vitae. Integer pretium dignissim vel tortor interdum libero at netus."
          }
          x="100px"
          y="410px"
        />
        <BoxForDean
          heading={"Mr. Dean"}
          para={
            "Sit viverra tincidunt pharetra sit ornare posuere sapien diam. Nisl orci ut scelerisque vitae. Integer pretium dignissim vel tortor interdum libero at netus."
          }
          x="903px"
          y="699px"
        />
        <BoxForDean
          heading={"Mr. Dean"}
          para={
            "Sit viverra tincidunt pharetra sit ornare posuere sapien diam. Nisl orci ut scelerisque vitae. Integer pretium dignissim vel tortor interdum libero at netus."
          }
          x="88px"
          y="954px"
        />
        <BoxForDean
          heading={"Mr. Dean"}
          para={
            "Sit viverra tincidunt pharetra sit ornare posuere sapien diam. Nisl orci ut scelerisque vitae. Integer pretium dignissim vel tortor interdum libero at netus."
          }
          x="983px"
          y="1114px"
        />
      </div>
      <ProfileCard x="1063px" y="664px" />
      <ProfileCard x="987px" y="-485px" />
      <ProfileCard x="161px" y="-253px" />
      <ProfileCard x="181px" y="-1518px" />
    </div>
  );
}

export default speakers;

function BoxForDean({ heading, para, x = "0px", y = "0px" }) {
  return (
    <div
      className="content-box"
      style={{
        position: "relative", // Set the position to absolute
        left: x, // Use left for x positioning
        top: y,
      }}
    >
      <h2>{heading}</h2>
      <p>{para}</p>
    </div>
  );
}

const GlowingStar = ({ size = 50, x = "0px", y = "0px", rotate = 0 }) => {
  return (
    <div
      className="star"
      style={{
        width: size,
        height: size,
        position: "relative", // Set the position to absolute
        left: x, // Use left for x positioning
        top: y, // Use top for y positioning
        transform: `rotate(${rotate}deg)`,
      }}
    ></div>
  );
};

const ProfileCard = ({ x = "0px", y = "0px" }) => {
  return (
    <div
      className="profile-card"
      style={{
        position: "relative",
        left: x, //
        top: y,
      }}
    >
      <div className="profile-img-container">
        <img
          src="../assets/Dean_img.png"
          alt="Profile"
          className="profile-img"
        />
      </div>
    </div>
  );
};
