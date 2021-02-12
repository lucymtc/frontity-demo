const settings = {
  "name": "frontitydemo",
  "state": {
    "frontity": {
      "url": "http://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "demo-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.frontity.org", 
          "postTypes": [
            {
              type: "destinations",
              endpoint: "destinations",
              archive: "/destinations"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
