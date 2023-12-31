const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName("h2");
    console.log('searchbox ' + searchbox);
    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0]
        console.log(product[i].getElementsByTagName('h2')[0]);
        // console.log(match = product[i].getElementsByTagName('h2'));
        if(match){
           let textvalue = match.textContent || match.innerHTML
            console.log('textvalue ' + textvalue);
           if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
                console.log('index of ' + textvalue.toUpperCase().indexOf(searchbox));
           }else{
                product[i].style.display = "none";
           }
        }
    }
}

