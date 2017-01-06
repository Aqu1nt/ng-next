import {Controller, WatchCollection, Inject, Init} from "../src/NgNext"


/**
 * Controller to demonstrate iterable for ng-repeat / $watchCollection
 */
@Controller("ExampleController")
export class ExampleController
{

    @Inject $http;

    /**
     * Title
     * @type {string}
     */
    title = "Ng-next example";

    /**
     * Set is not an array and angular wouldn't be able to watch
     * it via $watchCollection, but with ng-next it works! :D
     * @type {Set}
     */
    list = new Set(["0", "1", "2", "3"]);

    options = ["opt1", "opt2", "opt3"];

    /**
     * Adds an item to our set
     */
    add()
    {
        this.list.add((this.list.size) + "");
    }

    /**
     * Removes an item from our set
     */
    remove()
    {
        this.list.delete((this.list.size-1) + "");
    }

    /**
     * Replace the set with an empty one, reference change
     */
    change()
    {
        this.list = new Set();
    }

    @WatchCollection("list")
    observeList(list)
    {
        console.log("List changed to: ", list)
    }

    constructor(NgZone)
    {
        NgZone.runOutsideAngular(() => this.render());
    }


    /**
     * Test if the requestAnimationFrame is actually running outside
     */
    render()
    {
        requestAnimationFrame(() => {
            if (Zone.current === NgZone) {
                console.error("requestAnimationFrame runs inside AngularZone!!");
            }
            this.render();
        });
    }

    @Init async asyncHttpCall() {
        setTimeout(async () => {
            this.title = "setTimeout";
            await this.$http.get("http://jsonplaceholder.typicode.com");
            this.title = "Http request successful";
        }, 1000);
    }
}
