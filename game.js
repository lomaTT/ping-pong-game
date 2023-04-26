import {Canvas} from "./canvas.js";
import {RenderUI} from "./renderUI";
import {Control} from "./control";

class Game {
    constructor() {
        this.screen = new Map([
            ["background", new Canvas()],
            ["gamelayer", new Canvas()],
            ["ui", new Canvas()]
        ]);

        this.control1 = new Control( [38, "up"], [40, "down"] );
        this.control2 = new Control( [87, "up"], [83, "down"] );

        this.UI = new RenderUI(this);

        this.init();
    }

    init() {
        this.screen.get("background").fill("#424357");
        this.screen.get("background").drawRect( (this.screen.get("background").element.width / 2) - 3,
            0, 6, this.screen.get("background").element.height, "#585874");
        this.screen.get("background").drawCircle( (this.screen.get("background").element.width / 2),
            (this.screen.get("background").element.height / 2), 100,
            6, "#585874", false);

        requestAnimationFrame( time => this.loop(time) );
    }

    update(time) {

    }

    loop(time) {
        this.update(time);
        requestAnimationFrame( time => this.loop(time) );
    }

}

window.onload = () => {
    const game = new Game();
}