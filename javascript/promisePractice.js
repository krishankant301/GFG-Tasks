async function fetchData(){
    const response = await fetch("https://dummyjson.com/products");
    console.log(response);
    const data = await response.json();
    console.log(data);

}
fetchData();