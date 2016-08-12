import {Controller, WatchCollection} from "../src/NgNext"

/**
 * Controller to demonstrate iterable for ng-repeat / $watchCollection
 */
@Controller("ExampleController")
export class ExampleController
{
    /**
     * Set is not an array and angular wouldn't be able to watch
     * it via $watchCollection, but with ng-next it works! :D
     * @type {Set}
     */
    list = new Set(["0", "1", "2", "3"]);

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
}

