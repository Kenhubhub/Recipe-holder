//class to/remove/store recipes
class Recipes{
    constructor(){
        this.recipes = db.collection("Recipes");
    }
    async addRecipe(recipe,ingredients){
        const now = new Date();
        const to_add ={
            name: recipe,
            ingredients,
            Uploaded: firebase.firestore.Timestamp.fromDate(now)
        }
        const response = await this.recipes.add(to_add);
        return response;
    }
    async getRecipes(callback){
        this.recipes.onSnapshot( snapshot => {
            // callback(snapshot.docChanges());
            snapshot.docChanges().forEach( change => {
                if(change.type === "added"){
                    //Pass a callback function which updates the UI
                    callback(change.doc.data());
                }
            })
        })
    }
    async removeRecipes(){

    }
}

const recipe_database = new Recipes();
recipe_database.getRecipes((data) => {
    console.log(data);
})
