//Write a func,on called reverse which accepts a string and returns
//a new string in reverse

function reverse(str) {
  return str.split('').reverse().join('')
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

console.log(reverse('awesome'));