import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
  const btn_cardnew = document.getElementById('cardnew');
const btn_cardtitle = document.getElementById('cardtitle');
const btn_cardbg = document.getElementById('cardbg');
const btn_carddel = document.getElementById('carddel');
const btn_details = document.getElementById('details');

btn_cardnew.addEventListener("click", (e) => { 
  let clone = document.getElementById('card').cloneNode(true);
  clone.classList.add('dupecard');
  document.getElementById('cards').appendChild(clone);
  let btn_clonedetails = clone.children[3];
  btn_clonedetails.addEventListener("click", (e) => { 
    let desc = btn_clonedetails.previousElementSibling;
    (desc.style.display == 'none') ? (desc.style.display = '') : (desc.style.display = 'none');
  });
});
btn_cardtitle.addEventListener("click", (e) => { 
  if (document.querySelectorAll('.dupecard') != null) {
    index = prompt("Enter the index of the CLONE you wish to edit")
    title = prompt("Enter new title for the card");
    let clone = document.querySelectorAll('.dupecard')[index];
    clone.children[1].innerHTML = title;
  }
});
btn_cardbg.addEventListener("click", (e) => { 
  if (document.querySelectorAll('.dupecard') != null) {
    index = prompt("Enter the index of the CLONE you wish to edit")
    color = prompt("Enter a color such as red, or green or white to return to default");
    let clone = document.querySelectorAll('.dupecard')[index];
    clone.style.backgroundColor = color;
  }
});
btn_carddel.addEventListener("click", (e) => { 
  if (document.querySelectorAll('.dupecard') != null) {
    let dupecards = document.querySelectorAll('.dupecard'); document.getElementById('cards').removeChild(dupecards[dupecards.length - 1]);
  }
});
btn_details.addEventListener("click", (e) => { 
  let desc = btn_details.previousElementSibling;
  (desc.style.display == 'none') ? (desc.style.display = '') : (desc.style.display = 'none');
});
});
