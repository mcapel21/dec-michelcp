let i = 0;
document.getElementById("boto6").addEventListener("click", function () {
  console.log(`He sigut clickat ${i + 1} cops!`);
  i++;
});

/*  *** NO HE SAPIGUT ENTENDRE-HO MOLT BÉ PER TANT NO VOLIA FER UN EXEMPLE SENSE TINDRE-HO CLAR ***
let miPrimeraPromise = new Promise((resolt, rebutjat) => {
  // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
  // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
  // En la vida real, probablemente uses algo como XHR o una API HTML5.
  setTimeout(function () {
    resolt("¡Éxito!"); // ¡Todo salió bien!
  }, 250);
});

miPrimeraPromise
  .then((successMessage) => {
    // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
    // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
    console.log("S'ha pogut fer " + successMessage);
  })
  .catch(
    // Registrar la razón del rechazo
    function (deniedMessage) {
      console.log("No ha pogut ser.. " + deniedMessage);
    }
  );
*/
