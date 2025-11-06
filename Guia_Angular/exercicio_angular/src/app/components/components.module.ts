import { NgModule } from "@angular/core";
import { Button } from './button/button'
import { Card } from './card/card'

@NgModule({
    imports: [
        Button,
        Card
    ],
    exports: [
        Button,
        Card
    ]
})
export class componentsModule { }