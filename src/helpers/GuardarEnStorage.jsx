export const guardarPeli = (key, elemento) => {
  
  let elementos = JSON.parse(localStorage.getItem(key));

  if (Array.isArray(elementos)){
    elementos.push(elemento);
  }else {
    elementos = [elemento];
  }

  localStorage.setItem(key, JSON.stringify(elementos));

  return elemento;
}