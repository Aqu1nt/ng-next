import {Component, View, Alias, Bind} from "../src/NgNext"

@Component("example", {
    bindings : {
        text : "@"
    },
    template : "<h3>Example component 0: {{ $ctrl.text }}</h3>"
})
export class ExampleComponent
{

}

@Component("example1", {
    bindings : {
        text : "@"
    }
})
@View("<h3>Example component 1: {{ $ctrl.text }}</h3>")
export class Example1Component
{

}

@Component("example2")
@View("<h3>Example component 2: {{ exCtrl.text }}</h3>")
@Alias("exCtrl")
export class Example2Component
{
    @Bind("@") text;
}
