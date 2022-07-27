//class to interface with the DOM
class UI {
    constructor(card_section){
        this.card_section = card_section;
    }
    add_card(data,id){
        //create a div and store name of recipie and list ingredients
        let new_div = document.createElement("div");
        new_div.innerHTML = "<button>X</button>";
        let h1 = document.createElement("h1");
        h1.innerText = `${data.name}`;
        new_div.append(h1);
        let inner = document.createElement("ul");
        inner.setAttribute("id",`${id}`);
        inner.append(new_div);
        data.ingredients.forEach( ingredient => {
            let html = `<li>${ingredient}</li>`
            inner.innerHTML += html;
        })
        
        this.card_section.append(inner);
    }
}