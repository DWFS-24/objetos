console.log('Holi')

function crearUsuario(name, lastName, age, email, job) {

  if( typeof name !== 'string' || name.trim() === '' ) {
    console.log('El Nombre es invalido.')
  }
  if( typeof lastName !== 'string' || lastName.trim() === '' ) {
    console.log('El Apellido es invalido.')
  }
  if( typeof email !== 'string' || email.trim() === '' ) {
    console.log('El Email es invalido.')
  }
  if( typeof job !== 'string' || job.trim() === '' ) {
    console.log('La ocupacion es invalida.')
  }
  if( typeof age !== 'number' || isNaN(age) || age < 0 ) {
    console.log('La edad es invalida.')
  }
  return {
    nombre: name,
    apellido: lastName,
    correo: email,
    edad: age,
    ocupacion: job
  }
}

const user1 = crearUsuario('fredo', 'hernandez', 29, 'fredo@mail.com', 'Tech Lead')
const user2 = crearUsuario('Antonio', 'hernandez', 29, 'fredo@mail.com', 'Tech Lead')
const user3 = crearUsuario('Aseret', 'hernandez', 29, 'fredo@mail.com', 'Tech Lead')
const user4 = crearUsuario('Nau', 'hernandez', 29, 'fredo@mail.com', 'Tech Lead')
const user5 = crearUsuario('Lizeth', 'hernandez', 29, 'fredo@mail.com', 'Tech Lead')
console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)
console.log(user5)


