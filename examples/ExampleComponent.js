import {Component, View} from "../src/NgNext"

@Component("example")
@View("<h3 (click)='$ctrl.click()'>... CLICK ME ... </h3>")
export class ExampleComponent
{
    click()
    {
        console.log("click");
    }
}