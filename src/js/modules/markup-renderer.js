import cardParser from './card-parser';

export default function markupRenderer({ loader, target, content }) {
  loader(content)
    .then(data => {
      const markup = data.results
        .map(result => {
          return cardParser(result);
        })
        .join('');
      target.innerHTML = markup;
    })
    .catch(console.log);
}
