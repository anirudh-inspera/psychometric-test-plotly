# psychometric-test-plotly
POC for using plotly to render and visualize psychometric tests data

Link to Plotly JS Docs - https://plotly.com/javascript/

To run this make sure you have node js installed and then run the following command - 
`npx lite-server`
Press Y if the prompt asks you to install lite-server (this only happens the first time you run the command)

This repository contains an implementation of all graph types shown in this [Doc](https://inspera.atlassian.net/wiki/spaces/TESTC/pages/5440241669/Psychometric+dashboard+Phase+2+-+CTT+metrics)

The only thing plotly does not support out of the box is the tables with cells having background color based on the value it contains. This might be something we'll need to build on our own.

Since this needs to integrated in platform-ia reporting page and that page uses Marionette JS (not React JS), we can use the Plain JS version of the library for the integration. We would also need to add this package in the build process so it gets packaged up properly in our js bundle and can be used in platfrom-ia.

Video Recording of the Demo -

https://github.com/user-attachments/assets/011964ab-06eb-4445-9672-98e0b96897d3

