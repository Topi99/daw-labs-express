document.addEventListener('DOMContentLoaded', e => {
  const search = document.querySelector('#search');
  console.log('Hola');

  
  search.addEventListener('click', async e => {
    e.preventDefault();
    console.log('Hola');
    const cadena = document.querySelector('#cadena').value;
    
    const res = await axios.post('/backend/ajax', {cadena});
    
    const container = document.querySelector('.imageGrid');
    container.innerHTML = '';
    
    console.log(res.data);
    res.data.forEach(image => {
      const dotImage = document.createElement('div');
      dotImage.className = 'image';
      
      const img = document.createElement('img');
      const p = document.createElement('p');
      const a = document.createElement('a');

      a.href = '/backend/lab14/'+image.id;
      a.innerHTML = 'Publicado por: ' + image.name;
      p.appendChild(a);

      img.src = image.photoURL;

      dotImage.appendChild(img);
      dotImage.appendChild(p);

      container.appendChild(dotImage);
    });
  });
});