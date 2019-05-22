import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[cmAppLoop]"
})
export class AppLoopDirective {
   @Input('cmAppLoopOf') cmAppLoopOf: Array<any>;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  //another wayout
  // @Input('cmAppLoopOf')
  // set cmAppLoopOf(cmAppLoopOf: any){

  //   this.container.clear();

  //     for (const input of cmAppLoopOf) {
  //       this.container.createEmbeddedView(this.template, {
  //         $implicit: input,
  //         index: cmAppLoopOf.indexOf(input)
  //       });
  //     }
  //   }
  

  ngOnChanges() {
    this.container.clear();

    for (const input of this.cmAppLoopOf) {
      this.container.createEmbeddedView(this.template, {
        $implicit: input,
        index: this.cmAppLoopOf.indexOf(input)
      });
    }
  }
}
