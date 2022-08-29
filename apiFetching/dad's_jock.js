// fetch(link).te
fetch(`https://icanhazdadjoke.com/slack`)
  .then((rse) => rse.json())
  .then((data) => document.write(data.attachments[0].text))
