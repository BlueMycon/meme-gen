document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const memeContainer = document.querySelector('#meme-container');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const imgUrl = document.querySelector('#image-url').value;
    const topText = document.querySelector('#top-text').value;
    const bottomText = document.querySelector('#bottom-text').value;

    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');

    const img = document.createElement('img');
    img.setAttribute('src', imgUrl);

    const topTextDiv = document.createElement('div');
    topTextDiv.classList.add('top-text');
    topTextDiv.innerText = topText;

    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add('bottom-text');
    bottomTextDiv.innerText = bottomText;

    memeDiv.appendChild(img);
    memeDiv.appendChild(topTextDiv);
    memeDiv.appendChild(bottomTextDiv);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function(e) {
      memeDiv.remove();
    });

    memeDiv.appendChild(deleteButton);
    memeContainer.appendChild(memeDiv);

    form.reset();
  });
});
