class Food {
    constructor(){
        this.foodStock = 10;
        this.lastFed;

        this.button=createButton("press me");


    }
    display(){
    var title = createElement('h1');
    title.element("Virtual Pet Game");

    this.button.position(300,30);


    this.button.mousePressed(()=>{
        this.button.position(20,20);
        
    });

}



    getFoodStock(){


    }

    updateFoodStock(){

    }

    deductFood(){

    }


}