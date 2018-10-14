import React from "react";

const Fetching = () => (
  <div>
    <span style={styles.fetching}>🐶 Fetching...</span>
  </div>
);

const Error = () => (
  <div style={styles.container}>
    <span style={styles.fetching}>Oh no! Something went wrong.</span>
    <img
      src="https://2b9sqw2iiqxr36ntqa1exnal-wpengine.netdna-ssl.com/wp-content/uploads/2010/05/sad-dog.jpg"
      style={styles.image}
    />
    <span style={styles.fetching}>Please refresh and try again.</span>
  </div>
);

const styles = {
  container: {
    alignItems: "center"
  },
  fetching: {
    fontSize: 30,
    fontFamily: "Luckiest Guy",
    color: "#17cbc4",
    margin: 10,
    letterSpacing: 1
  },
  image: {
    height: 170,
    width: 170
  }
};

export { Fetching, Error };
