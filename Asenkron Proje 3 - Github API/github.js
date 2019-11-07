class Github{

constructor(){
    this.url = "https://api.github.com/users/";
}
async getUserAsync(name) 
{
  let response = await fetch(this.url+name);
  let data = await response.json()
  let response2 = await fetch(this.url+name+'/repos'); 
  let data2 = await response2.json();
  return {
      user : data,
      repo : data2

  }
}


}