/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    "index",
    "installation",
    {
      "type": "category", "label": "Porting in your Games", "items": [
        "existing-game",
        "new-game"
      ]
    },
    {
      "type": "category", "label": "Specification", "items": [
        "sync-details",
        "project-format"
      ]
    },
    {
      "type": "category", "label": "Workflows", "items": [
        "workflows",
        "rojo-alternatives"
      ]
    },
    "help"
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: "category",
      label: "Tutorial",
      items: ["hello"],
    },
  ],
   */
};
